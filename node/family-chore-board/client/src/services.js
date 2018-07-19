export function getChoreTasks(choreId, callback){
	console.log("Entering getChoreTasks in services.js");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			let result = JSON.parse(this.responseText);
			console.log('TASKS', result);
			callback(null, result);
		}
	};
	let endpoint = '/chore/' + choreId + '/tasks';
	console.log('endpoint = ', endpoint);
	xhttp.open('GET', endpoint , true);
	xhttp.send();
}

export function getAssignmentsByCategory(userId, category, callback){
	console.log("Entering getAssignmentsByCategory in services.js");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			let result = JSON.parse(this.responseText);
			console.log('CHORES', result);
			callback(null, result);
		}
	};
	xhttp.open('GET', '/user/'+ userId + '/category/' + category + '/assignments/', true);
	xhttp.send();
}

export function getChore(choreId, callback) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			let result = JSON.parse(this.responseText);
			console.log('CHORE *', result);
			callback(null, result);
		}
	};
	xhttp.open('GET', '/chore/'+ choreId, true);
	xhttp.send();
}

export function getUser(callback){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			let result = JSON.parse(this.responseText);
			console.log('CHORE *', result);
			callback(null, result[0]);
		}
	};
	xhttp.open('GET', '/user/1', true);
	xhttp.send();
}

export function addAccomplishment(assignmentId, taskId, callback){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			let result = JSON.parse(this.responseText);
			console.log('Accomplishment *', result);
			callback(null, result);
		}
	};
	xhttp.open('POST', '/assignment/'+assignmentId+'/task/'+taskId, true);
	xhttp.send();
}
