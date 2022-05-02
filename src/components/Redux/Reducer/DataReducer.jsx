

const initialstate = {
    list: [
        {
            
            FirstName: "abc",
            LastName: "xyz",
            Email: "abc@gmail.com",
           
        },
        {
            
            FirstName: "xyz",
            LastName: "abc",
            Email: "xyz@gmail.com",
            
        }
    ]

}



export const DataReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_DATA":
            {
                return {
                    ...state,
                    list: [action.payload, ...state.list],
                };

            }
            default:
                return state;
    
    
        }
    }