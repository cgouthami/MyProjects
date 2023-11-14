let initialState = { counter:0 };

export const IncDecComp = (state = initialState, action)=>{
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter: state.counter + action.payload,
        };
}

if(action.type === "DECREMENT"){
    return {
        ...state,
        counter: state.counter - action.payload,
    };
}

return state;
};