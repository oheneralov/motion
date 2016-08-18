/*
* Copyright © 2016 by Oleksandr Generalov
* All rights reserved.
*/

var Parser = React.createClass({
  getInitialState: function() {
    return {
		code: `
Parrot1->doStepForward();
Parrot1->doStepForward();
Parrot1->doStepForward();
Parrot1->turnLeft();
Parrot1->turnLeft();
Parrot1->turnLeft();
Parrot1->doStepForward();
Parrot1->doStepForward();
Parrot1->doStepForward();
Parrot1->turnRight();
Parrot1->turnRight();
Parrot1->turnRight();`, 
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
		  //Parrot1 = new Parrot("#" + ParrotType);
		  this.setState({Parrot1 : new Parrot("#" + ParrotType)});
	  }
	  else {
		  //Parrot1 = new Parrot3d("#" + this.props.type);
		  this.setState({Parrot1 : new Parrot3d(ParrotType)})
	  }
	  
  },
  
  repeatParrotLife: function(startDate){
	  var interptetedCode = this.convertC2JS(this.state.code);
	  var Parrot1 = this.state.Parrot1;
	  if (interptetedCode){
		  //console.log(interptetedCode);
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
	 this.state.Parrot1.lifeid = setInterval(this.repeatParrotLife, 500, startDate);
    },
	
	stopSimulation: function(event) {
		if (this.state.Parrot1.lifeid != 0) {
             clearInterval(this.state.Parrot1.lifeid);
		     console.log("Simulation is stopped!");
		}
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
		  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		  <br/><br/>
          <textarea rows = '10' cols = '100' className='form-control' onChange={this.handleChange}>
          {this.state.code}
          </textarea>
		  <div>
		      <input type = "button" onClick={this.startSimulation} value = "Start simulation"/>
		      <input type = "button" onClick={this.stopSimulation} value = "Stop simulation"/>
			  <input type = "button"  value = "Refresh"/>
			  <input type = "range"  value = "5"/>
		  </div>  
        </form>
      </div>
    );
  }
});

React.render(<Parser type = "parrot2d"/>, document.getElementById('2dsimulation'));
React.render(<Parser type = "parrot3d"/>, document.getElementById('3dsimulation'));