import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Add extends React.Component {
  render() {
    return(
      <div className='AddList'>
        <input type="text" id="addlist" placeholder='add to list' /*oninput=""*/></input>
        <button onclick="addNew()" className="add">Add!</button>
      </div>
    );
  }
}

/**
class Todo extends React.Component {
  render() {
    return(

    );
  }
}
*/

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tdlist: ["Buy Milk", "Play BotW"],
      current: "",
    };
  }
  
  /**
  addNew() {
    const newtdlist = this.state.tdlist;
    this.setState({
      tdlist: newtdlist,
    });
  }
  */

  render() {
    const todolist = this.state.tdlist.map(x => {
      return (
        <li>
          {x}
        </li>
      )
    })
    return (
      <div className="list">
        <Add onClick={() => this.addNew()}/>
        <div className="todo">
          <ul>{todolist}</ul>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List />);