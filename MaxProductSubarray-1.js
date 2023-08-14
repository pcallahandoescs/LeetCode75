/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
    let maxIndex = [nums[0]];
    let minIndex = [nums[0]];
    let maxValue = nums[0];

    for(let i = 1; i < nums.length; i++){
        const num = nums[i];

        maxIndex[i] = Math.max(
            num,
            num*maxIndex[i-1],
            num*minIndex[i-1]
        );
        minIndex[i] = Math.min(
            num,
            num*maxIndex[i-1],
            num*minIndex[i-1]
        );
        maxValue = Math.max(maxValue, maxIndex[i]);
    }
    return maxValue;
};