from flask import Flask
from spotipy_example import get_random_followed_artist

app = Flask(__name__)

# Random_Artist API Route

@app.route("/random_artist")
def random_artist():
    # print(get_random_followed_artist())
    return{"random_artist": [get_random_followed_artist()]}


if __name__ == "__main__":
    app.run(debug=True)