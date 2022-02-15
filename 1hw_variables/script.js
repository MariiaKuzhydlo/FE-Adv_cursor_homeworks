const nikePrice = 123.965;
const adidasPrice = 90.2345;
const zaraPrice = 15.678;

document.getElementById('nike').innerHTML = `${nikePrice}$`;
document.getElementById('adidas').innerHTML = `${adidasPrice}$`;
document.getElementById('zara').innerHTML = `${zaraPrice}$`;

// 1.Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max( nikePrice , adidasPrice , zaraPrice );
console.log(maxPrice);

//2.Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min( nikePrice , adidasPrice , zaraPrice );
console.log(minPrice);

//3.Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumPrice = nikePrice + adidasPrice + zaraPrice ;
console.log(sumPrice);
 
//4.Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const sumIntPrice = Math.floor(nikePrice) + Math.floor(adidasPrice) + Math.floor(zaraPrice);
console.log(sumIntPrice);

//5.Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const sumPriceRoundTwoPoint = Math.round(sumPrice / 100) * 100;
console.log(sumPriceRoundTwoPoint);

//6.Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const isSumEven = (Math.floor(sumPrice) % 2 === 0 ) ? true : false ;
console.log(isSumEven); 

//7.Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 $
const payment = 500 ;
const change = payment - sumPrice;
console.log(change);

//8.Виведіть середнє значення цін, округлене до другого знаку після коми
const average = +(sumPrice / 3).toFixed(2);
console.log(average);

//9.Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const randomDiscountRate = (Math.random()).toFixed(2);
console.log(`${ randomDiscountRate * 100 }%`);

//10. Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const sumDiscount = +(sumPrice * randomDiscountRate).toFixed(2);
console.log(sumDiscount);
const priceWithDiscount = +((sumPrice - sumDiscount).toFixed(2));
console.log(priceWithDiscount);

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const cost = sumPrice / 2 ;
console.log(cost);
const profit = +((priceWithDiscount - cost).toFixed(2));
console.log(profit);

//Advanced

let allCalculation = `
<ul>
<li> The most expensive are nike shoes: ${maxPrice}$ 
<li> The cheapest is zara shoes:${minPrice}$ 
<li> The total price of all shoes: ${sumPrice}$
<li> The total price of all shoes , whose prices were rounded to the second point(in less side): ${sumIntPrice}$
<li> Total price rounded to hundereds: ${sumPriceRoundTwoPoint}$
<li> Boolean meaning is total price even (price were rounded to the less side): ${isSumEven}
<li> Change from 500$: ${change}$
<li>The average value of prices, rounded to the second point: ${average}$
<li> Random Discout Rate: ${randomDiscountRate * 100}%
<li> Sum of the discount: ${sumDiscount}$
<li> Price with discount(rounded to the second point): ${priceWithDiscount}$
<li> Cost of shoes: ${cost}$
<li> Our profit: ${profit}$
</ul>`;
document.getElementById('info').innerHTML = allCalculation ;