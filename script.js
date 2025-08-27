
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


// copy button 

document.getElementById("copy-btn").addEventListener('click',function(){

    const countCopy = document.getElementById("copy-count");
     let currentCount = parseInt(countCopy.innerText);
     currentCount++ ;
     countCopy.innerText = currentCount;

})

// Coin reuseable

function coinRemain (id){
    document.getElementById(id).addEventListener('click',function(){
        const remainingCoin = document.getElementById("coin-count")

    if (remainingCoin.innerText < 20 ){
        alert("You don't have enough Coin")
        return ;
    }
    alert("Calling to the police")

    let currentCoin = parseInt(remainingCoin.innerText)
    currentCoin-= 20 ;

    remainingCoin.innerText = currentCoin ;

    })
}
coinRemain("call-btn")
coinRemain("call-btn1")
coinRemain("call-btn2")
coinRemain("call-btn3")
coinRemain("call-btn4")
coinRemain("call-btn5")
coinRemain("call-btn6")
coinRemain("call-btn7")
coinRemain("call-btn8")

