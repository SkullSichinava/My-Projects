console.log(true || false)
console.log(false || true)
console.log(true || true)
console.log(false || false)


console.log(true && false)
console.log(false && true)
console.log(true && true)
console.log(false && false)


function compare(){
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const paragraph = document.getElementById("paragraph")

    if(num1 < 18 || num2 < 18){
        paragraph.textContent = " Enter number Min 18"  
    }
    else if(num1 > 18 || num2 > 18){
        console.log("ერთერთი მათგანი არის True")
    }
    else{
        console.log("False")
    }
    if (num1 > 18 && num2 > 18){
        console.log("ორივე მათგანი არის True")
    }
    else{
        console.log("False")
    }
}
let running = true;
let min_num = -10
let max_num = 100
while (running){
    weather = prompt("enter number")
    if(weather >= 30 && weather < 30){
        console.log("გარეთ ცხელა")
        console.log("შეგიძლიათ მიირთვთ ნაყინი")
    }
    else if(isNaN(weather)){
        window.alert("შეიყვანეთ მხოლოდ რიცხვი.")
    }
    else if(weather < min_num || weather > max_num){
        window.alert("გთხოვთ შეიყვანოთ რიცხვი -10დან 100მდე");
    }
    else{
        console.log("გარეთ ცივა")
        console.log("ნაყინის მიღება არ შეიძლება")
        running = false;
    }
}

function weatheroutside(weather){
    if(weather == "მზიანი დღე"){
        console.log("შეგიძლიათ გახვიდეთ გარეთ სათამაშოდ!")
    }
    else if(weather == "წვიმიანი დღე"){
        console.log("თქვენ არ შეგიძლიათ გარეთ გასვლა სათამაშოდ")
    }
}
weatheroutside("მზიანი დღე")
