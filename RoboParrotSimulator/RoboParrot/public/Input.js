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
							
	this.ParrotCoordinates = [0, 0];
	this.lifeduration = 1; 
	this.lifeid = 0;
	this.drawBlock();
	this.timerId = 0;
    }
	
	doStepForward() {
		console.log("doing step forward");
		var svgContainer = d3.select("svg").select("g");
		//Parrot will do step forward by 3 pixels
		this.ParrotCoordinates[0] = this.ParrotCoordinates[0] + 3;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates[0] +", 0)");

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
		value: "Parrot1->doStepForward();\n", 
		elapsedTime: "00:00:00.000"
	};
  },
  
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  
  componentDidMount: function(){
	  //global variable
	  Parrot1 = new Parrot();
  },
  
  repeatParrotLife: function(){
	  var interptetedCode = this.convertC2JS(this.state.value);
	  
	  if (interptetedCode){
	      eval(interptetedCode);
	      Parrot1.lifeduration++;
	  }
	  else {
		  console.log("Code is empty");
	  }
  },
  
    convertC2JS: function(code){
	  var CSymbol = '->';
	  var result = code.replace(CSymbol, '.');
	  return result;
  },
  
  
  startSimulation: function(event) {
	 console.log("Starting simulation");
	 Parrot1.lifeid = setInterval(this.repeatParrotLife, 300);
	 var startDate = new Date();
	 displayTime(startDate);
    },
	stopSimulation: function(event) {
		if (Parrot1.lifeid != 0) {
             clearInterval(Parrot1.lifeid);
		     console.log("Simulation is stopped!");
		}
      clearTimeout(Parrot1.timerId);
    },
	
	displayTime:	function (startDate) {
		var today = new Date();
		var delta = today - startDate; //in milliseconds
		this.setState({elapsedTime: msToTime(delta)});
		Parrot1.timerId = setTimeout(function(){displayTime(startDate);}, 500);
	},

	msToTime: function (duration) {
		var milliseconds = parseInt((duration%1000))
			, seconds = parseInt((duration/1000)%60)
			, minutes = parseInt((duration/(1000*60))%60)
			, hours = parseInt((duration/(1000*60*60))%24);

		return addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds) + "." + milliseconds;
	},

	addLeadingZero: function (number){
		return number > 10 ? number : "0" + number;
	},

  render: function () {
    return (
      <div>
        <form>
		  <p>
		      <svg width="720" height="300">
			  </svg>
		  </p>
		  <input ref="txtTimer" type='text' value={this.state.elapsedTime} /><br/>
          <textarea rows = '10' cols = '100' className='form-control' onChange={this.handleChange}>
          {this.state.value}
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