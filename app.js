const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', function(req, res, next){
    res.send(`
		<div class="container">
			<h1>Enter Your Details</h1>
			<div>
				<div>
					<form method="POST" action="/">
					<div>
						<label>First_Name</label>
						<input type="text" name="first_name" id="first_name" class="form-control" />
					</div>
					<div>
						<label>Last_Name</label>
						<input type="text" name="last_name" id="last_name" class="form-control" />
					</div>
					<div>
						<label>Email</label>
						<input type="email" name="email" id="email" class="form-control" />
					</div>
					<div>
						<input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
					</div>
					</form>
				</div>
			</div>
		</div>
	`);


});

app.post('/', function(req, res, next){

	res.send(req.body);

});

app.listen(3000);


