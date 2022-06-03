import os
from flask import Flask, render_template, request
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title="MLH Fellow", url=os.getenv("URL"))

@app.route('/aboutMe')
def aboutMe():
    return render_template('about_me.html', title="MLH Fellow")

@app.route('/experience')
def experience():
    return render_template('experience.html', title="MLH Fellow")

@app.route('/travel')
def travel():
    return render_template('travel.html', title="MLH Fellow")

@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html', title="MLH Fellow")

@app.route('/education')
def education():
    return render_template('education.html', title="MLH Fellow")