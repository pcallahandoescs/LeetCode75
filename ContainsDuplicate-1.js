/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let memory = {};

    for(i = 0; i < nums.length; i++){
        if(memory[nums[i]] === undefined){
            memory[nums[i]] = "";
        } else {
            return true;
        }
    }

    return false;

};