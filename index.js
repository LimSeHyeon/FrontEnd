/*
function ask(agree, yes, no) {
    agree() ? yes() : no();
}

ask(
    () => confirm("동의하십니까?"),
    function() { alert("동의하셨습니다.") },
    function() { alert("취소 버튼을 누르셨습니다.") }
);


//아래 둘이 같음
() => {
    return confirm("동의?");
}

() => confirm("동의?");
*/

const age = parseInt(prompt("나이를 입력하여 주세요."));
let message = (age<3) ? "무료입니다":
    (age<10) ? "청소년입니다." :
    (age<100) ? "감사합니다." :
    "나이가 아주 많으시군요"
alert(message);