import webapp2
from api import APIHandler

app = webapp2.WSGIApplication(
    [    
       ("/*", APIHandler),
    ],
    debug=True)
