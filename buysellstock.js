/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let buy = prices[0]; //7
    prices[0] = 0;
    let profit = 0;
    for(let i = 0; i < prices/length; i++){
        if(buy > prices[i]){
            buy = prices[i];
            prices[i] = 0;
        } else {
            profit = 
        }
    }
};