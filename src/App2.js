import React, { Component } from 'react';
import './App.css';
// import './Person/Person.css'
import Person from './Person/Person';
import Radium, { StyleRoot} from 'radium';

class App extends Component {
  state = {
      persons: [
        {id:"abd", name:"Samir", age:22},
        {id:"nmp", name:"Ram", age:24},
        {id:"sam", name:"Hari", age:26}
      ],
      something: 'This is something',
      showPersons: false
    };

  // switchNameHandler = (newName) => {
  //   this.setState({
  //      persons: [
  //       {name:newName, age:22},
  //       {name:"Geeta", age:24},
  //       {name:"Hari", age:23}
  //     ]     
  //   })
  // };

  deletePersonHandler = (PersonIndex) => {
    // var persons = this.state.persons.slice();     //creates a  new array or a copy
    var persons = [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    var person = {
      ...this.state.persons[personIndex]
    };

    // var person = object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    var persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons}); 
  };

  togglePersonsHandler = () => {
    var showState = this.state.showPersons;
    this.setState({showPersons: !showState})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) =>{ 
                return <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              }
        )}
        </div>
        );
 
      // persons = (
      //   <div>
      //     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      //     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Heroes')} changed={this.nameChangedHandler}>My Hobby: Coding</Person>
      //     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>MY hobby: Eating</Person>
      // </div>
      // );

      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };

    let classes = [];

    // let classes = ['red', 'bold'].join(" ");

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
      <h1>Hello, this is something from React!!</h1>
      <p className={classes.join(" ")}>This is really working!!</p>
      {/*<button onClick={ () => this.switchNameHandler('Heroes')} >was clicked</button> Don't use if possible
      <button style={style} onClick={this.switchNameHandler.bind(this,'Heroes')} >was clicked</button>*/}
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>

      {persons}
      </div>
      </StyleRoot>
    );

    // {/*return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, this is something from React!!')); */}
  }
}

export default Radium(App);

