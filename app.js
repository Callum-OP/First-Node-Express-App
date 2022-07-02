const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', function(req, res, next){
    res.send(`
		<div class="container">
			<h1>To Do List</h1>
			<div>
				<div>Add Task</div>
				<div>
					<form method="POST" action="/">
						<div>
							<label>Task</label>
							<input type="text" name="task" id="task" class="form-control" />
						</div>
		                <div class="mb-3">
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


