define('data', ['ractive'], (Ractive) => {
  const user = {
    id: 1,
    name: 'Christoffer'
  };
  return new Promise(async (resolve) => {
    await fetch('https://httpbin.org/status/200');
    setTimeout(resolve, 3500, user);
  });
});