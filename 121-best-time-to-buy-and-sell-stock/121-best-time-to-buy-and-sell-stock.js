/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minValue = Math.max(...prices)
     
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minValue){
            minValue = prices[i]
        } else if(prices[i] - minValue > profit){
            profit = prices[i] - minValue;
        }
    }
        return profit;
};
