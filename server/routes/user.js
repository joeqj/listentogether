const express = require('express');
const router = express.Router();
const request = require('request');
const querystring = require('querystring');

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

const stateKey = 'spotify_auth_state';
const redirect_uri = 'http://localhost:3333/user/callback';
const client_id = process.env.SPOTIFY_CLIENT;
const client_secret = process.env.SPOTIFY_SECRET;

router.get('/login', function (req, res) {

    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = 'user-read-private user-read-email user-read-playback-state';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

router.get('/callback', function (req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                // If request was successful

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                // Todo: Use this in Nuxt :)
                // var options = {
                //     url: 'https://api.spotify.com/v1/me',
                //     headers: {
                //         'Authorization': 'Bearer ' + access_token
                //     },
                //     json: true
                // };

                // // use the access token to access the Spotify Web API
                // request.get(options, function (error, response, body) {
                //     console.log(body);
                // });

                // we can also pass the token to the browser to make requests from there
                res.redirect(process.env.FRONTEND_URL + '/login?' +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
            } else {
                // If request returns error redirect with error message
                res.redirect(process.env.FRONTEND_URL + '/login?' +
                    querystring.stringify({
                        error: 'error' //! this was originally invalid_token
                    }));
            }
        });
    }
});

module.exports = router;