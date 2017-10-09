import {
  TEST_ACTION
} from '../constants/actions';

export default function initialize(state = {
  count: 0
}, action) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
}
