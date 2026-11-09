#####################################################################
# IMPORTS
#####################################################################

from flask import Flask, render_template, jsonify
from SQLHelper import SQLHelper

#####################################################################
# SETUP
#####################################################################

app = Flask(__name__)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

helper = SQLHelper()

#####################################################################
# ROUTES
#####################################################################


# Home
@app.route("/")
def homepage():

    return render_template("homepage.html")


# About Us
@app.route("/about")
def about_us():

    return render_template("about.html")


# Explore
@app.route("/explore")
def explore():

    return render_template("explore.html")

#####################################################################
# API
#####################################################################


@app.route("/api/v1.0/search/<zip_code>")
def search_zip(zip_code):
    data = {"locations": []}
    for location in helper.get_data_from_zip((int(zip_code),)):
        data["locations"].append({
            "name": location[0],
            "type": location[1],
            "secondary_type": location[2],
            "address": location[3],
            "latitude": location[4],
            "longitude": location[5]
        })

    # Return
    return jsonify(data)


#####################################################################
@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = \
        "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r


# main
if __name__ == "__main__":
    app.run(debug=True)
