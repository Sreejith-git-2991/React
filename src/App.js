import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/searchBox/search-box.component'


class App extends Component {
constructor() {
  super();
  this.state = {
    monster: [],
    searchField : ''
  };

 //this.handleChange = this.handleChange.bind(this); 
 //by usign arrow funciton ES6, this binding is done by default
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monster : users}));
}

handleChange = (e) => {
  this.setState ( { searchField : e.target.value});
}

  render() {
    const { monster, searchField } = this.state; 
    const filteredMonster = monster.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monsters</h1>
       <SearchBox
       placeholder = 'Search Monsters'
       handleChange = {this.handleChange}
       />
      <CardList monster = {filteredMonster}>
       </CardList>
    </div>
    );
  }
}

export default App;
