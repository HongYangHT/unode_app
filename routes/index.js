/* GET home page. */
//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};

exports.index = function(req, res){
	res.render('index', { 
		title: 'Hello World !',
		href:'https://unode.herokuapp.com/main.html'
		});
};

exports.main = function(req,res){
	res.sendfile('public/main.html',main);
};