
const INITIAL_STATE = {
    donners:[],
};

export default  (state = INITIAL_STATE,action) =>  {
    switch (action.type) {
        case "ADDDONNER":
            // console.log(state.donners)
          return({
         
            ...state,
               donners:action.payload
            }
            )

        }
    return state;
}