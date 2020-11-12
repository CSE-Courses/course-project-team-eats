from flask import Flask, redirect, url_for, render_template, request

#from textblob import TextBlob

# TextBlob(sentence).sentiment

from flask import Flask, jsonify, request
app = Flask(__name__)
#app.config['Clear_DB'] = "mysql://bc4af97fe5f893:e7b5398d@us-cdbr-east-02.cleardb.com/heroku_e1cbc82b93d254b?reconnect=true"


import os
import json
import DBfuncts
#comment5


@app.route('/add_restaurant', methods=['POST'])
def predict_sentiment():
    data = request.get_json()
    return json.dumps(DBfuncts.user_spec_autocomplete(data))


if __name__ == '__main__':
    app.run(host="0.0.0.0", threaded=True, port=5000)
#if __name__ == '__main__':
    #app.run()
    #app.run(host = '0.0.0.0', port=int(os.environ.get('PORT', 5000)))


    #@app.route("/<name>")
    #def user(name):
    #    return f"Hello {name}!"


    #@app.route("/admin")
    #def admin():
    #    return redirect(url_for("home"))
