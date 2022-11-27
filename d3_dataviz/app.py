from flask import Flask, render_template

app = Flask(__name__)

@app.route("/unit1")
def index():
    return render_template("unit1.html")

if __name__== "__main__":
    app.run(debug=True)
