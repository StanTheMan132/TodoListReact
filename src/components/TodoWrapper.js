import React from 'react' 
import { inject } from 'mobx-react';

const style = {
    "background-color": "#99738E",
    "width": "100%",
    "margin": "5px",
    "text-align": "left",
    "height": "40px", 
    "border": "solid 1px #F64C72",
    "display": "flex",
    "justify-content": "space-between"
} 
@inject('TodoStore')
class TodoWrapper extends React.Component {
    handleFinish = () => {
        this.props.TodoStore.finishTodo(this.props.todo)
    }
    render() {
//  TODO: make minutes add a 0 if minutes is less than 10
        return (
            <div style={style}>
            <div className="LeftTodo">
                <h3 className="TodoName">{this.props.todo.value}</h3>
                <p className="TodoTime">Created at: {this.props.todo.time.getHours()}:{this.props.todo.time.getMinutes()} </p>
            </div>
            <div className="RightTodo">
                <button onClick={this.handleFinish}>Done</button>
            </div>
            </div>
            )
    }
    
}
export default TodoWrapper