import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
   num: 0,
};

const userReducer = (state = initalState, action) => {
   switch (action.type) {
      default:
         return {
            state,
         };
   }
};

export default userReducer;
