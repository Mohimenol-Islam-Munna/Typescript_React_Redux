import groupReducer from './groupReducer';
import anotherReducer from './anotherReducer';

const rootReducer = {
  ...groupReducer,
  ...anotherReducer,
};

export default rootReducer;
