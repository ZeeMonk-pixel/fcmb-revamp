function trimText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    } else {
      return text;
    }
}

$(document).ready(function() {
    const opsArr = ["Finacle 10", "Work Flow", "LTP Eligibility"];
    const $selectDiv = $("#select");
    const $selectDivP = $("#select p");
    const $optionDiv = $("#options");
  
    $.each(opsArr, function(index, item) {
      const $eachItem = $("<p>").text(item);
      $optionDiv.append($eachItem);
      $eachItem.on("click", function() {
        $selectDivP.text(trimText(item, 8));
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


