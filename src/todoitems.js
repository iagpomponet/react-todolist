import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from '@material-ui/core/Fade';


    class TodoItems extends Component {

       constructor(props){
           super(props);

        this.createTask = this.createTask.bind(this);   
       } 
                
                createTask(item){
                    return (
                        <div key={item.key}> 
                            <li onClick={() => this.delete(item.key)} >{item.text}</li>          
                        </div>
                    ); 
                }
                
                delete(key){
                   this.props.delete(key);
                }
                    render(){
                        let todoEntries = this.props.entries;
                        let listItems = todoEntries.map(this.createTask);

                            return (
                                <ul className="theList">
                                    <FlipMove duration={250} easing="ease-out">
                                        {listItems}
                                    </FlipMove>
                                </ul>
                            )
                    }
            }

    export default TodoItems