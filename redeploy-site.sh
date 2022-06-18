#!/bin/bash

pkill -f tmux
cd team-portfolio
git fetch && git reset origin/main --hard
pip3 install -r requirements.txt
tmux new -d -s pfolio-session
cd team-portfolio
python -m venv python3-virtualenv
source python3-virtualenv/bin/activate
export FLASK_ENV=development
flask run 
