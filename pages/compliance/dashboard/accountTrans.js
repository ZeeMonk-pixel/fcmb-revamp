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
  const cusDetails = [
    {
      text: "General Details",
    },
    {
      text: "Account Information",
    },
  ];
  const accDetails = [
    {
      text: "General Information",
    },
    {
      text: "Advanced Information",
    },
    {
      text: "Mandate Information",
    },
    {
      text: "Account Maintenance  Information",
    },
  ];

  const $container = $("#acc-tabs");
  var activeTab = accountTabs[0];
  const $cusDetailsContainer = $("#customer-details");

  function updateCustomerDetails() {
    $cusDetailsContainer.empty();
    $.each(cusDetails, function (index, item) {
      const $itemDiv = $("<div>").addClass("customer-item");
      const $eachTabImg = $("<img>").attr("src", "../../../assets/images/chevron-down.png").attr("alt", "icon");
      const $eachTab = $("<h4>").text(item.text);

      $itemDiv.append($eachTabImg, $eachTab);
      $cusDetailsContainer.append($itemDiv);
    });
  }
  function updateAccountDetails() {
    $cusDetailsContainer.empty();
    $.each(accDetails, function (index, item) {
      const $itemDiv = $("<div>").addClass("acc-details-item");
      const $eachTabImg = $("<img>").attr("src", "../../../assets/images/chevron-down.png").attr("alt", "icon");
      const $eachTab = $("<h4>").text(item.text);

      $itemDiv.append($eachTabImg, $eachTab);
      $cusDetailsContainer.append($itemDiv);
    });
  }
  function updateLoanAccounts() {
    $cusDetailsContainer.empty();
    const tableHead = [
      "Loan Type",
      "Account Number",
      "Currency",
      "Principal",
      "Rate",
      "Start Date",
      "Tenor",
      "Amount Left",
      "Next Payment Date",
    ];
    const tableBody = [
      {
        loanType: "12VGRY",
        accountNo: "12748hfdjg",
        currency: "NGN",
        principal: "300000",
        rate: "300000",
        startDate: "12th July, 2023",
        tenor: "48 Months",
        amtLeft: "N120,000,000",
        nextPayment: "12th July, 2023",
      },
      {
        loanType: "12VGRY",
        accountNo: "12748hfdjg",
        currency: "NGN",
        principal: "300000",
        rate: "300000",
        startDate: "12th July, 2023",
        tenor: "48 Months",
        amtLeft: "N120,000,000",
        nextPayment: "12th July, 2023",
      },
      {
        loanType: "12VGRY",
        accountNo: "12748hfdjg",
        currency: "NGN",
        principal: "300000",
        rate: "300000",
        startDate: "12th July, 2023",
        tenor: "48 Months",
        amtLeft: "N120,000,000",
        nextPayment: "12th July, 2023",
      },
      {
        loanType: "12VGRY",
        accountNo: "12748hfdjg",
        currency: "NGN",
        principal: "300000",
        rate: "300000",
        startDate: "12th July, 2023",
        tenor: "48 Months",
        amtLeft: "N120,000,000",
        nextPayment: "12th July, 2023",
      },
      {
        loanType: "12VGRY",
        accountNo: "12748hfdjg",
        currency: "NGN",
        principal: "300000",
        rate: "300000",
        startDate: "12th July, 2023",
        tenor: "48 Months",
        amtLeft: "N120,000,000",
        nextPayment: "12th July, 2023",
      },
    ];

    const $table = $("<table>").attr("id", "dataTable");
    const $thead = $("<thead>").appendTo($table);
    const $tbody = $("<tbody>").appendTo($table);

    // Create table header
    const $headerRow = $("<tr>").appendTo($thead);
    tableHead.forEach(function (item) {
      $headerRow.append("<th>" + item + "</th>");
    });

    // Create table body
    tableBody.forEach(function (item) {
      const $row = $("<tr>");
      $row.append('<td class="faint-text">' + item.loanType + "</td>");
      $row.append('<td class="faint-text copy-div">' + item.accountNo + '<span class="copy-img"><img src="../../../assets/images/copy.png" alt="icon" /></span>' + "</td>");
      $row.append('<td class="faint-text">' + item.currency + "</td>");
      $row.append('<td class="faint-text">' + item.principal + "</td>");
      $row.append('<td class="faint-text">' + item.rate + "</td>");
      $row.append('<td class="faint-text">' + item.startDate + "</td>");
      $row.append('<td class="faint-text">' + item.tenor + "</td>");
      $row.append('<td class="faint-text">' + item.amtLeft + "</td>");
      $row.append('<td class="faint-text">' + item.nextPayment + "</td>");
      $tbody.append($row);
    });

    $cusDetailsContainer.append($table);
  }
  function updateOtherAccounts() {
    $cusDetailsContainer.empty();
    const tableHead = [
      "Account",
      "Account Number",
      "Account Type",
      "Currency",
      "Cleared",
      "Uncleared",
      "Available",
    ];
    const tableBody = [
      {
        account: "12748hfdjg",
        accountNo: "12VGRY",
        accountType: "Flax Account",
        currency: "NGN",
        cleared: "N120,000",
        uncleared: "N120,000",
        available: "N120,000,000",
      },
      {
        account: "12748hfdjg",
        accountNo: "12VGRY",
        accountType: "Flax Account",
        currency: "NGN",
        cleared: "N120,000",
        uncleared: "N120,000",
        available: "N120,000,000",
      },
      {
        account: "12748hfdjg",
        accountNo: "12VGRY",
        accountType: "Flax Account",
        currency: "NGN",
        cleared: "N120,000",
        uncleared: "N120,000",
        available: "N120,000,000",
      },
      {
        account: "12748hfdjg",
        accountNo: "12VGRY",
        accountType: "Flax Account",
        currency: "NGN",
        cleared: "N120,000",
        uncleared: "N120,000",
        available: "N120,000,000",
      },
      {
        account: "12748hfdjg",
        accountNo: "12VGRY",
        accountType: "Flax Account",
        currency: "NGN",
        cleared: "N120,000",
        uncleared: "N120,000",
        available: "N120,000,000",
      },
    ];

    const $table = $("<table>").attr("id", "dataTable");
    const $thead = $("<thead>").appendTo($table);
    const $tbody = $("<tbody>").appendTo($table);

    // Create table header
    const $headerRow = $("<tr>").appendTo($thead);
    tableHead.forEach(function (item) {
      $headerRow.append("<th>" + item + "</th>");
    });

    // Create table body
    tableBody.forEach(function (item) {
      const $row = $("<tr>");
      $row.append('<td class="faint-text">' + item.account + "</td>");
      $row.append('<td class="faint-text">' + item.accountNo + "</td>");
      $row.append('<td class="faint-text">' + item.accountType + "</td>");
      $row.append('<td class="faint-text">' + item.currency + "</td>");
      $row.append('<td class="faint-text">' + item.cleared + "</td>");
      $row.append('<td class="faint-text">' + item.uncleared + "</td>");
      $row.append('<td class="faint-text">' + item.available + "</td>");
      $tbody.append($row);
    });

    $cusDetailsContainer.append($table);
  }
  function updateTransHist() {
    $cusDetailsContainer.empty();
    const tableHead = [
      "Transaction Date",
      "Reference",
      "Description",
      "Value",
      "Deposit",
      "Withdrawal",
      "Balance",
      "",
    ];
    const tableBody = [
      {
        date: "24 May, 2020<br> 23:18:33",
        ref: "12VGRY",
        des: "Description for transaction can be found here",
        value: "24 May, 2020",
        deposit: "N120,000",
        withdraw: "N120,000",
        bal: "N120,000,000",
      },
      {
        date: "24 May, 2020<br> 23:18:33",
        ref: "12VGRY",
        des: "Description for transaction can be found here",
        value: "24 May, 2020",
        deposit: "N120,000",
        withdraw: "N120,000",
        bal: "N120,000,000",
      },
      {
        date: "24 May, 2020<br> 23:18:33",
        ref: "12VGRY",
        des: "Description for transaction can be found here",
        value: "24 May, 2020",
        deposit: "N120,000",
        withdraw: "N120,000",
        bal: "N120,000,000",
      },
      {
        date: "24 May, 2020<br> 23:18:33",
        ref: "12VGRY",
        des: "Description for transaction can be found here",
        value: "24 May, 2020",
        deposit: "N120,000",
        withdraw: "N120,000",
        bal: "N120,000,000",
      },
      {
        date: "24 May, 2020<br> 23:18:33",
        ref: "12VGRY",
        des: "Description for transaction can be found here",
        value: "24 May, 2020",
        deposit: "N120,000",
        withdraw: "N120,000",
        bal: "N120,000,000",
      },
      {
        date: "24 May, 2020<br> 23:18:33",
        ref: "12VGRY",
        des: "Description for transaction can be found here",
        value: "24 May, 2020",
        deposit: "N120,000",
        withdraw: "N120,000",
        bal: "N120,000,000",
      },
    ];

    const $table = $("<table>").attr("id", "dataTable");
    const $thead = $("<thead>").appendTo($table);
    const $tbody = $("<tbody>").appendTo($table);

    // Create table header
    const $headerRow = $("<tr>").appendTo($thead);
    tableHead.forEach(function (item) {
      $headerRow.append("<th>" + item + "</th>");
    });

    // Create table body
    tableBody.forEach(function (item) {
      const $row = $("<tr>");
      const dateParts = item.date.split("<br>");
      $row.append(
        '<td><span class="date-first-line">' +
          dateParts[0] +
          '</span><br><span class="date-second-line">' +
          dateParts[1] +
          "</span></td>"
      );
      $row.append('<td class="faint-text">' + item.ref + "</td>");
      $row.append('<td class="faint-text">' + item.des + "</td>");
      $row.append('<td class="faint-text">' + item.value + "</td>");
      $row.append('<td class="faint-text">' + item.deposit + "</td>");
      $row.append('<td class="faint-text">' + item.withdraw + "</td>");
      $row.append('<td class="faint-text">' + item.bal + "</td>");
      $row.append('<td><img src="../../../assets/images/chevron-right.png" alt="icon" /></td>');
      $tbody.append($row);
    });

    $cusDetailsContainer.append($table);
  }

  function updateTabSelection(selectedTab) {
    activeTab = selectedTab;
    $container.find(".acc-tab-item").removeClass("active-tab");
    $container
      .find(".acc-tab-item:contains(" + activeTab + ")")
      .addClass("active-tab");

    if (activeTab === "Customer Details") {
      updateCustomerDetails();
    } else if (activeTab === "Transaction History") {
      updateTransHist();
    } else if (activeTab === "Account Details") {
      updateAccountDetails();
    } else if (activeTab === "Other Accounts"){
        updateOtherAccounts();
    } else if(activeTab === "Loan Accounts") {
        updateLoanAccounts();
    }else {
      $cusDetailsContainer.empty(); // Clear the content for other tabs
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

  updateCustomerDetails(); // Load initial content for the "Customer Details" tab
});

$(document).ready(function () {
  const opsArr = [
    "Export as Excel",
    "Export as PDF",
    "Export as MT9 40",
    "Export as CAP Excel",
  ];
  const $selectDiv = $("#export-div");
  const $optionDiv = $("#export-opts");

  $.each(opsArr, function (index, item) {
    const $eachItem = $("<p>").text(item);
    $optionDiv.append($eachItem);
    $eachItem.on("click", function () {
      $optionDiv.addClass("none");
    });
  });

  $selectDiv.on("click", function () {
    if ($optionDiv.hasClass("none")) {
      $optionDiv.removeClass("none");
    } else {
      $optionDiv.addClass("none");
    }
  });
});
