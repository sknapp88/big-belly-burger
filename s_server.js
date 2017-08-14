'use strict';

const port = process.env.PORT || 3000;


const express = require( "express" );
const bodyparser = require( "body-parser" );
const exphbs = require( "express-handlebars" );
const methoverride = require( "method-override" );
const expstatic = require( "express-static" );
// const mydb = require( "./db/mydb.js" );  // Switiching to sequelize

const sqdb = require( "./models/sqdb.js" );

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get( "/", function( req, res ) {
    console.log( "GET:/" );
    sqdb.getAllBurgers( function( burgerList ) {
        console.log( burgerList );
        res.render( "burgers.handlebars", {
            data: "somedata",
            burgers: burgerList
        });
    });
});

app.post( "/add", function( req, res ) {
    console.log( "/ADD, body = ", req.body );
    sqdb.addOneBurger( req.body.burgerName, function() {
        console.log( res.redirect );
        res.redirect( "/" );
    })
})

app.post( "/devour/:id", function( req, res ) {
    console.log( "/devour: " + req.params.id )
    sqdb.devourOneBurger( req.params.id, function() {
        res.redirect("/")
    });
})

app.listen( port, function() {
    console.log( "Listening on " + port );
})
