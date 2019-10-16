import React, {
  Fragment,Component
} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Counters from './components/Counters';
import {PageNavbar} from './components/PageNavbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 3 },
      { id: 5, value: 2 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log("Increment Clicked");

    // object.method(); is bind to the object
    // but when we call function directly then this will reference to the windows object
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      
    return counter});

    
    
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
    console.log("Event Handler Called", counterId);
  };

  render() {
  return ( 
  < Fragment >
    <PageNavbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length }/>
    <Counters onIncrement={this.handleIncrement} onReset={this.handleReset} onDelete={this.handleDelete} counters={this.state.counters} / >
    </Fragment>
  );
}
}

export default App;