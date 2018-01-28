"""API Endpoints"""

import json
from webapp2 import RequestHandler, cached_property
from token_store import TokenStore
from google.appengine.api import mail


class APIHandler(RequestHandler):
    """API handler"""
    def get(self):
        """GET Requests"""
        name = self.request.get("name")
        self.response.out.write("hello")
        t = TokenStore()
        t.name = name
        t.put()
        email = self.request.get("email")
        self.send_approved_mail(email)

    def send_approved_mail(self, sender_address):
        # [START send_mail]
        mail.send_mail(sender=sender_address,
                       to="Albert Johnson <kyle.dupont@gmail.com>",
                       subject="Your account has been approved",
                       body="""Dear Albert:
    Your example.com account has been approved.  You can now visit
    http://www.example.com/ and sign in using your Google Account to
    access new features.
    Please let us know if you have any questions.
    The example.com Team
    """)
        # [END send_mail]

    def post(self):
        """POST Requests"""
        print json.loads(self.request.body)["name"]
