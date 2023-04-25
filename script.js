const PI =3.14;
let areaCircle = (radius) => {
    let area= PI* radius * radius;
    var eleResult = document.getElementById('result');
    eleResult.innerHTML = "dien tich hinh tron co ban kinh " + radius + " la " +area;
}
function showAlert(rs){
    alert(rs);
}
let add = (a,b) => {
    var total = a+b;
    var elementResult = document.getElementById('result');
    elementResult.innerHTML = a + "+" + b + "=" + total;
}

/*function add(a,b){
    return a+b;
} */
