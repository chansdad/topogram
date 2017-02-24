import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';

import {
  NODES_SUBSCRIPTION_READY,
  NODES_SUBSCRIPTION_CHANGED,
  NODES_SUB,
} from '/imports/client/actions/nodes';

const initialState = {
  ready: false,
  nodes: [],
  nodesSubscriptionStopped: false,
};


export function nodes(state = initialState, action) {
  switch (action.type) {
    case NODES_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.payload.ready,
        nodesSubscriptionStopped: false,
      };
    case NODES_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        nodes: action.payload,
      };
    case STOP_SUBSCRIPTION:
      return action.payload === NODES_SUB
        ? { ...state, nodesSubscriptionStopped: true }
        : state;
    default:
      return state;
  }
}