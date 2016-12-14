var CommandPanel = React.createClass({
	render: function(){
		var codeArea = <p><p></p><p></p><p></p><p></p><p></p><textarea className='code-input' onChange={this.props.handleChange}  rows="4" cols="50">{this.props.code}</textarea></p>
		
		if (this.props.type == "parrot3d")
		{
			codeArea = <input type = "text" className='code-input' onChange={this.props.handleChange} value = {this.props.code} />
		}
		

		return (
		    <div>
		        <div>
		            Code:
		        </div>
			    {codeArea}
		        <div>
		            <button type = "button" className = "btn btn-primary" onClick={this.props.startSimulation}>Start simulation</button>
		            <input type = "button" className = "btn btn-success" onClick={this.props.stopSimulation} value = "Stop simulation"/>
		        </div>
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