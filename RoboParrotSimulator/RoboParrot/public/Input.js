/*
* Copyright © 2016 by Oleksandr Generalov
* All rights reserved.
*/

var Parser = React.createClass({
  getInitialState: function() {
    return {
		code: `
Parrot1->flyForward(10);
`, 
	    elapsedTime: "00:00:00.000",
		Parrot1 : null
	};
  },
  
  handleChange: function(event) {
    this.setState({code: event.target.value});
  },
  
  componentDidMount: function(){
	  //global variable
	  var ParrotType = this.props.type;
	  if (this.props.type == "parrot2d"){
		  this.setState({Parrot1 : new Parrot("#" + ParrotType)});
	  }
	  else {
		  this.setState({Parrot1 : new Parrot3d(ParrotType)})
	  }
	  
  },
  
  repeatParrotLife: function(startDate){
	  var interptetedCode = this.convertC2JS(this.state.code);
	  var Parrot1 = this.state.Parrot1;
	  if (interptetedCode){
	      eval(interptetedCode);
	      this.state.Parrot1.lifeduration++;
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
 
	 startSimulation: function(event) {
	 console.log("Starting simulation");
	 var startDate = new Date();
	 this.state.Parrot1.restoreAllStates();
	 this.repeatParrotLife(startDate);
	 this.state.Parrot1.lifeid = setInterval(this.repeatParrotLife, 1000, startDate);
    },
	
	stopSimulation: function(event) {
		clearInterval(this.state.Parrot1.lifeid);
    },
	
	rotateLeft: function(){
		this.state.Parrot1.rotateLeft();
	},
	
	rotateRight: function(){
		this.state.Parrot1.rotateRight();
	},
	
	rotateCameraUp: function(){
		this.state.Parrot1.rotateCameraUp();
	},
	
	rotateCameraDown: function(){
		this.state.Parrot1.rotateCameraDown();
	},
	
	zoomin: function(){
		this.state.Parrot1.zoomin();
	},
	
    zoomout: function(){
		this.state.Parrot1.zoomout();
	},
	
	rotateFloor: function(){
		this.state.Parrot1.rotateFloor();
	},
	
	
  render: function () {
    return (
      <div>
	  <div>{this.state.elapsedTime}</div>
        <form>
		  <p>
		      <div id = {this.props.type}>
			  </div>
		  </p>
		  <div>
		  Code:
		  </div>
			<input type = "text" className='form-control' onChange={this.handleChange} value = {this.state.code} />
		  <div>
		      <button type = "button" className = "btn btn-primary" onClick={this.startSimulation}>Start simulation</button>
		      <input type = "button" className = "btn btn-success" onClick={this.stopSimulation} value = "Stop simulation"/>
			  <input type = "button" className = "btn btn-info" onClick={this.rotateLeft}  value = "parrot left"/>
			  <input type = "button" className = "btn btn-warning" onClick={this.rotateRight}  value = "parrot right"/>
			  <input type = "button" className = "btn btn-danger" onClick={this.rotateCameraUp}  value = "camera up"/>
			  <input type = "button" className = "btn btn-link" onClick={this.rotateCameraDown}  value = "camera down"/>
			  <input type = "button" className = "btn btn-primary"  value = "zoom in" onClick={this.zoomin}/>
			  <input type = "button" className = "btn btn-success"  value = "zoom out" onClick={this.zoomout}/>
			  <input type = "button" className = "btn"  value = "rotate floor" onClick={this.rotateFloor}/>
		  </div>  
        </form>
		<div>
		Supported commands:
		<ol>
		    <li>Parrot1-&gt;flyForward(10);</li>
			<li>Parrot1-&gt;turnLeft(10);</li>
			<li>Parrot1-&gt;turnRight(10);</li>
			<li>Parrot1-&gt;jump(10);</li>
		</ol>
		</div>
      </div>
    );
  }
});

React.render(<Parser type = "parrot2d"/>, document.getElementById('2dsimulation'));
React.render(<Parser type = "parrot3d"/>, document.getElementById('3dsimulation'));