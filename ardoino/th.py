from flask import Flask, render_template, request

app = Flask(__name__)

# In-memory storage for temperature and humidity
data = {'temperature': '0.0', 'humidity': '0.0'}

@app.route('/')
def index():
    return render_template('TempHum.html', **data)

@app.route('/update')
def update():
    global data
    temperature = request.args.get('temperature', '0.0')
    humidity = request.args.get('humidity', '0.0')
    data['temperature'] = temperature
    data['humidity'] = humidity
    return 'Data updated successfully!'

if __name__ == '__main__':
    app.run(host='192.168.219.57', port=5000)
