function trimText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    } else {
      return text;
    }
}

$(document).ready(function() {
    const opsArr = ["1. Divisions, Regions and zones", "2. Account Officers", "3. Branches and Branch Codes", "4. SBU and SBU Codes", "5. Products and Product Code", "6. Rates"];
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