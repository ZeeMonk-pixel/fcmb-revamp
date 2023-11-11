


$(document).ready(function () {
  const $cusDetailsContainer = $("#customer-details");
  const $accDetailsContainer = $("#account-details");
  const $transHistContainer = $("#trans-history");
  const $pag = $(".pagination");

  $(".acc-tab-item").on("click", function () {
    var tabId = $(this).data("tab");

    
    $(".acc-tab-item").removeClass("active-tab");

    
    $(this).addClass("active-tab");
    if (tabId === "customer") {
      if ($cusDetailsContainer.hasClass("none")) {
        $cusDetailsContainer.removeClass("none");
        $accDetailsContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.removeClass("none");
      }
    }
    if (tabId === "account") {
      if ($accDetailsContainer.hasClass("none")) {
        $accDetailsContainer.removeClass("none");
        $cusDetailsContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.removeClass("none");
      }
    }
    if (tabId === "transaction") {
      if ($transHistContainer.hasClass("none")) {
        $accDetailsContainer.addClass("none");
        $cusDetailsContainer.addClass("none");
        $transHistContainer.removeClass("none");
        $pag.removeClass("none");
      }
    }
    if (tabId === "other") {
      if ($otherAccContainer.hasClass("none")) {
        $accDetailsContainer.addClass("none");
        $cusDetailsContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.removeClass("none");
      }
    }
  });
});
