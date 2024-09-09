const int buttonPower = 2;  // 전원 버튼 핀

const int redPin = 9;       // 빨강 LED 핀
const int greenPin = 10;    // 초록 LED 핀
const int bluePin = 11;     // 파랑 LED 핀

bool isOn = false;          // LED 상태 저장
bool check = false;

void setup() {
  pinMode(buttonPower, INPUT_PULLUP);  // 전원 버튼 설정
  pinMode(redPin, OUTPUT);             // 빨강 LED 핀 설정
  pinMode(greenPin, OUTPUT);           // 초록 LED 핀 설정
  pinMode(bluePin, OUTPUT);            // 파랑 LED 핀 설정
}

void loop() {
  // 전원 버튼이 눌렸을 때 LED를 켜고 끄기
    if (digitalRead(buttonPower) == HIGH) {
      if (check == false) {
        isOn = !isOn;
        check = true;
      }
    } else {
      check = false;
    }

    if (isOn) {
      // LED 켜기 (빨강, 초록, 파랑 최대 밝기)
      analogWrite(redPin, 255);
      analogWrite(greenPin, 255);
      analogWrite(bluePin, 255);
    } else {
      // LED 끄기
      analogWrite(redPin, 0);
      analogWrite(greenPin, 0);
      analogWrite(bluePin, 0);
    }
  }

