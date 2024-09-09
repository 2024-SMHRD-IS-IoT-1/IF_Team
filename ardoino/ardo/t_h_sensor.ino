#include <ArduinoJson.h>
#include <WiFi.h>
#include <DHT.h>

#define DHTPIN 26     // DHT 센서가 연결된 핀 번호 정의
#define DHTTYPE DHT11 // DHT11 센서 사용

DHT dht(DHTPIN, DHTTYPE); // DHT 센서 객체 생성

const char* ssid = "SHRDI_501B";          // Wi-Fi SSID
const char* password = "a123456789";  // Wi-Fi Password
const char* host = "192.168.219.57";     // Flask 서버 IP 주소

void setup() {
  Serial.begin(115200);  // 시리얼 통신 시작 (속도: 115200 보드)
  dht.begin();           // DHT 센서 초기화

  // Wi-Fi 연결 설정
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected to Wi-Fi");
}

void loop() {
  float h = dht.readHumidity();    // DHT 센서로부터 습도 값 읽기
  float t = dht.readTemperature(); // DHT 센서로부터 온도 값 읽기
  Serial.print("Temperature: ");   // 시리얼 모니터에 온도 출력
  Serial.print(t);                 // 읽은 온도 값 출력
  Serial.println(" C");            // 온도 단위 (섭씨) 출력

  Serial.print("Humidity: ");      // 시리얼 모니터에 습도 출력
  Serial.print(h);                // 읽은 습도 값 출력
  Serial.println(" %");           // 습도 단위 (%) 출력

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  WiFiClient client;
  if (client.connect(host, 5000)) { // 5000번 포트로 연결 (Flask 서버 포트)
    String url = String("/update?temperature=") + t + "&humidity=" + h;

    client.print(String("GET ") + url + " HTTP/1.1\r\n" +
                 "Host: " + host + "\r\n" +
                 "Connection: close\r\n\r\n");

    delay(2000); // 2초 대기
  }
}


