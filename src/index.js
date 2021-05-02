require(['data'], (dataProm) => {
  (async () => {
    try {
      const data = await dataProm;
      console.log('got data', data);
    } catch (e) {

    }
  })();
});
require(['data'], (dataProm) => {
  (async () => {
    try {
      const data = await dataProm;
      console.log('got data here as well', data);
    } catch (e) {

    }
  })();
});