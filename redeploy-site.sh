#!/usr/bin/env bash

pkill -f tmux
cd team-portfolio
git fetch && git reset origin/main --hard
pip3 install -r requirements.txt
tmux new -d 'flask run --host=0.0.0.0'
