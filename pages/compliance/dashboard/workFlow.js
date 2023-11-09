$(document).ready(function () {
    const accountTabs = [
      "New Requests (100)",
      "Pending Requests(100)",
      "Approved Requests(100)",
      "Declined Requests(100)",
    ];
  
    const $container = $("#acc-tabs");
    var activeTab = accountTabs[0];
    const $cusDetailsContainer = $("#customer-details");
    const $accDetailsContainer = $("#account-details");
    const $transHistContainer = $("#trans-history");
    const $otherAccContainer = $("#other-accounts");
    const $pag = $(".pagination");
    $cusDetailsContainer.removeClass("none");
    $pag.removeClass('none');
  
   
  
    function updateTabSelection(selectedTab) {
      activeTab = selectedTab;
      $container.find(".acc-tab-item").removeClass("active-tab");
      $container
        .find(".acc-tab-item:contains(" + activeTab + ")")
        .addClass("active-tab");
  
      if (activeTab === "New Requests (100)") { 
        if ($cusDetailsContainer.hasClass("none")) {
          $cusDetailsContainer.removeClass("none");
          $accDetailsContainer.addClass("none");
          $accDetailsContainer.removeClass("flex");
          $loanAccContainer.addClass("none");
          $otherAccContainer.addClass("none");
          $transHistContainer.addClass("none");
          $pag.removeClass('none');
        }
      } else if (activeTab === "Approved Requests(100)") {
        if ($transHistContainer.hasClass("none")) {
          $accDetailsContainer.addClass("none");
          $cusDetailsContainer.addClass("none");
          $cusDetailsContainer.removeClass("flex");
          $accDetailsContainer.removeClass("flex");
          $loanAccContainer.addClass("none");
          $otherAccContainer.addClass("none");
          $transHistContainer.removeClass("none");
          $pag.removeClass('none');
        } 
      } else if (activeTab === "Pending Requests(100)") {
        if ($accDetailsContainer.hasClass("none")) {
          $accDetailsContainer.removeClass("none");
          $cusDetailsContainer.addClass("none");
          $cusDetailsContainer.removeClass("flex");
          $loanAccContainer.addClass("none");
          $otherAccContainer.addClass("none");
          $transHistContainer.addClass("none");
          $pag.removeClass('none');
        } 
      } else if (activeTab === "Declined Requests(100)") {
        if ($otherAccContainer.hasClass("none")) {
          $accDetailsContainer.addClass("none");
          $cusDetailsContainer.addClass("none");
          $cusDetailsContainer.removeClass("flex");
          $accDetailsContainer.removeClass("flex");
          $loanAccContainer.addClass("none");
          $otherAccContainer.removeClass("none");
          $transHistContainer.addClass("none");
          $pag.removeClass('none');
        } 
      } else {
        // $cusDetailsContainer.empty(); 
      }
    }
  
    $.each(accountTabs, function (index, item) {
      const $itemDiv = $("<div>").addClass("acc-tab-item");
      const $eachTab = $("<h4>").text(item);
  
      if (activeTab === item) {
        $itemDiv.addClass("active-tab");
      }
  
      $itemDiv.on("click", function () {
        updateTabSelection(item);
      });
  
      $itemDiv.append($eachTab);
      $container.append($itemDiv);
    });
  
    // updateCustomerDetails(); 
  });