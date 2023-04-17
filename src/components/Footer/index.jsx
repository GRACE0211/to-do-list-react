import React, { Component } from 'react'

export default class Footer extends Component {

    // 全選checkbox的回調
    handleCheckedAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }
    
    // 清除已完成任務的回調
    handleClearAllDone = () => {
        this.props.clearAllDone();
    }
    
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((a,todo)=> (todo.done === true ? a+1 : a),0);
        const total = todos.length;
    return (
        <div className="my-6 bg-slate-200 p-2 rounded-lg shadow-md">
            <label>
                <input type="checkbox" onChange={this.handleCheckedAll} checked={doneCount === total & total !== 0 ? true : false}/>
            </label>
            <span className='mx-2 text-sm font-bold'>
                <span>DONE: {doneCount}</span> / ALL: {total}
            </span>
            <button onClick={this.handleClearAllDone} className=" bg-red-900 text-white px-2 rounded hover:opacity-50 shadow-md text-sm font-bold">DEL DONE ITEMS</button>
        </div>
    )
    }
}
