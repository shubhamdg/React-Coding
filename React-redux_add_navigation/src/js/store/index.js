// import { createStore } from "redux";

// import rootReducer from "../reducers/index";

// const store = createStore(rootReducer);

// export default store;


// import { applyMiddleware, compose, createStore } from "redux";
// import thunkMiddleware from "redux-thunk";

// import rootReducer from "../reducers/index";

//   export default function configureStore(preloadedState) {
//   const middlewares = [thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);
//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = compose(...enhancers);
//   const store = createStore(rootReducer, preloadedState, composedEnhancers);
//   return store;
// }


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";
 const store = createStore(rootReducer, applyMiddleware(thunk));

 export default store ; 





