$(document).ready(function() {
	
	$("#myBtn").click(function() {
		
		$.get("http://localhost:8080/webService/api/velocities",function(velocities) {
															
		createTable(velocities);

														});
									});
				});

function createTable(velocities){

	var txt ="<table class='table table-striped'><tr><th>Tier</th><th>Maximalgeschwindigkeit</th></tr>"
		
		$.each(velocities, function(key, velocity){
		txt+="<tr><td>"+velocity.animal+"</td><td>"+velocity.velocity+"</td></tr>";
	});

	txt+="</table>"
	$("#paragraph").html(txt);
}

