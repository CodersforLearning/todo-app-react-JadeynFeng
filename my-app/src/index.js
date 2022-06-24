import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Add extends React.Component {
  render() {
    return(
      <div className='AddList'>
        <input type="text" id="addlist" placeholder='add to list'></input>
        <span onclick="addNew()" class="add">Add!</span>
      </div>
    );
  }
}

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tdlist: ["Buy Milk", "Play BotW"],
    };
  }
  
  addNew() {
    const newtdlist = this.state.tdlist;
    this.setState({
      tdlist: newtdlist,
    });
  }

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