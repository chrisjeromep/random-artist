import spotipy
import random
from spotipy.oauth2 import SpotifyOAuth

scope = "user-library-read, user-read-playback-state, user-follow-read"

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

def get_random_followed_artist():
    
    ### creates empty list for the artists to be added later
    full_artist_info = []
    my_artists = []
    
    ### gets first 50 artists and adds to the empty full_artist_info list
    f = sp.current_user_followed_artists(limit=50)['artists']
    full_artist_info.extend(f['items'])

    ### while there are more items to be obtained ('next' key is true), loops and adds it to the full_artist_info list
    ### there'my_artists supposed to be a function that does this but I couldn't get it to work, should look into it later
    while f['next']:
        f = sp.current_user_followed_artists(
            limit=f['limit'], after=f['cursors']['after'])['artists']
        full_artist_info.extend(f['items'])
        
    for artist in full_artist_info:
        my_artists.append(artist['name'])
        
    selected_artist = random.choice(my_artists)
    # print(selected_artist)
    return selected_artist
    
# get_random_followed_artist()

