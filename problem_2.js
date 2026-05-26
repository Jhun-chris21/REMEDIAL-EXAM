// Problem 2 Javascript File
function findTwoSum(nums, target) {

  const map = {};

  for (let i = 0; i < nums.length; i++) {

    const complement = target - nums[i];

    // Check if complement already exists
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    // Store current number and index
    map[nums[i]] = i;
  }

  return [];
}
