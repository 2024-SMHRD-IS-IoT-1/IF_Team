#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "SHRDI_501B";       // WiFi SSID
const char* password = "a123456789"; // WiFi Password
const char* serverName = "http://192.168.219.57:5000/update_brightness"; // Flask 서버 URL

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  int value = analogRead(35);  // 조도 센서 값을 읽음
  Serial.println(value);
  delay(1000);
  
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = String(serverName) + "?brightness=" + String(value);
    http.begin(url);  // HTTP 요청을 초기화
    int httpResponseCode = http.GET();  // GET 요청을 보내고 응답 코드를 받음

    if (httpResponseCode > 0) {
      String payload = http.getString();
      Serial.println(payload);  // 서버의 응답을 출력
    } else {
      Serial.println("Error in HTTP request");
    }
    http.end();  // HTTP 연결 종료
  }

  delay(1000);  // 1초마다 조도 값을 업데이트
}
