function trimText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    } else {
      return text;
    }
}

$(document).ready(function() {
    const opsArr = ["1. Activities", "2. Branch Operation Report", "3. Branch Services", "4. CEO Reports", "5. Channel Support Report", "6. Commercial Banking", "7. Compliance Report", "8. Consolidated Report", "9. Consumer Group", "10. Consumer Banking Report", "11. Coperate Banking Report"];
    const $selectDiv = $("#select");
    const $selectDivP = $("#select p");
    const $optionDiv = $("#options");
  
    $.each(opsArr, function(index, item) {
      const $eachItem = $("<p>").text(item);
      $optionDiv.append($eachItem);
      $eachItem.on("click", function() {
        $selectDivP.text(trimText(item, 15));
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

$(document).ready(function() {
    const opsArr = ["1. Activities", "2. Branch Operation Report", "3. Branch Services", "4. CEO Reports", "5. Channel Support Report", "6. Commercial Banking", "7. Compliance Report", "8. Consolidated Report", "9. Consumer Group", "10. Consumer Banking Report", "11. Coperate Banking Report"];
    const $selectDiv = $("#select-report");
    const $selectDivP = $("#select-report p");
    const $optionDiv = $("#options-report");
  
    $.each(opsArr, function(index, item) {
      const $eachItem = $("<p>").text(item);
      $optionDiv.append($eachItem);
      $eachItem.on("click", function() {
        $selectDivP.text(trimText(item, 15));
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