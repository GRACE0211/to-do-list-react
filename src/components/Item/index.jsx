import React, { Component } from 'react'
import './index.css'
import { Trash } from 'phosphor-react';
import 'animate.css';


export default class Item extends Component {
    // 標示滑鼠移入移出的狀態
    state = {mouse:false,done:false};

    // 滑鼠移入移出的回調
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse:flag}); 
        }
    }

    // 勾選, 取消勾選某一個todo的回調
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id,event.target.checked);
            console.log(event.target.checked);
            // this.setState({done:!this.state.done});
        }
    }
    
    // 刪除某一個todo的回調
    handleDelete = (id) => {
        if(window.confirm('Sure to delete?')){
            this.props.deleteTodo(id);
        }
    }

    render() {
        const {id,name,done} = this.props;
    return (
        <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} 
            className="relative overflow-hidden my-2  bg-gray-400 py-4 px-2 shadow-md transition duration-300 ease-in-out hover:bg-slate-500 hover:text-slate-50 rounded-lg font-bold uppercase animate__animated animate__bounceInUp"
            >
            <label className="">
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)} className="w-4 h-4 rounded-full"/>
                <span className="mx-2">{name}</span>
            </label>
            <button onClick={()=>this.handleDelete(id)}  className="btn">
            <Trash size={26} color="#c9af92" weight="bold" className='trash'/>
            </button>
        </li>
    )
    }
}


// style={{display:this.state.mouse? 'inline-block' : 'none'}}