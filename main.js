document.querySelector(".show-question").addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".all-questions").style.display= "grid";
    document.querySelector(".new-question").style.display= "none";
});
document.querySelector(".add-question").addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".all-questions").style.display= "none";
    document.querySelector(".new-question").style.display= "grid";
});