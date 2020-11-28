- 查知识点： (内容)+mdn

0. 按住鼠标滚轮：可以多行添加删减

1. 注：前面加一行 Ctrl+Shift+回车

2. 注：Ctrl+D: 一次选中同样的词

3.  h$*6>{$级标题}+tab：
    <h1>1级标题</h1>
    <h2>2级标题</h2>
    <h3>3级标题</h3>
    <h4>4级标题</h4>
    <h5>5级标题</h5>
    <h6>6级标题</h6> 

4. 多行重复写法：
 p*3>{内容}+tab：
    <p>内容</p>
    <p>内容</p>
    <p>内容</p>   

5. >lorem 乱数假文：没有实际含义的文字。
   不能用{}
   p*2>lorem +tab;
   p*3>lorem1 +tab   :只生成一个单词
  
6. 加缩进：Tab
   减缩进：Shift

7. 数字递增：$
   行里属性用[]
  ((h2[id="chapter$"]>{章节$})+p>lorem1000)*6
  a[href="chapter$"]*6>{章节$}

8. 格式化：Alt+Shift+F

9. 查找：Ctrl+F

10. .starwars再enter 就变成了 <div class="starwars"></div>