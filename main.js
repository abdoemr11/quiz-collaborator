document.querySelector(".show-question").addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".all-questions").style.display= "grid";
    document.querySelector(".new-question").style.display= "none";
    makeRequest();
});
document.querySelector(".add-question").addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".all-questions").style.display= "none";
    document.querySelector(".new-question").style.display= "grid";
});


//add new question
const addQuestionForm = document.getElementById("add-new-question");
addQuestionForm.addEventListener('submit', (e) => {
    // on form submission, prevent default
    e.preventDefault();

    // construct a FormData object, which fires the formdata event
    new FormData(addQuestionForm);
});
addQuestionForm.addEventListener('formdata', (e) => {
    console.log('formdata fired');

    // Get the form data from the event object
    let data = e.formData;
    // console.log(data.length);
    for (let data of e.formData.entries()) {
        console.log(data[0] + "   "+ data[1]);
    }
    //submit the data via XHR
    let request = new XMLHttpRequest();
    request.open("POST", "addnewquestion.php");
    request.send(data);
});
let request = new XMLHttpRequest();

//retrive all questions
function makeRequest() {
    request.onreadystatechange = alertContents;
    request.open("GET", "retriveAllAnswer.php");
    request.send();
}
function alertContents(){
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let response = (JSON.parse(request.responseText));
            alert(response[0]);
        } else {
            alert('There was a problem with the request.');
        }
    }

}
