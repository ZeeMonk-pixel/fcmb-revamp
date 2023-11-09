$(document).ready(function () {
  const accDetails = [
    {
      field: "Cleared Balance:",
      details: "N10,000",
    },
    {
      field: "Uncleared Balance:",
      details: "N10,000",
    },
    {
      field: "Resereved Balance:",
      details: "N10,000",
    },
    {
      field: "Available Balance:",
      details: "N10,000",
    },
    {
      field: "Credit Transactions:",
      details: "N10,000",
    },
    {
      field: "Credit Transactions:",
      details: "N10,000",
    },
  ];
  const $container = $("#account-info-content");

  $.each(accDetails, function (index, item) {
    const $itemDiv = $("<div>").addClass("acc-item");
    const $accField = $("<h4>").text(item.field);
    const $detailsField = $("<p>").text(item.details);

    $itemDiv.append($accField, $detailsField);
    $container.append($itemDiv);
  });
});

$(document).ready(function () {
  const infoDetails = [
    {
      field: "Customer Name:",
      details: "Chukwuka Chiemelie Esther",
    },
    {
      field: "Account Number:",
      details: "908906869",
    },
    {
      field: "Product Name:",
      details: "Current Account",
    },
    {
      field: "Product Code:",
      details: "rt7890kli",
    },
    {
      field: "Currency:",
      details: "NGN",
    },
    {
      field: "BVN Watchlist:",
      details: "No",
    },
  ];
  const $container = $("#info-pod-content");

  $.each(infoDetails, function (index, item) {
    const $itemDiv = $("<div>").addClass("acc-item");
    const $infoField = $("<h4>").text(item.field);
    const $detailsField = $("<p>").text(item.details);

    $itemDiv.append($infoField, $detailsField);
    $container.append($itemDiv);
  });
});

$(document).ready(function () {
  const accountTabs = [
    "Customer Details",
    "Account Details",
    "Transaction History",
    "Other Accounts",
    "Loan Accounts",
  ];

  const $container = $("#acc-tabs");
  var activeTab = accountTabs[0];
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

$(document).ready(function () {
  const opsArr = [
    "Export as Excel",
    "Export as PDF",
    "Export as MT9 40",
    "Export as CAP Excel",
  ];
  const $selectDiv = $("#export-div");
  const $cusDetailsContainer = $("#export-opts");
  
  $.each(opsArr, function (index, item) {
    const $eachItem = $("<p>").text(item);
    $cusDetailsContainer.append($eachItem);
    $eachItem.on("click", function () {
      $cusDetailsContainer.addClass("none");
    });
  });
  
  $selectDiv.on("click", function () {
    if ($cusDetailsContainer.hasClass("none")) {
      $cusDetailsContainer.removeClass("none");
    } else {
      $cusDetailsContainer.addClass("none");
    }
  });
  
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

