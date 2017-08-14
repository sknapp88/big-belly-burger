
const Sequelize = require( "Sequelize" );
const sync = require( "asyncjs" );

var sequelize = new Sequelize( "burgers3", "root", "youngthing90", {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 1000
  },

});

var Burgers = sequelize.define( "burgers", {
	burgerName: Sequelize.STRING,
    devoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
    }, { timestamps: false } ); 

Burgers.sync({force:false})
.then( () => {
	console.log( "Burgers created/connected" );
});

Burgers.getAllBurgers = function( cb ) {
    const burgerList = [];

    Burgers.findAll({})
    .then( function( results ) {
        console.log( "Burger count = " + results.length );
        results.forEach( b => {
            burgerList.push( b.dataValues );
        })
        cb( burgerList );
    })
}

Burgers.devourOneBurger = function( burgerId, cb ) {
    Burgers.update( {
        devoured: 1
    }, {
        where: {
            id: burgerId
        }
    })
    .then( function( results ) {
        console.log( "Execute callback");
        cb( results ); 
    })
}

Burgers.addOneBurger = function( burgerName, cb ) {
    Burgers.create( { 
        burgerName: burgerName
    })
    .then( function( results ) {
        cb( results ); 
    })
}

module.exports = Burgers;

