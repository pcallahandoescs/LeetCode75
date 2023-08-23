/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let buyPrice = prices[0]; //7
    let profit = 0;

        for(let i = 0; i < prices.length-1; i++){
            let tempProfit = prices[i+1]-prices[i];
            if(tempProfit > 0){
                if(prices[i] < buyPrice) {
                    buyPrice=prices[i];
                }
                if(prices[i+1]-buyPrice > profit){
                    profit = prices[i+1]-buyPrice;
                }
            }
        }

    return profit
};
