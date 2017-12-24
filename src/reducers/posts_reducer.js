import _ from 'lodash'
import { FETCH_POST, CREATE_POST } from '../actions/index'

export default function (state = {}, action){
  switch (action.type) {
    case FETCH_POST:
      return _.mapKeys(action.payload.data,'id')
      break;
      //case CREATE_POST:
      //  return {}
      //  break;
    default:
      return state;

  }
}
