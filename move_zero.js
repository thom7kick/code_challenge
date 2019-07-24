/**
 * @param {*} nums 
 * Move all 0 elements to the end of the given array
 * @note
 *   1. You must do this `in-place` without making a copy of the array.
 *   2. Minimize the total number of operations.
 * @example
 *      Input: [0,1,0,3,12]
 *      Output: [1,3,12,0,0]
 */
var moveZeroes = function(nums) {
    if(nums.length < 2){
        return nums;
    }
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

// test case
const newArr = moveZeroes(
        [0, 0, 0, 0, 0, 0, 1]
        // [0,1,0,3,12]
        // [0, 0, 0, 0]
        );

console.log(newArr);

