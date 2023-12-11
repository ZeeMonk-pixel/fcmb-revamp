
$(document).ready(function () {
  const $cusDetailsContainer = $("#customer-details");
  const $accDetailsContainer = $("#account-details");
  const $transHistContainer = $("#trans-history");
  const $loanAccContainer = $("#loan-accounts");
  const $otherAccContainer = $("#other-accounts");
  const $pag = $(".pagination");

  $(".acc-tab-item").on("click", function () {
    var tabId = $(this).data("tab");

   
    $(".acc-tab-item").removeClass("active-tab");

    
    $(this).addClass("active-tab");
    if (tabId === "customer") {
      if ($cusDetailsContainer.hasClass("none")) {
        $cusDetailsContainer.removeClass("none");
        $cusDetailsContainer.addClass("flex");
        $accDetailsContainer.addClass("none");
        $accDetailsContainer.removeClass("flex");
        $loanAccContainer.addClass("none");
        $otherAccContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.addClass("none");
      }
    }
    if (tabId === "account") {
      if ($accDetailsContainer.hasClass("none")) {
        $accDetailsContainer.removeClass("none");
        $cusDetailsContainer.addClass("none");
        $cusDetailsContainer.removeClass("flex");
        $accDetailsContainer.addClass("flex");
        $loanAccContainer.addClass("none");
        $otherAccContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.addClass("none");
      }
    }
    if (tabId === "transaction") {
      if ($transHistContainer.hasClass("none")) {
        $accDetailsContainer.addClass("none");
        $cusDetailsContainer.addClass("none");
        $cusDetailsContainer.removeClass("flex");
        $accDetailsContainer.removeClass("flex");
        $loanAccContainer.addClass("none");
        $otherAccContainer.addClass("none");
        $transHistContainer.removeClass("none");
        $pag.removeClass("none");
      }
    }
    if (tabId === "other") {
      if ($otherAccContainer.hasClass("none")) {
        $accDetailsContainer.addClass("none");
        $cusDetailsContainer.addClass("none");
        $cusDetailsContainer.removeClass("flex");
        $accDetailsContainer.removeClass("flex");
        $loanAccContainer.addClass("none");
        $otherAccContainer.removeClass("none");
        $transHistContainer.addClass("none");
        $pag.removeClass("none");
      }
    }
    if (tabId === "loan") {
      if ($loanAccContainer.hasClass("none")) {
        $accDetailsContainer.addClass("none");
        $cusDetailsContainer.addClass("none");
        $cusDetailsContainer.removeClass("flex");
        $accDetailsContainer.removeClass("flex");
        $loanAccContainer.removeClass("none");
        $otherAccContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.removeClass("none");
      }
    }
  });
});


$(document).ready(function () {
  
  const $selectModal = $("#trans-history tbody tr");
  const $myModal = $("#trans-modal");
  const $newModal = $("#trans-details");
  const $closeNewModal = $("#trans-details img");
  const $closeBtn = $(".trans-modal_head img");
  const $loadNewModal = $(".id-detail p");

  $selectModal.on('click', function(){
    if ($myModal.hasClass('none')){
      $myModal.removeClass('none');
    }
  });
  $closeBtn.on('click', function(){
    $myModal.addClass('none');
  });
  $loadNewModal.on('click', function(){
    if ($newModal.hasClass('none')){
      $newModal.removeClass('none');
      $myModal.addClass('none');
    }
  })
  $closeNewModal.on('click', function(){
    $newModal.addClass('none');
  })


});



$(document).ready( function () {
  const $genDetails = $("#genDetails");
  const $genDetailsAccord = $("#genDetailsAccord");
  const $accInfo = $('#accInfo');
  const $accInfoAccord = $('#accInfoAccord');
  const $genInfo = $('#genInfo');
  const $genInfoAccord = $('#genInfoAccord');
  const $advancedInfo = $('#advancedInfo');
  const $advancedInfoAccord = $('#advancedInfoAccord');
  const $mandateInfo = $('#mandateInfo');
  const $mandateInfoAccord = $('#mandateInfoAccord');
  const $accMaintain = $('#accMaintain');
  const $accMaintainAccord = $('#accMaintainAccord');
  

  $genDetails.on('click', function(){
    if ($genDetailsAccord.hasClass('none')){
      $genDetailsAccord.removeClass('none');
    } else {
      $genDetailsAccord.addClass('none')
    }
  })

  $accInfo.on('click', function(){
    if ($accInfoAccord.hasClass('none')){
      $accInfoAccord.removeClass('none')
    } else{
      $accInfoAccord.addClass('none')
    }
  })

  $genInfo.on('click', function(){
    if ($genInfoAccord.hasClass('none')){
      $genInfoAccord.removeClass('none')
    } else{
      $genInfoAccord.addClass('none')
    }
  })

  $advancedInfo.on('click', function(){
    if ($advancedInfoAccord.hasClass('none')){
      $advancedInfoAccord.removeClass('none')
    } else{
      $advancedInfoAccord.addClass('none')
    }
  })

  $mandateInfo.on('click', function(){
    if ($mandateInfoAccord.hasClass('none')){
      $mandateInfoAccord.removeClass('none')
    } else{
      $mandateInfoAccord.addClass('none')
    }
  })

  $accMaintain.on('click', function(){
    if ($accMaintainAccord.hasClass('none')){
      $accMaintainAccord.removeClass('none')
    } else{
      $accMaintainAccord.addClass('none')
    }
  })

})

$(document).ready(function (){
  const $genAccord = $("#genDetailsAccord");
  const $closeModal = $("#closeModal");
  const $overlay = $("#overlay");

  $genAccord.on('click', 'img', function(){

    var clickedImage = $(this);
    var content = clickedImage.clone();
    $("#modalContent").html(content);

    $("#modalOverlay").fadeIn();
    $overlay.removeClass('none');
    $overlay.fadeIn();
    
  })
  $closeModal.on('click',(function (e) {
      $("#modalOverlay").fadeOut();
      $("#modalOverlay").removeClass("zoomed").css("transform", "scale(1)");
      $overlay.addClass('none');
      $overlay.fadeOut();
  }));

  $("#modalOverlay").on("wheel", function (e) {
    e.preventDefault(); 
    var scale = e.originalEvent.deltaY > 0 ? 0.9 : 1.1;
    zoomContent(scale);
  });

  function zoomContent(scale) {
    var modalContent = $("#modalOverlay");
    var currentScale = parseFloat(modalContent.css("transform").split(",")[3]) || 1;
    var newScale = currentScale * scale;
    newScale = Math.max(0.5, Math.min(2, newScale));
    modalContent.css("transform", "scale(" + newScale + ")");
    modalContent.toggleClass("zoomed", newScale !== 1);
  }
})