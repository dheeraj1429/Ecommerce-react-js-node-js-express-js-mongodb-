import { ACTION_TYPE } from '../ActionType/actionType';

export const getData = function (data) {
   return {
      type: ACTION_TYPE.GET_DATA,
      payload: data,
   };
};
