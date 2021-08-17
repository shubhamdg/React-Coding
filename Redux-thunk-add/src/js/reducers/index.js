import { GET_USERS, GET_USERS_SUCCESS } from "../constants/list-types";
import { ADD_ARTICLE } from "../constants/action-types";
//import { LIST_USER } from "../constants/list-types";


const initialState = {
  articles: [],
  users: [] ,
  isLoading: false
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }

  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      articles: state.articles.concat(action.payload)
    }
  }

  // if (action.type === LIST_USER) {
  //   return Object.assign({}, state, {
  //     users: state.users.concat(action.payload)
  //   });
  // }

  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        users: action.users
      });
      default:
  return state;
}
}

export default rootReducer;


