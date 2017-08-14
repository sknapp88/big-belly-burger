'use strict';

const port = process.env.PORT || 3000;

const express = require( "express" );
const bodyparser = require( "body-parser" );
const exphbs = require( "express-handlebars" );
const methoverride = require( "method-override" );
const expstatic = require( "express-static" );
// const mydb = require( "./db/mydb.js" );

const db = require( "./models" );

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get( "/", function( req, res ) {
    console.log( "GET:/" );
    mydb.getAllBurgers( function( burgerList ) {
        console.log( burgerList );
        // res.json( burgerList );
        res.render( "burgers.handlebars", {
            data: "somedata",
            burgers: burgerList
        });
    })
});

app.post( "/add", function( req, res ) {
    console.log( req.body );
    mydb.addOneBurger( req.body.burgername, function() {
        res.redirect( "/" );
    })
})

app.post( "/devour/:id", function( req, res ) {
    mydb.setDevoured( req.params.id, function() {
        res.redirect("/")
    });
})

app.delete( "/:id", function( req, res ) {
    console.log( "delete:" + req.params.id );
    mydb.deleteById( req.params.id );
    res.redirect( "/" );
})

app.listen( port, function() {
    console.log( "Listening on " + port );
})