import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {id:1,
         todo:"Afternoon need to go to SOE-II",
         completed:false,   
        }
    ],
    addTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:(id)=>{}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}