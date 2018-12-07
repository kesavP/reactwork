const initialState = [
    {
        
    }
  ]
  
  export default function buttonFilter(state = initialState, action) {
    switch (action.type) {

        case "users-page-button-click":
            return state
        default:
         return state;
    }
}