let inv = 12000;
let total = 12000;
let ret = 1.12;
let out = inv+total;
let inc = 0;

const nextYear = (t,p,r) => (t+p)*r;


for(let i = 0; i < 17; i++) {
	inv+=2000;
	out+=inv;
	total = nextYear(total, inv, ret);
}

inc = total-out;

console.log('Total', `$${total.toFixed(2)}`);
console.log('Invested', `$${out.toFixed(2)}`);
console.log('Earned', `$${inc.toFixed(2)}`);
