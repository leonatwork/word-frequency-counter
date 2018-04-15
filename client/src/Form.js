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
    var piko = this.state.response;




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
          var wordCounts = { };
          var words = piko.split(/\s+/);

          for(var i = 0; i < words.length; i++){
              wordCounts[words[i].toLowerCase()] = (wordCounts[words[i].toLowerCase()] || 0) + 1;
          }

          var keysSorted = Object.keys(wordCounts).sort(function(a,b){return wordCounts[b]-wordCounts[a]});

          for (var i = 0; i < this.state.num; i++) {
            console.log(keysSorted[i],wordCounts[keysSorted[i]]);
          }
          num = <div><h1>Word frequency counter</h1></div>;

            const rows = [];

            for (let i=-1; i<this.state.num; i++) {
            let column = [];
            if (i === -1) {
              column.push(<th className="head">Word</th>);
              column.push(<th className="head">Frequency</th>);
            }
            else {
              column.push(<td>{keysSorted[i]}</td>);
              column.push(<td>{wordCounts[keysSorted[i]]}</td>);
            }
              rows.push(<tr>{column}</tr>);
            }
            results = <table align="center">{rows}</table>;
            console.log(rows);
    }
    return(
      <div>
        {num}
        {results}
      </div>
    );
  }
}

export default Form;
