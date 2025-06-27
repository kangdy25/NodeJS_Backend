process.on('message', (num) => {
  if (num === 'exit') {
    process.exit(0);
  }
  setTimeout(() => {
    process.send(`Waited ${num}s`);
  }, num * 1000);
});