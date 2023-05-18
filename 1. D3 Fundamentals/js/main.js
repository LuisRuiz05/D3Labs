/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle = svg.append("circle")
	.attr("cx", 80)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "gray");

var rect = svg.append("rect")
	.attr("x", 50)
	.attr("y", 220)
	.attr("width", 60)
	.attr("height", 60)
	.attr("fill","red");

var circle = svg.append("circle")
	.attr("cx", 80)
	.attr("cy", 250)
	.attr("r", 20)
	.attr("fill", "white");