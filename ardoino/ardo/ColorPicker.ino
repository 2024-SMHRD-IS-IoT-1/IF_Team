#include <ArduinoJson.h>
#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "SHRDI_501B"; // WIFI ID
const char* password = "a123456789"; // WIFI PW

// Server 요청 주소
String address = "http://192.168.219.57:5000/get_rgb"; // GET 방식

String result = ""; // 응답 결과 저장
HTTPClient http; // 통신 객체

void setup() {
  pinMode(25, OUTPUT);
  pinMode(26, OUTPUT);
  pinMode(27, OUTPUT);

  Serial.begin(115200); // Baud rate

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }

  Serial.println("Connected to the WiFi network");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {  // 현재 연결 상태 확인

    http.begin(address);

    int httpCode = http.GET();  // 응답코드
    if (httpCode > 0) {
      result = http.getString();  // 응답 결과 저장
      Serial.println(result);     // 응답 결과 출력

      // JSON 데이터 파싱
      StaticJsonDocument<200> doc;
      DeserializationError error = deserializeJson(doc, result);

      if (!error) {
        int r = doc["r"]; // JSON에서 r 값 추출
        int g = doc["g"]; // JSON에서 g 값 추출
        int b = doc["b"]; // JSON에서 b 값 추출
        const int relayPin = 18;

        // 값을 출력하여 확인
        Serial.print("Red: ");
        Serial.print(r);
        Serial.print(" Green: ");
        Serial.print(g);
        Serial.print(" Blue: ");
        Serial.println(b);

        // LED 색상 변경
        digitalWrite(relayPin, HIGH); //릴레이 접점 ON
        delay(1000); //1초 대기
        digitalWrite(relayPin, LOW); //릴레이 접점 OFF
        delay(1000); //1초 대기    
            
        analogWrite(25, r); // Red 채널
        analogWrite(26, g); // Green 채널
        analogWrite(27, b); // Blue 채널
      } else {
        Serial.println("JSON 파싱 에러");
      }
    } else {
      Serial.println("HTTP 요청 실패");
    }

    http.end();  // 리소스 해제
  } else {
    Serial.println("WiFi 연결 에러");
  }

  delay(5000); // 5초 대기
}
