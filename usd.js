module.exports = cash =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
    .format(cash)
    .split('.')[0];
