import React, {Component} from 'react';
import './app.css';
import Habits from './compoents/habits';
import Navbar from './compoents/navbar';

class App extends Component {
  state = {
      habits: [
          { id: 1, name : 'Reading' , count :0},
          { id: 2, name : 'Running' , count :0},
          { id: 3, name : 'Coding' , count :0},
      ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(itme => {
      if(item.id === habit.id){
        return {...habit, count : habit.count + 1};
      }
      return item;
    });
    this.setState({habits : habits}); //왼쪽 key 오른쪽 value habit
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count : count < 0 ? 0 : count};
      }
      return item;
    })
    this.setState({habits : habits}); //왼쪽 key 오른쪽 value habit
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habist : habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !==0 ){
        return {...habit, count : 0};
      }
      return habit;
    });
    this.setState({habits});
  };

  render(){
    return (
    <>
    <Navbar totlaCount = {this.state.habits.filter(item => item.count > 0 ).length}/>
    <Habits 
      habits={this.state.habits}
      onIncrement = {this.handleIncrement}
      onDecrement = {this.handleDecrement}
      onDelete = {this.handleDelete}
      onReset = {this.handleReset}
    />;
    </>
    )
  }  
}

export default App;
