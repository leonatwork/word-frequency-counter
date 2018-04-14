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
      num: '',
      response: ''
    };
    this.numSubmit = this.numSubmit.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/h');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

render(){
    var num;
    var results;
    var piko = <p className="App-intro">{this.state.response}</p>;
    if (this.state.num === '') {
      num = <div>
        <h1>Word frequency counter</h1>
        <form onSubmit={this.numSubmit}>
          <div className="card">
          <label>How many words you want to search?</label> <br/>
          <input className="inp" type="number" placeholder="Eg: 15" ref="name"/>
          </div>
					<input className="feedback-button" type="submit" value="submit"/>
        </form>
      </div>;
      results = '';

    } else if (this.state.num !== '') {
      num = <div><h1>Word frequency counter</h1></div>;
        results = <div>
          display results
          {piko}
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
