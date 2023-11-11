

$(document).ready(function () {
  const accountTabs = [
    "Customer Details",
    "Account Details",
    "Transaction History",
    "Other Accounts",
    "Loan Accounts",
  ];

  const $container = $("#acc-tabs");
  var activeTab = "Customer Details";
  const $cusDetailsContainer = $("#customer-details");
  const $accDetailsContainer = $("#account-details");
  const $transHistContainer = $("#trans-history");
  const $loanAccContainer = $("#loan-accounts");
  const $otherAccContainer = $("#other-accounts");
  const $pag = $(".pagination");
  $cusDetailsContainer.removeClass("none");
  $cusDetailsContainer.addClass("flex");

 

  function updateTabSelection(selectedTab) {
    activeTab = selectedTab;
    $container.find(".acc-tab-item").removeClass("active-tab");
    $container
      .find(".acc-tab-item:contains(" + activeTab + ")")
      .addClass("active-tab");

    if (activeTab === "Customer Details") { 
      if ($cusDetailsContainer.hasClass("none")) {
        $cusDetailsContainer.removeClass("none");
        $cusDetailsContainer.addClass("flex");
        $accDetailsContainer.addClass("none");
        $accDetailsContainer.removeClass("flex");
        $loanAccContainer.addClass("none");
        $otherAccContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.addClass('none');
      }
    } else if (activeTab === "Transaction History") {
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
    } else if (activeTab === "Account Details") {
      if ($accDetailsContainer.hasClass("none")) {
        $accDetailsContainer.removeClass("none");
        $cusDetailsContainer.addClass("none");
        $cusDetailsContainer.removeClass("flex");
        $accDetailsContainer.addClass("flex");
        $loanAccContainer.addClass("none");
        $otherAccContainer.addClass("none");
        $transHistContainer.addClass("none");
        $pag.addClass('none');
      } 
    } else if (activeTab === "Other Accounts") {
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
    } else if (activeTab === "Loan Accounts") {
      if ($loanAccContainer.hasClass("none")) {
        $accDetailsContainer.addClass("none");
        $cusDetailsContainer.addClass("none");
        $cusDetailsContainer.removeClass("flex");
        $accDetailsContainer.removeClass("flex");
        $loanAccContainer.removeClass("none");
        $otherAccContainer.addClass("none");
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


