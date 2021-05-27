import {createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import reducers from "../reducers";

const store = createStore(
  reducers,
  devToolsEnhancer({trace: true})
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;

export default store;
