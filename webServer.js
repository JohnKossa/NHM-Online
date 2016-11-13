/**
 * Created by Kosine on 11/13/2016.
 */
var express = require('express');
var app = express();
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

app.use(session({
    //TODO Install redis and set this information
    store: new RedisStore({}),
    secret: 'fortress of doors'
}));

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/listgames', function(req, res){
    //check to see if the user has a session
    //get list of all waiting and running games
    //return them
});

/*
* Expects a game id.
* */
app.post('/joingame', function(req, res){
    //check to see if the user has a session
    //check to make sure the user is not already in a game
    //look up game from redis
    //check to make sure the game is not already full
    //add user to game
    //send player to waiting room
});

/*
* Expects
* */
app.post('/awaitgame', function(req, res){
    //check to see if the user has a session
    //check to make sure the user is not already in a game
    //look up game from redis
    //make sure user is in the game they're checking on
    //check game status and update the user
});

/*
* Expects: {
*
* }
* */
app.post('/selectmove', function(req, res){
    //check to see if the user has a session
    //check to see if the user is in a game
    //check to see if the user is who the received data says he is
    //look up the user's move by the ID he passed
    //find or create the game round he's modifying
    //hold response until all moves have been made or the timer expires
});

module.exports = app;