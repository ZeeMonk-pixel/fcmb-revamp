$(document).ready(function () {
    const accountTabs = [
      "In Progress (100)",
      "Completed(100)",
      "Overdue(100)",
    ];
  
    const $container = $("#acc-tabs");
    var activeTab = accountTabs[0];
    const $cusDetailsContainer = $("#customer-details");
    const $accDetailsContainer = $("#account-details");
    const $transHistContainer = $("#trans-history");
    const $pag = $(".pagination");
    $cusDetailsContainer.removeClass("none");
    $pag.removeClass('none');
  
   
  
    function updateTabSelection(selectedTab) {
      activeTab = selectedTab;
      $container.find(".acc-tab-item").removeClass("active-tab");
      $container
        .find(".acc-tab-item:contains(" + activeTab + ")")
        .addClass("active-tab");
  
      if (activeTab === "In Progress (100)") { 
        if ($cusDetailsContainer.hasClass("none")) {
          $cusDetailsContainer.removeClass("none");
          $accDetailsContainer.addClass("none");
          $accDetailsContainer.removeClass("flex");
          $transHistContainer.addClass("none");
          $pag.removeClass('none');
        }
      } else if (activeTab === "Overdue(100)") {
        if ($transHistContainer.hasClass("none")) {
          $accDetailsContainer.addClass("none");
          $cusDetailsContainer.addClass("none");
          $cusDetailsContainer.removeClass("flex");
          $accDetailsContainer.removeClass("flex");
          $transHistContainer.removeClass("none");
          $pag.removeClass('none');
        } 
      } else if (activeTab === "Completed(100)") {
        if ($accDetailsContainer.hasClass("none")) {
          $accDetailsContainer.removeClass("none");
          $cusDetailsContainer.addClass("none");
          $cusDetailsContainer.removeClass("flex");
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