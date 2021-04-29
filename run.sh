#!/bin/bash

pip install --upgrade pip
pip install tornado
python server/main.py & cd client && npm install && npm start


