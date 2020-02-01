let inv = 12000;
let total = inv;
let roi = i => i * 1.12;
let out = 0;
let inc = 0;

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const MoneyKing = cash => (cash ? usd.format(cash).split('.')[0] : 'N/A\t');
//const MoneyKing = cash => cash.toFixed(0);

const year = new Date().getFullYear();

console.log(`YEAR \t INVESTED \t\t EARNED \t\t TOTAL`);

for (let i = 0; i < 18; i++) {
  out += inv;

  // inv+=2000;
  let data = [
    i,
    {
      year: year + i,
      invested: `${MoneyKing(out)}`,
      earned: `${MoneyKing(inc)}`,
      total: `${MoneyKing(total)}`
    }
  ];

  // console.log([...data]);
  console.log(
    `${data[1].year} \t ${data[1].invested} \t\t ${data[1].earned} \t\t ${
      data[1].total
    }`
  );

  total = roi(total + inv);
  inc = total - out;
}
