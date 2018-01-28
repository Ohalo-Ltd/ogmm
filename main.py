import webapp2
from api import ListingHandler

app = webapp2.WSGIApplication(
    [    
       ("/*", ListingHandler),
    ],
    debug=True)
