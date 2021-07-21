import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  themeReducer,
  rtlReducer,
  cryptoTableReducer,
  customizerReducer,
  newOrderTableReducer,
  sidebarReducer,
  authReducer,
  roundBordersReducer,
  blocksShadowsReducer,
} from '../../redux/reducers/index';




const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  rtl: rtlReducer,
  roundBorders: roundBordersReducer,
  blocksShadows: blocksShadowsReducer,
  
  cryptoTable: cryptoTableReducer,
  customizer: customizerReducer,
  newOrder: newOrderTableReducer,
  sidebar: sidebarReducer,
  user: authReducer,
  
  
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
