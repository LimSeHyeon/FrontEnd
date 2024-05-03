class CustomError extends Error {
    constructor(message) {
        super (message);
        this.name = this.constructor.name;
    }
}

function checkNumber(num) {
    if(isNaN(num)) {
        const error = new CustomError("Throw Customized Error");
        throw new CustomError("Throw Customized Error!");
    }
    console.log(num);
    return num;
}

try {
    checkNumber("숫자가 아님!");
} catch(err) {
    console.log(err);
}