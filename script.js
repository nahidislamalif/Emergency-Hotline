
let count = 0 ;

function heartCount (id){

}


// heart reuseable 

function heartTotal(id) {
     document.getElementById(id).addEventListener('click',function(){
        document.getElementById(id).style.color = 'red'
        const currentHeart = document.getElementById("heart-count")
        let currentCount = parseInt(currentHeart.innerText);
         currentCount++ ;
         currentHeart.innerText = currentCount;

})
}
heartTotal("heart-click")
heartTotal("heart-click1")
heartTotal("heart-click2")
heartTotal("heart-click3")
heartTotal("heart-click4")
heartTotal("heart-click5")
heartTotal("heart-click6")
heartTotal("heart-click7")
heartTotal("heart-click8")


// copy button reuseable


function copyElement(id,number1){
    document.getElementById(id).addEventListener('click',function(){
    const countCopy = document.getElementById("copy-count");
     let currentCount = parseInt(countCopy.innerText);
     currentCount++ ;
     countCopy.innerText = currentCount;
     const number = document.getElementById(number1).innerText
        navigator.clipboard.writeText(number).then(() => {
            alert("Copied " + number)

    })
})
}
copyElement("copy-btn", "emergency-number")
copyElement("copy-btn1", "emergency-number1")
copyElement("copy-btn2", "emergency-number2")
copyElement("copy-btn3", "emergency-number3")
copyElement("copy-btn4", "emergency-number4")
copyElement("copy-btn5", "emergency-number5")
copyElement("copy-btn6", "emergency-number6")
copyElement("copy-btn7", "emergency-number7")
copyElement("copy-btn8", "emergency-number8")



// Coin reuseable

function coinRemain (id,emergency,number1){
    document.getElementById(id).addEventListener('click',function(){
        const remainingCoin = document.getElementById("coin-count")

    if (remainingCoin.innerText < 20 ){
        alert("You don't have enough Coin")
        return ;
    }
    // alert("Calling to the police")

    let currentCoin = parseInt(remainingCoin.innerText)
    currentCoin-= 20 ;

    remainingCoin.innerText = currentCoin ;

    const title = document.getElementById(emergency).innerText
    const number= document.getElementById(number1).innerText

    alert("📞 Calling" +" " + title +" "+ number)

    })
}
coinRemain("call-btn","emergency-title", "emergency-number")
coinRemain("call-btn1", "emergency-title1", "emergency-number1")
coinRemain("call-btn2" , "emergency-title2", "emergency-number2")
coinRemain("call-btn3", "emergency-title3", "emergency-number3")
coinRemain("call-btn4", "emergency-title4", "emergency-number4")
coinRemain("call-btn5" ,"emergency-title5", "emergency-number5")
coinRemain("call-btn6" ,"emergency-title6", "emergency-number6")
coinRemain("call-btn7" ,"emergency-title7", "emergency-number7")
coinRemain("call-btn8" ,"emergency-title8", "emergency-number8")

