/**
* GET pages based on passed in request
**/

exports.index = function(req, res){
	res.render('index', { title: 'SynergyCode' });
};
exports.edit = function(req, res){
	res.render('edit', { title: 'SynergyCode' });
};
exports.create = function(req, res){
	res.render('createFile');
};