const score = [
    prompt("점수입력1"),
    prompt("점수입력2"),
    prompt("점수입력3")

]

const browser = "Edge";
if(browser === "Edge") {
    console.log('Edgd using')
} else if(['Chrome', 'Firefox'].includes(browser)) {
    console.log('using another');
}
