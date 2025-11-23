module.exports = {
  timestamp: () => new Date().toISOString(),
  randomAmount: (min=1, max=1000) => Math.floor(Math.random() * (max - min + 1)) + min
};
