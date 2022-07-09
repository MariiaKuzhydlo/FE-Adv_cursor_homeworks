export const nikePrice = 123.965;
export const adidasPrice = 90.2345;
export const zaraPrice = 15.678;
export const payment = 500;

export const maxPrice = Math.max(nikePrice, adidasPrice, zaraPrice);

export const minPrice = Math.min(nikePrice, adidasPrice, zaraPrice);

export const sumPrice = nikePrice + adidasPrice + zaraPrice;

export const sumIntPrice = Math.floor(nikePrice) + Math.floor(adidasPrice) + Math.floor(zaraPrice);

export const sumPriceRoundTwoPoint = Math.round(sumPrice / 100) * 100;

export const isSumEven = (Math.floor(sumPrice) % 2 === 0) ? true : false;

export const change = payment - sumPrice;

export const average = +(sumPrice / 3).toFixed(2);

export const randomDiscountRate = (Math.random()).toFixed(2);

export const sumDiscount = +(sumPrice * randomDiscountRate).toFixed(2);
export const priceWithDiscount = +((sumPrice - sumDiscount).toFixed(2));

export const cost = sumPrice / 2;
export const profit = +((priceWithDiscount - cost).toFixed(2));

