let wrap = document.getElementById('wrap');
let outer = document.getElementById('outer');
let inner = document.getElementById('inner');

wrap.addEventListener('click', e=> {
    console.log("wrap Event");
});

outer.addEventListener('click', e=> {
    console.log("outer Event");
});

inner.addEventListener('click', e=> {
    console.log("inner Event");
});