'use strict';

//require('./mongoose')();
const passport = require('passport');
//var TwitterTokenStrategy = require('passport-twitter-token');
//var User = require('mongoose').model('User');
const FacebookTokenStrategy = require('passport-facebook-token');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const config = require('./Routers/config');

module.exports = function () {

    /* passport.use(new TwitterTokenStrategy({
            consumerKey: config.twitterAuth.consumerKey,
            consumerSecret: config.twitterAuth.consumerSecret,
            includeEmail: true
        },
        function (token, tokenSecret, profile, done) {
            User.upsertTwitterUser(token, tokenSecret, profile, function(err, user) {
                return done(err, user);
            });
        }));*/

    passport.use(new FacebookTokenStrategy({
            clientID: config.facebookClientID,
            clientSecret: config.facebookClientSecret
        },
        function (accessToken, refreshToken, profile, done) {
            console.log(`Access Token ${accessToken} Profile ${JSON.stringify(profile)}`);
            return done(null, JSON.stringify(profile));
        }));

    passport.use(new GoogleTokenStrategy({
            clientID: config.googleClientID,
            clientSecret: config.googleClientSecret
        },
        function (accessToken, refreshToken, profile, done) {
            console.log(`Access Token ${accessToken} Profile ${JSON.stringify(profile)}`);
            return done(null, JSON.stringify(profile));
        }));
};