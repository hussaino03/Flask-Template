#!/usr/bin/env bash

pkill -f tmux
cd team-portfolio
git fetch && git reset origin/main --hard
pip3 install -r requirements.txt
tmux new -d 'flask run --host=0.0.0.0'
tmux attach
cd /root/team-portfolio
python -m venv python3-virtualenv
source python3-virtualenv/bin/activate
export FLASK_ENV=development
flask run --host=0.0.0.0
