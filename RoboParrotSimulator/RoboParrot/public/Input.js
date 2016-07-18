class Parrot {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
	doStepForward() {
		console.log("doing step forward");
		//https://www.dashingd3js.com/svg-basic-shapes-and-d3js
	 var svgContainer = d3.select("svg");
	 var circle = svgContainer.append("circle")
	                     .attr("cx", function() { return 50; })
						 .attr("cy", function() { return 35; })
						 .attr("r", function() { return 25; })
						 .attr("stroke-width", 2)
                         .attr("stroke", "black");
						
     var ellipse = svgContainer.append("ellipse")
	                     .attr("cx", function() { return 50; })
						 .attr("cy", function() { return 100; })
						 .attr("rx", function() { return 25; })
						 .attr("ry", function() { return 50; })
	
	svgContainer.append("line")
                         .attr("x1", 50)
                         .attr("y1", 150)
                         .attr("x2", 60)
                         .attr("y2", 250)
						 .attr("stroke-width", 2)
                         .attr("stroke", "black");
	svgContainer.append("line")
                         .attr("x1", 50)
                         .attr("y1", 150)
                         .attr("x2", 25)
                         .attr("y2", 250)
						 .attr("stroke-width", 2)
                         .attr("stroke", "black");
	}
}

var Input = React.createClass({
  getInitialState: function() {
    return {value: "Parrot1 = new Parrot();\nParrot1.doStepForward()"};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  onSubmit: function(event) {
     //alert('Form submitted.' + this.state.value);
	 event.preventDefault();
	 var interptetedCode = this.state.value;
	 if (interptetedCode){
		 eval(interptetedCode);
	 }
		 
      
    },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
		  <p>
		      <svg width="720" height="300">
			  </svg>
		  </p>
          <textarea rows = '10' cols = '100' className='form-control' onChange={this.handleChange}>
          {this.state.value}
          </textarea>
          <button className='btn btn-success' type='submit'>Simulate</button>
        </form>
      </div>
    );
  }
});

React.render(<Input/>, document.getElementById('app'));