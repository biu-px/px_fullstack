/** 
// function merge(){
    
// }
//JS变量的类型是由值来决定的,弱类型,不需要定义
//m+n<=nums.length
const merge=(nums1,m,nums2,n)=>{//箭头函数 es6
    //把nums2放到nums1中【1，2，3，0，0，0】，重新排序
    //多定义一个变量
    let current2=0;//定义一个指针
    for(let i=nums1.length-1;i>=nums1.length-n;i--){
        nums1[i]=nums2[current2++];//nums2有个可遍历
    }
    console.log(nums1);
}
merge([1,2,3,0,0,0],3,[2,5,6],3);*/


const merge  = (nums1,m,nums2,n) => {          //  箭头函数  es6
    //吧nums2  放入 nums1 中
    //[1,2,3,0,0,0]  变为  [1,2,3,2,5,6]  再排序

    let current2 = n-1;
    for(let i = nums1.length-1;i >= nums1.length-n;i--){
        nums1[i]=nums2[current2--];
    }
    // console.log(nums1);
    return nums1.sort((a,b)=>a-b)//排序，箭头函数，右边a-b是布尔值，与0比较；改为b-a是从大到小排序

}
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));