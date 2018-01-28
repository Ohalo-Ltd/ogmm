from google.appengine.ext import ndb

class TokenStore(ndb.Expando):
	created = ndb.DateTimeProperty(auto_now_add=True)
	listing = ndb.StringProperty()