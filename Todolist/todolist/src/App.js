import React from "react";
import "./App.css";
import rem from "./remove.png"
import check from "./checked.png"
import pen from "./fountain-pen.png"
import uncheck from './uncheck.png'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
      
      ],
      inpt: ""
    };
  }
  handelDelete = (a) =>
    this.setState({ tasks: this.state.tasks.filter((task) => task.id !== a) });
  handleAdd = () => {
    this.state.inpt === ""
      ? alert("Empty input")
      : this.setState({
          tasks: [
            ...this.state.tasks,
            { desc: this.state.inpt, isDone: false, id: Math.random() }
          ]
        });
    this.state.inpt = "";
  };
  handleDone = (a) =>
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === a ? { ...task, isDone: !task.isDone } : task
      )
    });
  render() {
    return (
      <div >
        
        <div id="note">
        <h1 id="title">Task List</h1>
        <aside>
        {this.state.tasks.map((task) => (
          <div id="task"> 
            <h2 className={task.isDone && "chateb"}>{task.desc}</h2>
            
            <img  src={task.isDone ? uncheck :check}  onClick={() => this.handleDone(task.id)} alt="Not found" ></img>
            <img src={rem} onClick={() => this.handelDelete(task.id)} alt="Not found" ></img>
            
          </div>
        ))}
       </aside> 
        <br />
        <footer>
        <input
          value={this.state.inpt}
          onChange={(e) => this.setState({ inpt: e.target.value })}
        />
        <img id="pen" src={pen} onClick={this.handleAdd} alt="Not found" ></img>
        <br/>
        <br/>
        </footer>
        </div>
      </div>
    );
  }
}
export default App;
