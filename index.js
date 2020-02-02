const { req, ipad, usd, year } = require('./modules');
const $_KING = require('./MoneyKing');

let inv = 12000;   // Amount to be invested.
let total = inv;  // Total money in play, invested+earned
let roi = i => i * 1.12;   // Return on investment
let out = 0;   // Money out: compounded annual amount invested
let inc = 0;  // Income: compounded annual amount earned
let apy = 0.02;   // Annual percentage yield: comounded interest on savinggs
let homeEq = 10000;   // Estimated/hypothetical down payment as base for home equity
let mortgage = 1500;  // Estimated monthy mortgage payments, which build equity.

const MONTHS = 12;  // PRO TIP: There are 12 months EVERY year. They are ALWAYS the same months and they ALWAYS appear in the SAME order (Jan, Feb, Mar, etc.).
const collegeBoundTwins = 18;   // Number of years until they perform the financial fatality on me or I kick tuition ITN and still have plenty leftover for myself as I enter my golden years.

const savings = {
  saved: 0,    // Total savings including accrued interest (apy)
  save: function(i=inv, a=apy) {
    this.saved += (i*0.33)*(1+a)  // Save 1/3 of investments + accrue interest, compounded annually.
  }
}

console.bnoden = (y, i, e, t, idx) => console.log(
  `${idx ? ipad(idx, 2, '0') : ''} \t ${y} \t ${ipad(i,8,' ')} \t ${ipad(e,8,' ')} \t ${ipad(t,8,' ')}`
);

console.bnoden('YEAR', 'INVESTED', 'EARNED', 'TOTAL');

for (let i = 0; i < collegeBoundTwins; i++) {
  out += inv;
  savings.save();
  homeEq += (mortgage*MONTHS);

  let data = {
    year: year + i,
    invested: `${$_KING(out)}`,
    earned: `${$_KING(inc)}`,
    total: `${$_KING(total)}`
  };

  console.bnoden(data.year, data.invested, data.earned, data.total, -~i);

  total = roi(total + inv);
  inc = total - out;
  // inv+=2000;  // Increase investment amount each year
}

let saved = savings.saved;
let fluidTotal = total+saved;
let netWorth = fluidTotal + homeEq;

console.log('\nSavings: ', usd(saved));
console.log('Home equity: ', usd(homeEq));
console.log('Fluid Total: ', usd(total+saved));
console.log('Net Worth: ', usd(total+saved));
