const req = require('./req');
const ipad = req('ipad');
const $_KING = req('MoneyKing');

let inv = 12000; // Amount to be invested
let total = inv; // Total money in play, invested+earned
let roi = i => i * 1.12; // Return on investment
let out = 0; // Money out: compounded annual amount invested
let inc = 0; // Income: compounded annual amount earned

console.bnoden = (y, i, e, t, idx) =>
  console.log(
    `${idx ? ipad(idx, 2, '0') : ''} \t ${y} \t ${ipad(i, 8, ' ')} \t ${ipad(
      e,
      8,
      ' '
    )} \t ${ipad(t, 8, ' ')}`
  );

console.bnoden('YEAR', 'INVESTED', 'EARNED', 'TOTAL');

for (let i = 0; i < 18; i++) {
  out += inv;

  // inv+=2000;
  let data = {
    year: req('year') + i,
    invested: `${$_KING(out)}`,
    earned: `${$_KING(inc)}`,
    total: `${$_KING(total)}`
  };

  console.bnoden(data.year, data.invested, data.earned, data.total, i + 1);

  total = roi(total + inv);
  inc = total - out;
}
