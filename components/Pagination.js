const pagTemplate = document.createElement("template");

pagTemplate.innerHTML = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>

<div class="pagination">
<a class="prev" href="#"><img src="../../../assets//images/left.png" alt="icon">Previous</a>
<!-- Page numbers will be added here dynamically -->
<div class="numbers-arr">
    <div id="dots"></div>
    <div id="right-arr"></div>
</div>
<a class="next" href="#">Next <img src="../../../assets/images/right.png" alt="icon"></a>
</div>
`;

class Pagination extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(pagTemplate.content);

    
    $(document).ready(function () {
        const totalPages = 10; 
        let currentPage = 1;
        let leftArr = [1, 2, 3];
        let rightArr = [totalPages - 2, totalPages - 1, totalPages];
      
        
        function updatePagination() {
          $(".pagination .page").remove(); 
      
          if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
              $(".pagination .next").before('<a class="page" href="#">' + i + "</a>");
            }
          } else {
            leftArr.forEach(function (i) {
              $("#dots").before('<a class="page" href="#">' + i + '</a>');
            });
      
              $("#dots").text('...');
      
            rightArr.forEach(function (i) {
              $("#right-arr").before('<a class="page" href="#">' + i + '</a>');
            });
          }
      
          $(".pagination .page").each(function () {
            if (parseInt($(this).text()) === currentPage) {
              $(this).addClass("active");
            } else {
              $(this).removeClass("active");
            }
          });
        }
      
        updatePagination();
      
        $(".pagination .page").on("click", function (e) {
          e.preventDefault();
          const page = parseInt($(this).text());
          if (!isNaN(page) && page !== currentPage) {
            currentPage = page;
            updatePagination();
          }
        });
      
      
        $(".pagination .prev").on("click", function (e) {
          e.preventDefault();
          if (currentPage > 1) {
              let newPage = currentPage - 1;
            currentPage = newPage;
            if (leftArr[2] > 3 && currentPage < totalPages - 2) {
              if (currentPage <= totalPages - 5 || currentPage > 3) {
                leftArr.pop(leftArr.length);
                leftArr.unshift(newPage - 2);
                //   console.log(leftArray);
              }
            }
            if (currentPage > 3 && currentPage <= totalPages - 3){
              leftArr.shift(2);
              leftArr.push(currentPage - 2);
              leftArr.shift(0);
              leftArr.push(currentPage - 1);
              leftArr.shift(1);
              leftArr.push(currentPage);
            }
            updatePagination();
          }
        });
      
      
        $(".pagination .next").on("click", function (e) {
          e.preventDefault();
          if (currentPage < totalPages) {
            currentPage++;
          //   console.log(leftArr);
            if (currentPage >= 3 && currentPage < totalPages - 3) {
              leftArr.shift(0);
              leftArr.push(currentPage + 1);
              // console.log(leftArr);
            } else {
              leftArr;
              // console.log(leftArray);
            }
            updatePagination();
          }
        });
      });
    }      
}

customElements.define("my-pag", Pagination);
