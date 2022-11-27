from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/unit1")
def unit1():
    return render_template("unit1.html")

if __name__== "__main__":
    app.run(debug=True)
