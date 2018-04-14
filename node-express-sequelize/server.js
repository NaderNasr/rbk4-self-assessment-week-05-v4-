var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });
//-------------------------------------------
var syncUser = require('./index')

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

//req,res
var x = Sequelize.User()
app.get('/users', function(x, err){
	if(){
		////=====
	} else {
		///=====
	}

})

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
//req,res
app.post('/users', function(){
	if( err ){
		console.log('users POST has returned an ERR')
		request.send( err )
	} else {
		console.log('users POST has been SUCCESSFUL')
		request.send( data )
	}

})

module.exports = { 
  app: app,
  User: User
};
