import React, { Component } from 'react';
import './App.css';
import Person from './newPerson/person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'Sameer', age:24, id:"asdf"},
      {name: 'HeroLal', age:40, id:"fjkd"},
      {name: 'Hira', age:45, id:"kjlk"}
    ],
    showState: false

  };

  // switchNameHandler = (name) => {
  //   var person = {...this.state.persons[0]}
  //   person.name = name;

  //   var persons = [...this.state.persons];
  //   persons[0] = person;

  //   this.setState({persons: persons})
  // };

  nameChangedHandler = (event, index) => {
    var person = {...this.state.persons[index]};
    person.name = event.target.value;

    var persons = [...this.state.persons];
    persons[index] = person;

    this.setState({persons: persons})

  };

  deletePersonHandler = (index) => {
    var persons = [...this.state.persons];

    persons.splice(index, 1);

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    
    var tempState = this.state.showState;

    this.setState({showState : !tempState});
  };

    render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showState){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
                  return <Person 
                            click={() => this.deletePersonHandler(index)} 
                            name={person.name} 
                            age={person.age} 
                            key={person.id}
                            change={(event) => this.nameChangedHandler(event, index)}
                            />
                          
                })
                }
                </div>
                );
    }

      return (
        <div className="App">
        <h1>Hello, THis is just a basic toggle for React.</h1>
        <button style={style} onClick={this.togglePersonHandler} >Toggle Person</button>
        
        {persons}
        </div>
        );
    }




}


export default App;
