
const selectDiv = document.getElementById("select");
const optionDiv = document.getElementById("options");

const opsArr = ["Finacle 10", "Work Flow", "LTP Eligibility"];

opsArr.forEach((item) => {
    const eachItem = document.createElement("p"); 
    eachItem.textContent = item; 
    optionDiv.appendChild(eachItem); 
    eachItem.addEventListener('click', function(){
        selectDiv.textContent = eachItem.textContent;
        optionDiv.classList.add("none");
    })
});

selectDiv.addEventListener('click', function() {
    currentClass = optionDiv.classList;
    if(currentClass.contains("none")){
        optionDiv.classList.remove("none");
    } else {
        optionDiv.classList.add("none");
    }
});
