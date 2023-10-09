export const ADD_TAREAS = 'ADD_TAREAS';
export const DELETE_TAREA = 'DELETE_TAREA';
export const COMPLETED_TAREA = 'COMPLETED_TAREA';

export const add_tarea = (task)=>{
    return {
        type:ADD_TAREAS,
        payload: task
    }
};

export const delete_tarea = (id)=>{
    return{
        type:DELETE_TAREA,
        payload: id
    }
};

export const completed_tarea = (id)=>{
    return{
        type:COMPLETED_TAREA,
        payload: id
    }
};