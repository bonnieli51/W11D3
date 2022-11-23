import produceData from "../mockData/produce.json";

const POPULATE = "POPULATE";

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });
      return newState;
    default:
      return state;
  }
}

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};
