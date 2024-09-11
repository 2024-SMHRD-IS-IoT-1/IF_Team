from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# 변수 초기화
temperature = None
humidity = None
brightness = None
rgb = {'r': 0, 'g': 0, 'b': 0}

# 홈 경로에서 HTML 페이지 렌더링
@app.route('/')
def index():
    return render_template('toget.html', temperature=temperature, humidity=humidity, brightness=brightness, rgb=rgb)

# RGB 값을 받을 엔드포인트
@app.route('/send_rgb', methods=['POST'])
def send_rgb():
    data = request.json
    r = data.get('r')
    g = data.get('g')
    b = data.get('b')
    
    global rgb
    rgb = {'r': r, 'g': g, 'b': b}
    
    print(f"Received RGB: ({r}, {g}, {b})")
    
    # RGB 값을 파일에 저장
    with open('rgb.txt', 'w') as f:
        f.write(f"{r} {g} {b}")
    
    return jsonify({'status': 'success', 'r': r, 'g': g, 'b': b})

@app.route('/get_rgb', methods=["GET"])
def get_rgb():
    try:
        with open('rgb.txt', 'r') as f:
            data = f.read()
        rgb_list = data.split()
        return jsonify({'r': rgb_list[0], 'g': rgb_list[1], 'b': rgb_list[2]})
    except FileNotFoundError:
        return jsonify({'r': 0, 'g': 0, 'b': 0})

# 센서 정보를 업데이트하는 엔드포인트
@app.route('/update', methods=['POST'])
def update():
    global temperature, humidity, brightness
    temperature = request.form.get('temperature', type=float)
    humidity = request.form.get('humidity', type=float)
    brightness = request.form.get('brightness', type=int)
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(host='192.168.219.60', port=6000)