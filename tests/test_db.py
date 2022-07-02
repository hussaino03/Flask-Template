# test_db.py
#!/usr/bin/env python3

import unittest
from peewee import *

from app import TimelinePost
from playhouse.shortcuts import model_to_dict 

MODELS = [TimelinePost]

#use an in-memeory SQLite for tests
test_db = SqliteDatabase(':memory:')

class TestTimelinePost(unittest.TestCase):
    def setUp(self):
        # Bind model classes to test db. Since we have a complete list of
        # all models, we do not need to recursively bind dependencies.
        test_db.bind(MODELS, bind_refs=False, bind_backrefs=False)
        
        test_db.connect()
        test_db.create_tables(MODELS)

    def tearDown(self):
        # Not strictly necessary since SQLite in-memory databases only live
        # for the duration of the connection, and in the next step we close
        # the connection...but a good practice all the same.
        test_db.drop_tables(MODELS)

        # Close connection to db.
        test_db.close()

    def test_timeline_post(self):
        #Create 2 timeline posts
        first_post = TimelinePost.create(
            date='01/07/2022', 
            title='John', 
            events='Hello world, I\'m John!'
        )
        assert first_post.id == 1
        second_post = TimelinePost.create(
            date='30/06/2022', 
            title='Jane', 
            events='Hello world, I\'m Jane!'
        )
        assert second_post.id == 2
        
        # TODO: Get timeline posts and assert that they are correct
        response1 = model_to_dict(TimelinePost.get_by_id(1))
        response2 = model_to_dict(TimelinePost.get_by_id(2))

        assert first_post.date == response1["date"]
        assert first_post.title == response1["title"]
        assert first_post.events == response1["events"]

        assert second_post.date == response2["date"]
        assert second_post.title == response2["title"]
        assert second_post.events == response2["events"]

        