var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'',
  password:'',
  database:''
});

con.connect(function(err) {
  if (err) throw err;
  	console.log("Connected!");
  return con;
});
export default Connection;
// function Connection(){
// 	var mysql = require('mysql');
// 	const connection = mysql.createConnection({
// 		host:'localhost',
// 		user:'shweta',
// 		password:'sshweta3004',
// 		database:'tp'
// 	});
// 	connection.connect((err) => {
// 		if (err) {
//     		return console.error('error: ' + err.message);
//   		}
// 		console.log("Connected!");
// 	});
// 	console.log("Something");
// 	return connection;	
// }
// export default Connection;