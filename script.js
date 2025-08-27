
let count = 0 ;

function heartCount (id){

}


document.getElementById("heart-click").addEventListener('click',function(){

    document.getElementById("heart-click").style.color = 'red'

    const countHeart = document.getElementById("heart-count");
     let currentCount = parseInt(countHeart.innerText);
     currentCount++ ;
     countHeart.innerText = currentCount;

})

// copy button 

document.getElementById("copy-btn").addEventListener('click',function(){

    const countCopy = document.getElementById("copy-count");
     let currentCount = parseInt(countCopy.innerText);
     currentCount++ ;
     countCopy.innerText = currentCount;

})

// call button 
document.getElementById("call-btn").addEventListener('click',function(e){
    e.preventDefault()
    
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


// Coin count remaing

// document.getElementById("call-btn").addEventListener('click',function(){

//     coinRemain("call-btn")
    
// })

// document.getElementById("call-btn1").addEventListener('click',function(){
    

// })