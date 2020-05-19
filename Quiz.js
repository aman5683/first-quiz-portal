var currque=0;
var score =0;
var totalque=questions.length;

var cont=document.getElementById("quizcontainer");
var ques=document.getElementById("questions");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var next = document.getElementById("nextque");
var result=document.getElementById("result");
var resulttext=document.getElementById("rtext");

function loadque(questionIndex){
	var q=questions[questionIndex];
	ques.textContent=(questionIndex+1)+'. '+q.question;
	opt1.textContent=q.option1;
	opt2.textContent=q.option2;
	opt3.textContent=q.option3;
	opt4.textContent=q.option4;
};
 function loadNextQuestion(){
 	var selectopt= document.querySelector("input[type=radio]:checked");
 	if(!selectopt){
 		alert("Please select your answer!");
 		return;
 	}
 	var ans=selectopt.value;
 	if(questions[currque].answer==ans){
 		score+=10;

 	}
 	selectopt.checked=false;
 	currque+=1;
 	if(currque==totalque-1){
 		next.textContent="finish"
 	}
 	if(currque==totalque)
 	{
 		cont.style.display="none";
 		result.style.display="";
 		document.body.style.backgroundSize="cover";
 		document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')";
 		result.textContent="Your score is "+ score;
 		return;
 	}
 	loadque(currque);
 }
loadque(currque);