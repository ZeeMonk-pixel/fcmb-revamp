
$(document).ready(function() {
    const opsArr = ["Finacle 10", "Work Flow", "LTP Eligibility"];
    const $selectDiv = $("#select");
    const $optionDiv = $("#options");
  
    $.each(opsArr, function(index, item) {
      const $eachItem = $("<p>").text(item);
      $optionDiv.append($eachItem);
      $eachItem.on("click", function() {
        $selectDiv.text(item);
        $optionDiv.addClass("none");
      });
    });
  
    $selectDiv.on("click", function() {
      if ($optionDiv.hasClass("none")) {
        $optionDiv.removeClass("none");
      } else {
        $optionDiv.addClass("none");
      }
    });
});

const mgtReport = [
    {
      img1: '../../../assets/images/file.png',
      text: 'Outward Clearing Report',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      img1: '../../../assets/images/file.png',
      text: 'Swift Messages',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      img1: '../../../assets/images/file.png',
      text: 'Balance Sheet Deposit',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      img1: '../../../assets/images/file.png',
      text: 'Smart Card Validation',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      img1: '../../../assets/images/file.png',
      text: 'Staff Promo',
      img2: '../../../assets/images/arrow-right.png'
    },
];

$(document).ready(function() {
    const $container = $('#mgt-body');
  
    $.each(mgtReport, function(index, item) {
      const $itemDiv = $('<div>').addClass('mgt-item');
      const $textDiv = $('<div>').addClass('mgt-text');
      const $arrowDiv = $('<div>').addClass('arrow-div');
    
      const $img1 = $('<img>').attr('src', item.img1).attr('alt', 'icon');
      const $img2 = $('<img>').attr('src', item.img2).attr('alt', 'icon');
    
      const $text = $('<p>').text(item.text);
    
      $textDiv.append($img1, $text);
      $arrowDiv.append($img2);
      $itemDiv.append($textDiv, $arrowDiv);
      $container.append($itemDiv);
    });
});

const quickLinks = [
    {
      text: 'Finbank Statement',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Loan Self Service',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Loan Mastercard Transactions',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Draft Walk-in Charge Calculator',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Custom Duty Charge Calculator',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Custome Duty Walk-in Charge Calulator',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Memo Lift',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Risk Factor Assesment',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Freeze Account',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'Unfreeze Account',
      img2: '../../../assets/images/arrow-right.png'
    },
    {
      text: 'New Reports',
      img2: '../../../assets/images/arrow-right.png'
    },
];

$(document).ready(function() {
    const $container = $('#quick-link');
  
    $.each(quickLinks, function(index, item) {
      const $itemDiv = $('<div>').addClass('each-quick_link');
    
      const $img2 = $('<img>').attr('src', item.img2).attr('alt', 'icon');
      const $text = $('<p>').text(item.text);
    
      $itemDiv.append($text, $img2);
      $container.append($itemDiv);
    });
});

$(document).ready(function() {
    const tableHead = ["S/N", "Customer ID", "Customer Name", "Date", ""];
    const tableBody = [
      {
        sn: "1",
        customerId: "2REYDRYJ",
        customerName: "Chukwuka Chiemelie Esther",
        Date: "24 May, 2020<br> 23:18:33",
        img: "../../../assets/images/chevron-right.png",
      },
      {
        sn: "2",
        customerId: "2REYDRYJ",
        customerName: "Chukwuka Chiemelie Esther",
        Date: "24 May, 2020<br> 23:18:33",
        img: "../../../assets/images/chevron-right.png",
      },
      {
        sn: "3",
        customerId: "2REYDRYJ",
        customerName: "Chukwuka Chiemelie Esther",
        Date: "24 May, 2020<br> 23:18:33",
        img: "../../../assets/images/chevron-right.png",
      },
      {
        sn: "4",
        customerId: "2REYDRYJ",
        customerName: "Chukwuka Chiemelie Esther",
        Date: "24 May, 2020<br> 23:18:33",
        img: "../../../assets/images/chevron-right.png",
      },
    ];
  
    const $table = $('#dataTable');
    const $thead = $table.find('thead tr');
    const $tbody = $table.find('tbody');
  
    // Create table header
    tableHead.forEach(function(item) {
      $thead.append('<th>' + item + '</th>');
    });
  
    // Create table body
    tableBody.forEach(function(item) {
      const $row = $('<tr>');
      $row.append('<td class="bold-text">' + item.sn + '</td>');
      $row.append('<td class="bold-text">' + item.customerId + '</td>');
      $row.append('<td class="bold-text">' + item.customerName + '</td>');
      const dateParts = item.Date.split('<br>');
      $row.append('<td><span class="first-line">' + dateParts[0] + '</span><br><span class="second-line">' + dateParts[1] + '</span></td>');
      $row.append('<td><img src="' + item.img + '"></td>');
      $tbody.append($row);
    });
  });