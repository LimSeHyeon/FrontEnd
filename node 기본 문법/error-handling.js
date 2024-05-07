let jsonFile = '{"MyBad")';
try {
    console.log('code1');
    throw new SyntaxError("에러 발생");
    // const value = JSON.parse(jsonFile);
    // console.log(value);
    console.log('code1 종료');
} catch(err) {
    if (err instanceof SyntaxError) {
        //syntax Error Handling
    }
    else if ( err instanceof RangeError ) {
        // Range Error Handling...
    }
    console.log("Error 처리");
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    //console.log(err);
} finally {
    console.log('finally');
}