const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fastFunction(data) {
    await delay(1000);
    const result = data * 2;
    console.log("Fast Function Done", result);
    return result;
}

async function slowFunction(data) {
    await delay(3000);
    const result = data + 10;
    console.log("Slow Function Done", result);
    return result;
}

/*
function runTask() {
    Promise.all(
        [fastFunction(5), slowFunction(10)]
    ).then(([result1, result2]) => {
        console.log('작업종료');
        console.log(result1);
        console.log(result2);
    })
}


function runTask() {
    Promise.race([fastFunction(5), slowFunction(10)]).then(data => {
        console.log('작업완료');
        console.log(data);
    })
}
*/
runTask();