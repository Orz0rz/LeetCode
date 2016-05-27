

/*
	 先用最简单的方式实现。
	 对于已经比较通过的数字都设置为NaN，然后一一比较。
	 o(m * n) 应该是最不好的方法。
 */

 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
 	var result = [];
 	for (var i = nums1.length - 1; i >= 0; i--) {
 		for (var k = 0; k < nums2.length; k++) {
 			if( !isNaN(nums1[i]) && !isNaN(nums2[k])  && nums1[i] == nums2[k]){
 				result.push(nums1[i]);
 				nums1[i] = nums2[k] = NaN;
 			}
 		}
 	}   
 	return result;
 };



 var nums1 = [8,0,3], nums2 = [0,0];
 console.log(intersect(nums1, nums2));