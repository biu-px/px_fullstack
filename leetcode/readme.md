#TwoSum Leetcode 
1.node安装
  -node.exe  
  -node全局可访问
node 是让js运行在服务器端的环境
  开发速度 更快，没有Java稳定



-读题
   整数数组 nums,target 参数
   const nums=[2,7,11,15]

-前期 写了再优化
   1.时间复杂度
      O（n2）
   2.空间复杂度

-提供一个算法
   O（n2）-> O（n）
   数据结构
   Array 也是一个基本的数据结构，是一个数据集合 数字索引 ，空间是连续的
   JSON Object对象字面量 也是一个数据 集合 在C里没有原生的，hashmap
   O（n2）-> O（n）+空间多花销



const twoSum=(nums,target)=>{
    //  console.log('两数相加')
    let map={};//JSON Object
    let res=[];
    // 编写功能  一个函数完成一个功能
    //es6更简洁
    //callback
    //for+执行功能
    nums.forEach((e,i)=>map[e] =i);//O
    console.log(map)
    return res;
    }
    // 遍历
   

 twoSum([2,7,11,15],9);



 // const numbers = [3,62,234,7,23,74,23,76,92];
 const arr=[];
 const largeNumbers=numbers.forEach(function(e,i){
     if(e>70){
         arr.push(e);
     }
 })

 console.log(arr);
