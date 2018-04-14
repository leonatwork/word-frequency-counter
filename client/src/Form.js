import React, { Component } from 'react';

class Form extends Component {
	  numSubmit(event) {
    var num = this.refs.name.value;
    this.setState({num: num}, function(){
      console.log(this.state);
    });
  }


  constructor(props){
    super(props);

    this.state = {
      num: ''
    };
    this.numSubmit = this.numSubmit.bind(this);
  }

render(){
    var num;
    var results;

    if (this.state.num === '') {
      num = <div>
        <h1>Word frequency counter</h1>
        <form onSubmit={this.numSubmit}>
          <div>
          <label>How many words you want to search?</label> <br/>
          <input type="number" placeholder="Eg: 15" ref="name"/>
          </div>
					<input type="submit" value="submit"/>
        </form>
      </div>;
      results = '';

    } else if (this.state.num !== '') {
      num = <div><h1>Word frequency counter</h1></div>;
        results = <div>
          display results
        </div>;
    }
    return(
      <div>
        {num}
        ----------------------------------
        {results}
      </div>
    );
  }
}

export default Form;
