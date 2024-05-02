function fastFunction(err, data, done) {
    // 1초 걸리는 함수. 2를 곱함
    setTimeout(function () {
        done(undefined, data*2);
    }, 1000)
}

function slowFunction(err, data, done) {
    //3초 걸리는 함수
    setTimeout(function () {
        done(undefined, data+10);
    }, 3000)
}

function runTasks(cb) {
    fastFunction(undefined, 10, (err, data) => {
        if(err) return cb(err);
        console.log("fastFunction 완료", data);

        slowFunction(undefined, data, (err, data) => {
            if(err) return cb(err);
            console.log("slowFunction 완료", data);
        })
    })
}

runTasks(err => {
    console.error(err);
})