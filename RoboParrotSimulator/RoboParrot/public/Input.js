/*
* Copyright © 2016 by Oleksandr Generalov
* All rights reserved.
*/

class Parrot {
    constructor(height, width) {
     console.log("creating the parrot...");
	 //https://www.dashingd3js.com/svg-basic-shapes-and-d3js
	 var svgContainer = d3.select("svg").append("g");
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
						 
	var Ground = d3.select("svg").append("g")
	                     .append("line")
                         .attr("x1", 0)
                         .attr("y1", 250)
                         .attr("x2", d3.select("svg").attr("width"))
                         .attr("y2", 250)
						 .attr("stroke-width", 4)
                         .attr("stroke", "black")
						 .attr("fill", "none");
						 
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
		//Parrot will do step forward by 3 pixels
		this.ParrotCoordinates.x = this.ParrotCoordinates.x + 3;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");

	}
	
	turnLeft() {
		console.log("turn left");
		var svgContainer = d3.select("svg").select("g");
		//Parrot will do step left by 3 pixels
		this.ParrotCoordinates.y = this.ParrotCoordinates.y + 3;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");

	}
	
	turnRight() {
		console.log("turn right");
		var svgContainer = d3.select("svg").select("g");
		//Parrot will do step left by 3 pixels
		this.ParrotCoordinates.y = this.ParrotCoordinates.y - 3;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates.x  + ", " + this.ParrotCoordinates.y + ")");

	}
	
	drawBlock() {
		console.log("drawing a block");
		var svgContainer = d3.select("svg");
		svgContainer.append("g")
					.append("rect")
		            .attr("x", 300)
                    .attr("y", 220)
                    .attr("width", 25)
                    .attr("height", 35);

	}
}


var Input = React.createClass({
  getInitialState: function() {
    return {
		code: "Parrot1->doStepForward();\nParrot1->doStepForward();\nParrot1->doStepForward();\nParrot1->turnLeft();\nParrot1->doStepForward();\nParrot1->turnRight();\n", 
		elapsedTime: "00:00:00.000"
	};
  },
  
  handleChange: function(event) {
    this.setState({code: event.target.value});
  },
  
  componentDidMount: function(){
	  //global variable
	  Parrot1 = new Parrot();
  },
  
  repeatParrotLife: function(startDate){
	  var interptetedCode = this.convertC2JS(this.state.code);
	  
	  if (interptetedCode){
		  //console.log(interptetedCode);
	      eval(interptetedCode);
	      Parrot1.lifeduration++;
	  }
	  else {
		  console.log("Code is empty");
	  }
	  
	  var today = new Date();
	  var delta = today - startDate; //in milliseconds
	  this.setState({elapsedTime: this.msToTime(delta)});
  },
  
    convertC2JS: function(code){
	  var CSymbol = /->/g;
	  var result = code.replace(CSymbol, '.');
	  return result;
  },
  
  //Think about using Date.prototype.getHours(), getMinutes()
  msToTime: function (duration) {
		var milliseconds = parseInt((duration%1000))
			, seconds = parseInt((duration/1000)%60)
			, minutes = parseInt((duration/(1000*60))%60)
			, hours = parseInt((duration/(1000*60*60))%24);

		return this.addLeadingZero(hours) + ":" + this.addLeadingZero(minutes) + ":" + this.addLeadingZero(seconds) + "." + milliseconds;
	},

	addLeadingZero: function (number){
		return number > 10 ? number : "0" + number;
	},
  
  displayTime: function (startDate) {

	},
  
	 startSimulation: function(event) {
	 console.log("Starting simulation");
	 var startDate = new Date();
	 Parrot1.lifeid = setInterval(this.repeatParrotLife, 300, startDate);
    },
	
	stopSimulation: function(event) {
		if (Parrot1.lifeid != 0) {
             clearInterval(Parrot1.lifeid);
		     console.log("Simulation is stopped!");
		}
      clearTimeout(Parrot1.timerId);
    },
	
	

  render: function () {
    return (
      <div>
        <form>
		  <p>
		      <svg width="720" height="300">
			  </svg>
		  </p>
		  <div>{this.state.elapsedTime}</div><br/>
          <textarea rows = '10' cols = '100' className='form-control' onChange={this.handleChange}>
          {this.state.code}
          </textarea>
		  <div>
		      <input type = "button" onClick={this.startSimulation} value = "Start simulation"/>
		      <input type = "button" onClick={this.stopSimulation} value = "Stop simulation"/>
			  <input type = "button"  value = "Refresh"/>
		  </div>  
        </form>
      </div>
    );
  }
});

React.render(<Input/>, document.getElementById('app'));