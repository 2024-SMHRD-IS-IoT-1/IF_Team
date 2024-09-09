#include <DHT.h>  // 온습도 센서 라이브러리

#define DHTPIN 18     // DHT11 센서 핀
#define DHTTYPE DHT11 // DHT 센서 유형: DHT11

int motorA = 26;  // 모터 제어 핀 A
int motorB = 25;  // 모터 제어 핀 B
int buttonPin = 19;   // 버튼 핀 설정
bool humidifierState = false;  // 가습기 상태 저장
bool check = false;

DHT dht(DHTPIN, DHTTYPE);  // DHT 객체 생성

void setup() 
{
    Serial.begin(115200);       // 시리얼 통신 시작
    pinMode(motorA, OUTPUT);
    pinMode(motorB, OUTPUT);
    pinMode(buttonPin, INPUT_PULLUP);  // 버튼 입력 모드 설정 (풀업 저항)
    dht.begin();  // DHT 센서 시작
}

void loop() 
{
    float temp = dht.readTemperature();  // 온도 측정
    float humi = dht.readHumidity();     // 습도 측정

    // 온습도 센서 오류 처리
    if (isnan(temp) || isnan(humi)) {
        Serial.println("Failed to read from DHT sensor!");
        return;
    }

    Serial.print("temperature: ");
    Serial.print(temp);
    Serial.print(" humidity: ");
    Serial.println(humi);

    if (digitalRead(buttonPin) == HIGH) {
      if (check == false) {
        humidifierState = !humidifierState;
        check = true;
      }
    } else {
      check = false;
    }

    delay(300);  // 짧은 딜레이
    // 버튼을 눌렀을 때 (LOW 신호)
    // if (digitalRead(buttonPin) == LOW) {
    //     delay(100);  // 디바운스 처리 (짧은 시간에 여러 번 읽히는 문제 방지)
    //     humidifierState = !humidifierState;  // 가습기 상태 토글
    //     while (digitalRead(buttonPin) == LOW);  // 버튼이 눌려 있는 동안 대기
    // }

    // 가습기 상태에 따라 모터 제어
    if (humidifierState) {
        digitalWrite(motorA, LOW);
        digitalWrite(motorB, HIGH);
        Serial.println("humidifier_ON");
    } else {
        digitalWrite(motorA, HIGH);
        digitalWrite(motorB, HIGH);
        Serial.println("humidifier_OFF");
    }

}
