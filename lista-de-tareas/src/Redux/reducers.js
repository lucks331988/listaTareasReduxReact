import { ADD_TAREAS, DELETE_TAREA, COMPLETED_TAREA } from "./actions";

const initialState = {
    tareas: [],
}

const reducer =(state = initialState, action)=>{
    switch (action.type) {
        case ADD_TAREAS:
            return{
                ...state,
                tareas:[...state.tareas, 
                {id:Date.now(),
                text: action.payload, 
                completada:false}]
            };
        case DELETE_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(
                    (tarea)=>tarea.id !== action.payload),
            }
        case COMPLETED_TAREA:
            return{
                ...state,
                tareas: state.tareas.map((tarea)=>
                tarea.id === action.payload ? {...state, completada:true} : tarea)
            };
    
        default:
            return state;

    }
};

export default reducer;