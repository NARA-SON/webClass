$(document).ready(function () { 

  $(window).scroll(function () { 
    let winSCT = $(window).scrollTop()
    console.log(winSCT)

    // if (winSCT > 400) {$("body").addClass("dark")}
    // else { $("body").removeClass("dark") }

    if(winSCT>400 && winSCT<1500){
      $("body").css("background","darkred")
    }else{
      $("body").css("background","grey")
    }

  })


})