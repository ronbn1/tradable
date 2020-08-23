export const createState = (units) => {
   const state = {};
   Object.keys(units).map(
      (unitKeyName) => (state[unitKeyName] = { candlesMap: {}, lastClose: {} })
   );
   return state;
};
