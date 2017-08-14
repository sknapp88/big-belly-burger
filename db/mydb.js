const mysql      = require( "mysql" );
let connected = false;

const path = require( "path" );
var env       = process.env.NODE_ENV || 'development';
var config    = require( "../config/config.js" )[env];
var id = 0;

// console.log( "Environment = " + env );
// console.log( config );

const mydb = {};

let db = mysql.createConnection( {
	"host": config.host,
	"user": config.username,
	"port": config.port,
	"password": config.password,
	"database": config.database
});

mydb.getAllBurgers = function( cb) {
    //console.log( "getAllBurgers" );
    db.query( "SELECT * FROM burger", function( err, results ) {
        if ( err ) throw err;

        cb( results );
    })
};

mydb.devoureOneBurger = function( id, cb ) {
    db.query( "DELETE FROM burger WHERE id = ?", [ id ], function( err, results ) {
        if ( err ) throw err;

        cb( results );
    })
}

mydb.addOneBurger = function( burgerName, cb ) {
    db.query( "INSERT INTO burger ( burgerName ) values ( ? )", [ burgerName ], function( err, results ) {
        if ( err ) throw err;

        cb( results );
    })
}

module.exports = mydb;

// Testing here
/*
mydb.addOneBurger( "BenBurger", function( results ) {
    console.log( "Add   : ", results );
    results.insertId;

    mydb.devoureOneBurger( results.insertId, function( results ) {
        console.log( "Delete: ", results );
    })

});

db.query( "SELECT * FROM burger", function( err, results ) {
    if ( err ) throw err;

    console.log( results );

})
*/
