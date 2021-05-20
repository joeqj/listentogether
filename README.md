# Listen together

Encouraging collaborative listening on Spotify

## Get Started

Run nodejs server in development environment:

```
cd server
npm install
npm run dev
```

Run application front end (Nuxt)

```
cd client
npm install
npm run dev
```

<br>

**Prerequisites:**

* A mongodb connection
* .env file
```
BASE_URL=<http://nodeserver/port>
FRONTEND_URL=<http://nuxtserver/port>

DB_CONNECTION=<mongoDBurl>

SPOTIFY_CLIENT=<spotifyClient>
SPOTIFY_SECRET=<spotifySecret>
```