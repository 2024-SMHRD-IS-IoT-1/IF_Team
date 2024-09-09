from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

# 홈 경로에서 HTML 페이지 렌더링
@app.route('/')
def index():
    return render_template('ColorPicker.html')

# RGB 값을 받을 엔드포인트
@app.route('/send_rgb', methods=['POST'])
def send_rgb():
    data = request.json
    r = data.get('r')
    g = data.get('g')
    b = data.get('b')
    
    print(f"Received RGB: ({r}, {g}, {b})")
    with open('rgb.txt', 'w') as f :
        f.write(f"{r} {g} {b}")
    # ESP32로 RGB 값을 전송
    # esp32_send_rgb(r, g, b)

    return jsonify({'status': 'success', 'r': r, 'g': g, 'b': b})

@app.route('/get_rgb', methods=["GET"])
def get_rgb():
    with open('rgb.txt', 'r') as f :
        data = f.read()

    rgb = data.split()
    print(rgb)
    return jsonify({'r': rgb[0], 'g': rgb[1], 'b' : rgb[2]})

# ESP32로 RGB 값을 보내는 함수
def esp32_send_rgb(r, g, b):
    esp32_ip = 'http://192.168.219.57:5000/'  # ESP32의 IP 주소로 변경
    payload = {'r': r, 'g': g, 'b': b}
    try:
        response = requests.post(esp32_ip, json=payload)
        print(f"Sent to ESP32: {response.status_code}")
    except Exception as e:
        print(f"Error sending to ESP32: {e}")

if __name__ == '__main__':
    app.run(host = "192.168.219.57", port = 5000)



