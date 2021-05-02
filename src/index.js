require(['data'], (dataProm) => {
  dataProm.then((data) => {
    console.log('got data', data);
  });
});