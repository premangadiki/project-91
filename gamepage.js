username1_name=localStorage.getItem("username1");
username2_name=localStorage.getItem("username2");

document.getElementById("player1").innerHTML=username1_name + ":";
document.getElementById("player2").innerHTML=username2_name + ":";

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_ans= parseInt(number1) * parseInt(number2);

    question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'"
    check_button="<br><br> <button onclick='check()' class='btn btn-success'>check</button>"
    row= question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
}