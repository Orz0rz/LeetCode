/*
	第二种方法和第一种类似，不过没比较一次就删除弹出。
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