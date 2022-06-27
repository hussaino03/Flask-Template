<div align="center">
  <img alt="Logo" src="assets/favicon/apple-touch-icon.png" width="100" />
</div>
<h1 align="center">
  Flask Portfolio Template 
</h1>
<p align="center">
   <a href="https://www.hussaino.me" target="_blank">hussaino.duckdns.org</a>
</p>

## 🚀 Portfolio Template

This portfolio template is built with Python, Flask, Jinja, JavaScript, HTML/CSS 


## 💫 Deployment

- Frontend only (can be easily hosted through Github Pages, Vercel)


## ⛏️ Built With

- [Flask](https://flask.palletsprojects.com/en/2.1.x/)
- [Python](https://www.python.org/)
- [Jinja](https://jinja.palletsprojects.com/en/3.1.x/)
- [JavaScript](https://www.javascript.com/)
- [HTML/CSS](https://www.w3.org/standards/webdesign/htmlcss)

## ⚙️ Installation

Make sure you have python3 and pip installed

Create and activate virtual environment using virtualenv
```bash
$ python -m venv python3-virtualenv
$ source python3-virtualenv/bin/activate
```

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all dependencies!

```bash
pip install -r requirements.txt
```

## Usage

Create a .env file using the example.env template (make a copy using the variables inside of the template)

Start flask development server
```bash
$ export FLASK_ENV=development
$ flask run
```

You should get a response like this in the terminal:
```
❯ flask run
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

You'll now be able to access the website at `localhost:5000` or `127.0.0.1:5000` in the browser!
