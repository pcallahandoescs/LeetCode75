/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    //go through array and see if what i see now is
    //what ive seen before (make a dictionary?)
        //if my number is new, put in memory
        //if number does exist, return true
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