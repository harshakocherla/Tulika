// Redux

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

// Navigation
import { NavigatorTabOne } from '../navigation/TabOneNavConf';
import { NavigatorTabTwo } from '../navigation/TabTwoNavConf';
import { NavigatorTabThree } from '../navigation/TabThreeNavConf';
import { TabBar } from '../navigation/RootNavConf';

//Reducer

import { tabBarReducer } from './reducer_TabBar';

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger());
};

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,
    tabOne: (state, action) =>
      NavigatorTabOne.router.getStateForAction(action, state),
    tabTwo: (state, action) =>
      NavigatorTabTwo.router.getStateForAction(action, state),
    tabThree: (state, action) =>
      NavigatorTabThree.router.getStateForAction(action, state),
  }),
  middleware(),
);
