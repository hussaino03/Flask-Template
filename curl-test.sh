#!/bin/bash

curl --request GET http://localhost:5000/api/timeline_post

curl --request POST http://localhost:5000/api/timeline_post -d 'name=Hussain&email=Hussain@gmail.com&content=Just Added Dtatbase to my portfolio site'
