/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {

    let memory = {};
    for(let i = 0; i < nums.length; i++){
        if(memory[nums[i]] === undefined){
            memory[target-nums[i]] = i;
        } else {
            return [memory[nums[i]], i]
        }
    }
};