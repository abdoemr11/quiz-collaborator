document.querySelector(".show-question").addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".all-questions").style.display= "grid";
    document.querySelector(".new-question").style.display= "none";
    makeRequest();
});
/*
* show add question tab
* */
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

//retrive all questions
let request = new XMLHttpRequest();

function makeRequest() {
    request.onreadystatechange = alertContents;
    request.open("GET", "retriveAllAnswer.php");
    request.send();
}
function alertContents(){
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let response = (JSON.parse(request.responseText));
            //
            console.log(drawQuestion(response[0]));
            document.querySelector(".all-questions").replaceChildren();
            for(let quest of response)
                document.querySelector(".all-questions").appendChild(drawQuestion(quest));
        } else {
            alert('There was a problem with the request.');
        }
    }

}
/*
*
* */
function drawQuestion(quest){
    let questionDiv = document.createElement("div");
    let questionHeaderH = document.createElement("h2");
    let questionTextP = document.createElement("p");
    //fill question elements
    questionHeaderH.appendChild(document.createTextNode("Question "+ quest["id"]));
    questionTextP.appendChild(document.createTextNode(quest["text"]));
    questionDiv.appendChild(questionHeaderH);
    questionDiv.appendChild(questionTextP);
    questionDiv.appendChild(document.createTextNode("by  "));
    questionDiv.appendChild(document.createElement("b").appendChild(document.createTextNode(quest["owner"])));
    for(let [index, ans] of Object.entries(quest["answers"])) {
        let answerDiv = document.createElement("div");
        let answerHeader = document.createElement("h3");
        let answerP = document.createElement("p");
        let answerImg = document.createElement("img");
        //fill values
        answerHeader.appendChild(document.createTextNode("Answer"+ index+1));
        answerP.appendChild(document.createTextNode(ans["text"]));
        answerImg.setAttribute("src", ans["image"]) ;
        //add children
        answerDiv.appendChild(answerHeader);
        answerDiv.appendChild(answerP);
        answerDiv.appendChild(answerImg);
        questionDiv.appendChild(answerDiv);
    }
    return questionDiv;
}
function drawAddAnswer()
{
    // <label htmlFor="answer-text">Enter Your Answer</label>
    // <input type="text" id="answer-text">
    //     <button> Post New Answer</button>
}
