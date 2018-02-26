import { TabBar } from '../navigation/RootNavConf';

export const tabBarReducer = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, ...action.payload };
  } else {
    return TabBar.router.getStateForAction(action, state);
  }
};
