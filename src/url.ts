import url from 'url';
let adrr="https://www.youtube.com/watch?v=MY2Vxtfn5Tw";

let q=url.parse(adrr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.query);
console.log(q.search);
console.log(q.path);