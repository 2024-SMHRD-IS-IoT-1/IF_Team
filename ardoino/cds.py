from flask import Flask, render_template, request

app = Flask(__name__)

# 전역 변수로 조도 값 저장
brightness_value = 0

@app.route('/')
def index():
    # index.html로 조도 값 전달
    return render_template('cds.html', brightness=brightness_value)

@app.route('/update_brightness', methods=['GET'])
def update_brightness():
    global brightness_value
    # 아두이노에서 받은 brightness 값 처리
    brightness_value = request.args.get('brightness', default=0, type=int)
    print(f"Received brightness value: {brightness_value}")
    return "OK", 200

if __name__ == '__main__':
    app.run(host="192.168.219.57", port=5000)

