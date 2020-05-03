import { createStore, applyMiddleware , compose} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
     typeof window === 'object' &&
     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
     (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
       }) : compose;
const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware),
        // other store enhancers if any
      );
const configureStore = () => {
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
