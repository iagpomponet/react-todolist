import React ,{ Component } from "react";
import TodoItems from "./todoitems"
import "./todolist.css"


class TodoList extends Component{
    constructor(props){
        super(props);

    this.state = {
        list : []
    }    

    this.addItem = this.addItem.bind(this);
    }

    addItem = e =>{
        if(this._input.value !== ""){
            var newItem = {
                text : this._input.value,
                key : Date.now()
            }
        }else {
            alert("Write a valid task");
            return "error";
        }
        
        this.setState((prevState) =>{
            return {
                list : prevState.list.concat(newItem)
            };
        })
            e.preventDefault();
            this._input.value = "";
    }

    deleteItem = (key) =>{
        let filteredItems = this.state.list.filter((item) => {
           return (item.key !== key)
        })
            this.setState({
                list : filteredItems
            })
    }


    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <div className="brand">
                         <h1>Todo list</h1>
                         <p>Organize your life!</p>
                    </div>
                         
                            <form onSubmit={this.addItem}>
                                <input type="text"  
                                    ref = {e => this._input = e }
                                    placeholder="Enter your task" ></input>
                                        <button >Add</button>                
                                    </form>
                                </div>
                                        <TodoItems 
                                        entries={this.state.list}
                                        delete={this.deleteItem}
                                        />
                    </div>
            );
    }
}

export default TodoList