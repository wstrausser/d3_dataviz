from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/units/unit1")
def unit1():
    return render_template("unit1.html")

@app.route("/units/unit2")
def unit2():
    return render_template("unit2.html")

@app.route("/experiments")
def unit3():
    return render_template("experiments.html")

if __name__== "__main__":
    app.run(debug=True)
