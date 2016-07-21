/*
* Copyright © 2016 Oleksandr Generalov
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
						 
						 
    }
	
	
	
	doStepForward() {
		console.log("doing step forward");
		var svgContainer = d3.select("svg").select("g");
		//Parrot will do step forward by 3 pixels
		this.ParrotCoordinates[0] = this.ParrotCoordinates[0] + 3;
		svgContainer.attr("transform", "translate(" + this.ParrotCoordinates[0] +", 0)");

	}
}


var Input = React.createClass({
  getInitialState: function() {
    return {value: "Parrot1.doStepForward();\n"};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  componentDidMount: function(){
	  //global variable
	  Parrot1 = new Parrot();
  },
  
  repeatParrotLife: function(){
	  var interptetedCode = this.state.value;
	  if (interptetedCode){
	      eval(interptetedCode);
	      Parrot1.lifeduration++;
	  }
  },
  
  startSimulation: function(event) {
	 //event.preventDefault();
	 console.log("Starting simulation");
	 Parrot1.lifeid = setInterval(this.repeatParrotLife, 300);

		     
      
    },
	stopSimulation: function(event) {
		if (Parrot1.lifeid != 0) {
             clearInterval(Parrot1.lifeid);
		     console.log("Simulation is stopped!");
		}
      
    },
	
	
  render: function () {
    return (
      <div>
        <form>
		  <p>
		      <svg width="720" height="300">
			  </svg>
		  </p>
          <textarea rows = '10' cols = '100' className='form-control' onChange={this.handleChange}>
          {this.state.value}
          </textarea>
		  <input type = "button" onClick={this.startSimulation} value = "Start simulation"/>
		  <input type = "button" onClick={this.stopSimulation} value = "Stop simulation"/>
		  
        </form>
      </div>
    );
  }
});

React.render(<Input/>, document.getElementById('app'));