import React from 'react';
import faker from 'faker';

import Dashboard from './components/dashboard/Dashboard';

import './App.css';



class App extends React.Component {
  state = {
    allatbats: [],
    batterperf: 
      {
        atbat: 0,
        firstname: '',
        lastname: '',
        strikes: 0,
        balls: 0,
        fouls: 0,
        hit: false,
      },
  }
  render(){
    return (
      <div className="App">
        <Dashboard batter={this.state} newbatter={this.newbatter} />
        {/* createName={this.createName} */}
      </div>
    );
  }
  componentDidMount(){
    this.createName()
  };

  createName = () => {
    this.setState({
      firstname: faker.name.firstname,
      lastname: faker.name.lastname,
    })
  };

  newbatter = (props) => {
    this.setState({
      allatbats: [...this.state.allatbats, this.props]
    })
  };
}

export default App;
