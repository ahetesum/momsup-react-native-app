
//put some content
import { combineReducers } from "redux";
import modify_username from "./Modify_UsernameReducer";


export default combineReducers({
    modify_name:modify_username,
}
) 

