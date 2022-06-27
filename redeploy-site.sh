#!/usr/bin/env bash

cd team-portfolio
git fetch && git reset origin/main --hard
python -m venv python3-virtualenv
source python3-virtualenv/bin/activate
pip3 install -r requirements.txt
systemctl daemon-reload
systemctl restart myportfolio
systemctl enable myportfolio
systemctl start myportfolio
