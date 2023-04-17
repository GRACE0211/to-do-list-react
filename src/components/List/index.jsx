import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item';

export default class List extends Component {

    // 對接收的props進行: 類型、必要性的限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    render() {
        // {...todo} 批量傳遞
    const {todos,updateTodo,deleteTodo} = this.props;
    return (
        <div className="relative">
            <ul className="">
            {
                todos.map(todo =>{
                    return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })
            }
            </ul>
        </div>
    )
    }
}
