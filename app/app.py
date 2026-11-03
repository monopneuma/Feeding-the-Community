#####################################################################
# IMPORTS
#####################################################################

from flask import Flask, render_template, request, jsonify

#####################################################################
# SETUP
#####################################################################

app = Flask(__name__)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


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


@app.route("/strokePrediction", methods=["POST"])
def predict_stroke():

    # Return
    return jsonify({"ok": True})


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
