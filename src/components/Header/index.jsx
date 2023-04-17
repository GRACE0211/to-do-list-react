import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default class Header extends Component {

    // 對接收的props進行: 類型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        // 判斷是否是enter按鍵
        if(event.keyCode !== 13) return;
        // 添加的todo不能為空
        if(event.target.value.trim() === ''){
            alert('輸入值不能為空!');
            return;
        }
        // 子想給父東西 => 父給子傳遞一個函數(通過props傳函數), 子在合適的時候想傳遞數據時 調一下函數
        // addTodo來自App
        // 準備好一個todo對象
        const todoObj = {id:nanoid(), name:event.target.value, done:false}
        // 將todoObj傳遞給App
        this.props.addTodo(todoObj);
        // 清空輸入框
        event.target.value = '';
    }
    render() {
    return (
        <div className="my-6">
            <input 
                onKeyUp={this.handleKeyUp} 
                type="text" placeholder=' PLEASE ENTER ...' 
                className="my-2 w-full p-2 shadow-md rounded-lg text-sm"/>
        </div>
    )
    }
}
