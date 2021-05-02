define('data', ['ractive'], (Ractive) => {
  const user = {
    id: 1,
    name: 'Christoffer'
  };
  return new Promise((resolve) => {
    setTimeout(resolve, 3500, user);
  });
});