let initialState = {name:"cnu"}

export const nameComp = (state=initialState,action) =>{
    if(action.type === "NAME_CHANGE"){
        return {
            ...state,name:action.payload,
        }
    }
    return state;
}