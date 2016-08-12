class Parrot {
    constructor(place = "body", height = 300, width = 720) {
     console.log("creating the parrot...");
	 //https://www.dashingd3js.com/svg-basic-shapes-and-d3js
	 var svgContainer = d3.select(place)
	                    .append("svg")
						.style("width", width)
						.style("height", height)
						.append("g");
	 var head = svgContainer.append("circle")
	                     .attr("cx", function() { return 50; })
						 .attr("cy", function() { return 27; })
						 .attr("r", function() { return 25; })
						 .attr("stroke-width", 2)
                         .attr("stroke", "black")
						 .attr("fill", "none");
						 console.log(head.attr("cy"));
						 
    var eye = svgContainer.append("circle")
	                     .attr("cx", function() { return 53; })
						 .attr("cy", function() { return 20; })
						 .attr("r", function() { return 5; })
						 .attr("stroke-width", 2)
                         .attr("stroke", "black")
						 .attr("fill", "none");
						
     var body = svgContainer.append("ellipse")
	                     .attr("cx", function() { return 50; })
						 .attr("cy", function() { return 100; })
						 .attr("rx", function() { return 25; })
						 .attr("ry", function() { return 50; })
						 .attr("stroke-width", 2)
                         .attr("stroke", "black")
						 .attr("fill", "none");
						 
	var wing = svgContainer.append("ellipse")
	                     .attr("cx", function() { return 50; })
						 .attr("cy", function() { return 90; })
						 .attr("rx", function() { return 20; })
						 .attr("ry", function() { return 40; })
						 .attr("stroke-width", 2)
                         .attr("stroke", "black")
						 .attr("fill", "none");					 
	
	var leftLeg = svgContainer.append("line")
                         .attr("x1", 50)
                         .attr("y1", 150)
                         .attr("x2", 60)
                         .attr("y2", 250)
						 .attr("stroke-width", 2)
                         .attr("stroke", "black")
						 .attr("fill", "none");
						 
						 
	var rightLeg = svgContainer.append("line")
                         .attr("x1", 50)
                         .attr("y1", 150)
                         .attr("x2", 25)
                         .attr("y2", 250)
						 .attr("stroke-width", 2)
                         .attr("stroke", "black")
						 .attr("fill", "none");
						 
	/*
						 
	var Ground = d3.select("svg").append("g")
	                     .append("line")
                         .attr("x1", 0)
                         .attr("y1", 250)
                         .attr("x2", d3.select("svg").attr("width"))
                         .attr("y2", 250)
						 .attr("stroke-width", 4)
                         .attr("stroke", "black")
						 .attr("fill", "none");
						 */
						 
	//The data for our line
    var lineData = [ { "x": 75,   "y": 25},  
	                 { "x": 90,  "y": 30},
                     { "x": 75,  "y": 35}, ];
 
    //This is the accessor function
    var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; })
                         .interpolate("linear");

    //The line SVG Path we draw
    var beak = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
	
//coordinates of the parrot in the space by x and y	
	this.ParrotCoordinates = {x: 0, y: 0};
	this.lifeduration = 1; 
	this.lifeid = 0;
	this.drawBlock();
	this.timerId = 0;
    }
	
	doStepForward() {
		console.log("doing step forward");
		var svgContainer = d3.select("svg").select("g");
		this.ParrotCoordinates.x = this.ParrotCoordinates.x + 1;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");

	}
	
	//imitating 3d world
	turnLeft() {
		console.log("turn left");
		var svgContainer = d3.select("svg").select("g");
		this.ParrotCoordinates.y = this.ParrotCoordinates.y - 1;
		this.ParrotCoordinates.x = this.ParrotCoordinates.x + 1;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");

	}
	
	turnRight() {
		console.log("turn right");
		var svgContainer = d3.select("svg").select("g");
		this.ParrotCoordinates.y = this.ParrotCoordinates.y + 1;
		this.ParrotCoordinates.x = this.ParrotCoordinates.x + 1;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");

	}
	/*
	Jump(){
		console.log("Jump");
		var svgContainer = d3.select("svg").select("g");
		var JumpPath = [{x: 0, y : 0}, {x: 1, y: 1}, {x: 4, y: 2}, {x: 9 , y: 3}, {x:9, y: 5}];
		this.ParrotCoordinates.y = this.ParrotCoordinates.y + 1;
		this.ParrotCoordinates.x = this.ParrotCoordinates.x + 1;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");
	}
	*/
	
	doStepBackwards() {
		console.log("doing step back");
		var svgContainer = d3.select("svg").select("g");
		this.ParrotCoordinates.x = this.ParrotCoordinates.x - 1;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");
	}
	
	drawBlock() {
		console.log("drawing a block");
		var svgContainer = d3.select("svg");
		svgContainer.append("g")
					.append("rect")
		            .attr("x", 300)
                    .attr("y", 216)
                    .attr("width", 25)
                    .attr("height", 35);

	}
}
