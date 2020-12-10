import os
from bottle import route, run
import bottle
import json
import DBfuncts


@bottle.route('/')
def index_file():
    return bottle.static_file("index.html", root="")


@bottle.route('/frontend.js')
def static():
    return bottle.static_file("frontend.js", root="")


@bottle.post('/add_restaurant')
def send_code():
    print("here")
    content = bottle.request.body.read().decode()
    food_choice = json.loads(content)
    return json.dumps(DBfuncts.addUser(food_choice))

@bottle.post('/delete')
def send_code():
    return json.dumps(DBfuncts.deleteAll())

@bottle.post('/algo')
def send_code():
    return json.dumps(DBfuncts.algo())

@bottle.post('/test')
def send_code():
    return json.dumps(DBfuncts.testdata())


bottle.run(host = '0.0.0.0', port=int(os.environ.get('PORT', 5000)))
