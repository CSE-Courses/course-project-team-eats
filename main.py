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
    print("first")
    content = bottle.request.body.read().decode()
    food_choice = json.loads(content)
    print("second")
    return json.dumps(DBfuncts.food_spec(food_choice))
    #return json.dumps(DBfuncts.test(food_choice))


bottle.run(host="0.0.0.0", port=3306, debug=True)
#bottle.run(server='cheshire', host='0.0.0.0', port=3306,debug=True)
