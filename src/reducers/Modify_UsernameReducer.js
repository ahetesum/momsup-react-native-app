

const INITIAL_STATE = {
   username: 'soma',
  
};

 const modify_username = (state = INITIAL_STATE,action) =>{
    console.log(action.text,'mmmmm')
    switch(action.type){
        case "MODIFY_USERNAME":
         return {state ,username:action.payload}
    
         default:
         return state;
    
   }}
      export default modify_username;