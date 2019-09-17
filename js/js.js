window.onload = function (){

    var Num = this.document.getElementsByClassName("num");
    var Qr =document.getElementById("qr");

    Qr.onclick =function (){

        food = Number(Num[0].value) + Number(Num[1].value) + Number(Num[2].value);
        
        alert(food * 30);
    }

        
}
