function sumEvenNumbers(nums) {
  let total = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      total += nums[i];
    }
  }
  return total;
}