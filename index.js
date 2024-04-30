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