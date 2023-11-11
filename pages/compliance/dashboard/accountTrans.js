
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

