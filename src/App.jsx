import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './App.css';

export default class App extends React.Component {
  // 狀態在哪裡, 操作狀態的方法就在哪裡
  // 初始化狀態
  state = {
    todos:[
      {id:1,name:'leetcode',done:false},
      {id:2,name:'react',done:false},
      {id:3,name:'vue',done:false}
    ]
  }

  // addTodo用於添加一個todo, 接收的參數是todo對象
  addTodo = (todoObj) => {
    // 獲取原todos
    const {todos} = this.state;
    // 追加一個todo
    const newTodos = [...todos,todoObj];
    // 更新狀態
    this.setState({todos:newTodos});
  }

  // updateTodo用於更新一個todo對象, ex: 更新done的布林值
  updateTodo = (id,done) => {
    const {todos} = this.state;
    // 獲取狀態中的todos, 匹配處理數據
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj;
    })
    this.setState({todos:newTodos});
  }

  // deleteTodo用於刪除一個todo對象
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id;
    })
    // 更新狀態
    this.setState({todos:newTodos});
  }
  
  // checkAllTodo用於全選todo對象
  checkAllTodo = (done) => {
    //  獲取原來的todos
    const {todos} = this.state;
    // 加工數據
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    });
    // 更新狀態
    this.setState({todos:newTodos});
  }

    // clearAllDone用於清除已完成的任務
    clearAllDone = () => {
      //  獲取原來的todos
      const {todos} = this.state;
      const newTodos = todos.filter((todoObj)=>{
        return todoObj.done === false;
      });
    // 更新狀態
    this.setState({todos:newTodos});
    }


// 利用父傳子方法將state資料透過App傳給List
// 子想給父東西 => 父給子傳遞一個函數(通過props傳函數), 子在合適的時候想傳遞數據時 調一下函數
  render(){
    return (
      <div className='flex justify-center pt-20 md:pt-40 h-screen bg-gray-300 font-mono '>
      <div class="background bg-gray-300"></div>
      <div className="mx-auto box-border max-w-sm p-4 ">
      <p class="text-center text-4xl md:text-5xl font-extrabold text-gray-50 drop-shadow-lg">TO DO LIST</p>
        <div>
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer checkAllTodo={this.checkAllTodo} todos={this.state.todos} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    </div>
    );
  }
}

