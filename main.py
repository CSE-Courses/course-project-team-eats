import bottle
import json
import DBfuncts


@bottle.route("/")
def index_file():
    return bottle.static_file("index.html", root="")


@bottle.route("/frontend.js")
def static():
    return bottle.static_file("frontend.js", root="")


@bottle.post("/sendquery")
def send_code():
    content = bottle.request.body.read().decode()
    food_choice = json.loads(content)
    return json.dumps(DBfuncts.food_spec(food_choice))

@bottle.post("/insertquery")
def send_code():
    content = bottle.request.body.read().decode()
    user_rests = json.loads(content)
    return json.dumps(DBfuncts.user_spec_autocomplete(user_rests))



bottle.run(host="0.0.0.0", port=8080, debug=True)
