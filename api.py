"""API Endpoints"""

import json
from webapp2 import RequestHandler, cached_property
from token_store import TokenStore
from google.appengine.api import mail
# from jsonschema import validate


class ListingHandler(RequestHandler):
    """API handler"""
    def get(self):
        """GET Requests"""
        listing = self.request.get("listing")
        self.response.out.write("hello")
        t = TokenStore()
        t.listing = listing
        t.put()

    # def send_approved_mail(self, sender_address):
    #     # [START send_mail]
    #     mail.send_mail(sender=sender_address,
    #                    to="Albert Johnson <kyle.dupont@gmail.com>",
    #                    subject="Your account has been approved",
    #                    body="""Dear Albert:
    # Your example.com account has been approved.  You can now visit
    # http://www.example.com/ and sign in using your Google Account to
    # access new features.
    # Please let us know if you have any questions.
    # The example.com Team
    # """)
    #     # [END send_mail]

    def post(self):
        """POST Requests"""
        # schema = {
        #     "type" = "object" {
        #     "properties" : {
        #         "category" : {"type" : "string"},
        #         "title" : {"type" : "string"},
        #         "asset_name" : {"type" : "string"},
        #         "date_added" : {"type" : "string"},
        #         "amount" : {"type" : "number"},
        #         "price" : {"type" : "number"},
        #         "owner" : {"type" : "string"},
        #         "pointer" : {"type" : "string"},
        #         "eth_address" : {"type" : "string"},
        #     }
        # }
        input = json.loads(self.request.body)
        # validate(listing, schema)
        print input["listing"]
