#!/bin/bash

pkill -f tmux
cd project-h-squad-AnthonyH
git fetch && git reset origin/main --hard
pip3 install -r requirements.txt
tmux new -d -s pfolio-session
cd project-h-squad-AnthonyH
python -m venv python3-virtualenv
source python3-virtualenv/bin/activate
export FLASK_ENV=development
flask run 
