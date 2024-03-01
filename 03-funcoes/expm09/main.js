function calculateAverage(nums) {
  if(nums.length === 0) {
    return 0;
  } else {
    let total = 0;
    for(let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total / nums.length;
  }
}