// 声明一个包
package main

func merge(nums1 []int,m int,nums2 []int,n int){
	i:=m-1
	j:=n-1//从数组的最后一位
	k:=m+n-1//数组总长度

	for ;i>=0 && j>=0; k--{
		if nums1[i]>nums2[j]{//数组的最后比较
			nums1[k]=nums1[i]
			i--
		}else{
			nums1[k] =nums2[j]
			j-- 
		}

	}
	for ;j>=0;k--{
		nums1[k]=nums2[j]
		j--
	}

}