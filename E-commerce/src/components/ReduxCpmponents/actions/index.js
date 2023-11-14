export const increment = (num) => {
    return {
        type:"INCREMENT",
        payload:num,
    }
}

export const decrement = (num) =>{
    return {
        type:"DECREMENT",
        payload:num,
    }
}

export const nameChange = (nameValue) =>{
    return {
        type:"NAME_CHANGE",
        payload:nameValue,
    }
}