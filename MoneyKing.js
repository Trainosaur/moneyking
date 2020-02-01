let inv = 12000; // Amount to be invested
let total = inv; // Total money in play, invested+earned
let roi = i => i * 1.12; // Return on investment
let out = 0; // Money out: compounded annual amount invested
let inc = 0; // Income: compounded annual amount earned

const ipad = (i, p, v) => `${v.repeat(p - `${i}`.length)}${i}`;

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const MoneyKing = cash => ipad(usd.format(cash).split('.')[0], 8, ' ');

const year = new Date().getFullYear();

console.row = (y, i, e, t, idx) =>
  console.log(
    `${idx ? ipad(idx, 2, '0') : ''} \t ${y} \t ${i} \t\t ${e} \t\t ${t}`
  );

console.row('YEAR', 'INVESTED', 'EARNED', 'TOTAL');

for (let i = 0; i < 18; i++) {
  out += inv;

  // inv+=2000;
  let data = {
    year: year + i,
    invested: `${MoneyKing(out)}`,
    earned: `${MoneyKing(inc)}`,
    total: `${MoneyKing(total)}`
  };

  console.row(data.year, data.invested, data.earned, data.total, i + 1);

  total = roi(total + inv);
  inc = total - out;
}
