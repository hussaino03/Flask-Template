# tests/test_app.py
#!/usr/bin/env python3

import unittest
import os
os.environ['TESTING'] = 'true'
from tests import test_db

from app import app

class ApptestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
    
    def test_home(self):
        response = self.client.get("/")
        assert response.status_code == 200
        html = response.get_data(as_text=True)
        assert "<title>My Portfolio</title>" in html
        # TODO add more tests relating to the home page
        assert "<em>m.hussainomer03@gmail.com</em>" in html

    def test_timeline(self):
        response = self.client.get("api/timeline_post")
        assert response.status_code == 200
        assert response.is_json
        json = response.get_json()
        assert "posts" in json
        assert len(json["posts"]) == 0
        # TODO Add more tests relating to the /api/timeline_post GET and POST apis
        # use the 2 posts in test_db.py
        test_db.TestTimelinePost.test_timeline_post(self)
        response = self.client.get("api/timeline_post")
        assert response.status_code == 200
        # TODO Add more tests relating to the timeline page
        assert response.is_json
        json = response.get_json()
        assert "posts" in json
        assert len(json["posts"]) == 2

    def test_malformed_timeline_post(self):
        # POST request missing title
        response = self.client.post("/api/timeline_post", 
        data={
              "date": "06/06/2022",
              "events": "Hello world, I'm John!"
             })
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid title" in html

        # POST request with empty events
        response = self.client.post("/api/timeline_post",data=
        {
            "date":"01/07/2022",
            "title":"John",
            "events":""
        })
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid events" in html

        # POST request with missing date
        response = self.client.post("/api/timeline_post",data=
        {
            "title":"John",
            "events":"Hello world, I'm John!"
        })
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid date" in html

        # POST request with malformed email
        response = self.client.post("/api/timeline_post",data=
        {
            "date":"date",
            "title":"John",
            "events":"Hello world, I'm John!"
        })
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid date" in html
