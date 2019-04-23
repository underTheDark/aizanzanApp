$(document).ready(function() {
  $(".navbar").on("click", ".navbar-item", function() {
    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
    var _index = $(this).index();
    $(this)
      .addClass("navbar-item-on")
      .siblings()
      .removeClass("navbar-item-on");
    // 子选项卡切换
    // $(".navbar-con")
    //   .eq(_index)
    //   .show()
    //   .siblings(".navbar-con")
    //   .hide();
  });
});