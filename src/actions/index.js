//put some content
export default textItem = (text) =>{
    console.log(text , "text")
    return (dispatch) => {
        dispatch({
            type: "MODIFY_USERNAME",
            payload: 'newname'
        });
    }
}
