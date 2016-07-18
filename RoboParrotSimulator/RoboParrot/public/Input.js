var Input = React.createClass({
  getInitialState: function() {
    return {value: 'goForwardOneStep();'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  onSubmit: function(event) {
    	alert('Form submitted.' + this.state.value);
      event.preventDefault();
    },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <textarea className='form-control' onChange={this.handleChange}>
          {this.state.value}
          </textarea>
          <p>{this.state.value}</p>
          <button className='btn btn-success' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
});

React.render(<Input/>, document.getElementById('app'));