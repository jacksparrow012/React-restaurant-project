import DISHES from "../data/dishes"
import COMMENTS from "../data/comments"
import { combineReducers } from "redux"
import * as actionTypes from "../components/body/actionTypes"
// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
//     // sample: "Nazrul islam sajeeb",
//     // son: "",
//     // daughter: ""

// }
const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
        default:
            return dishState
    }

}
const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString()
            return commentState.concat(comment)

        default: return commentState
    }
}

const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})


export default Reducer

