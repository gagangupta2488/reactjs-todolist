    import React, { Component } from 'react'
    
    export default function  TodoCard (prpos) {
      const {children,handleDeleteTodo,handleEditTodo,index}=prpos
        return (
         <li className='todoItem'>  
         {children}
         <div className='actionsContainer'>
          <button onClick={()=>{
              handleEditTodo(index)
          }}>
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
            <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
            </li>
        )
      }
    
    
   