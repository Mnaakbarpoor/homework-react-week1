import React from 'react';


const myList =[
    {
      id: 1,
      description: "Get out of bed",
      deadline: "2017-09-11",
      done: true
    },
    {
      id: 2,
      description: "Brush teeth",
      deadline: "2017-09-10",
      done: false
    },
    {
      id: 3,
      description: "Eat breakfast",
      deadline: "2017-09-09",
      done: false
    }
  ];

  const TodoFunc = (x)=>{
    return(
      <div className="todo-item">
      {x.boolean ? <p>ToDo: {x.description} / Deadline: {x.deadline}</p> : 
      <p style={{textDecoration: "line-through"}}>ToDo: {x.description} / Deadline: {x.deadline}</p>}
      </div>
    )
  }

class Dynamico extends React.Component{
  
  constructor(){
    super();
    this.state ={
      myLists : myList
    }
  }

    render(){
      const todos = this.state.myLists.map(item => <TodoFunc key={item.id} description={item.description} deadline={item.deadline} boolean={item.done} />)
        return(
          <div>
            <p>{todos}</p>
          </div>
        )
    }
}


export default Dynamico;



