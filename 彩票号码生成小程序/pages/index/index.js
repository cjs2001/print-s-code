//index.js
//获取应用实例
var x = new Array();
var y;
Page({
  mysubmit: function () {
    y = parseInt(Math.random() * 32);/*首先生成第一个彩票号码*/
    x[0] = y;
    for (var i = 1; i < 7; i++) { /*循环判断*/
      y = parseInt(Math.random() * 32);
      x[i] = y;
      for (var j = 0; j < i; j++) {/*每生成一个彩票号码就与前面生成的彩票号码相比较*/
        if (x[j] == x[i]) {   /*如果相等，将 i-1 ，跳出内层循环后 i++,重新定位到i*/
          i = i-1;/**/
          break;
        }
      }
    }
    this.setData({
      a:x[0],
      b:x[1],
      c:x[2],
      d:x[3],
      e:x[4],
      f:x[5],
      g:x[6],
    })
  }
})
