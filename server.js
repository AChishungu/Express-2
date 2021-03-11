var express = require('express');

var app = express();
const PORT = 3000;

app.set('view engine','ejs');//sent views to EJS

//this is how a route is built in Express
app.get('/', (req,res)=>{
  var title = "Our Home Page";
  res.render('pages/index.ejs',{title:title});
});
//add users route
app.get('/users', function(req, res) {
	var title = 'Users Page';
    
	res.render('users/view', {
    	title: title,
    	users: data
	});
});
app.get('/users', function(req, res) {
	var title = 'Users Page';
    
	res.render('users/views', {
    	title: title,
    	users: data
	});
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});

