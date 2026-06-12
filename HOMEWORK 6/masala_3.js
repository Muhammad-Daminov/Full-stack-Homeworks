 function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Tekshirish:
let nums = [1, 2, 2, 3, 4, 4, 5, 1, 6];
let nums1 = removeDuplicates(nums);

console.log(nums1); 
