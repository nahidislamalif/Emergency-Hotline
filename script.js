
let count = 0 ;



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


// for history clear

document.getElementById("clear-button").addEventListener('click',function(){
    const contetn = document.getElementById("clear-history")
    contetn.innerHTML= " " ;
})

// for adding call history 
 function addCallHistory(id, newCall, number) {
    document.getElementById(id).addEventListener("click", function () {
      const callNew = document.getElementById(newCall).innerText;
      const newNumber = document.getElementById(number).innerText; 
      const time = new Date().toLocaleTimeString(); 

      const container = document.getElementById("clear-history");

      const div = document.createElement("div");
      div.className =
        "flex justify-between items-center mt-5 p-5 rounded-lg bg-[#FAFAFA]";
      div.innerHTML = `
        <div>
          <p class="text-[18px] font-bold">${callNew}</p>
          <p>${newNumber}</p>
        </div>
        <div class="text-[18px]">${time}</div>
      `;

      container.appendChild(div);
    });
  }
  addCallHistory("call-btn", "emergency-title", "emergency-number");
  addCallHistory("call-btn1", "emergency-title1", "emergency-number1");
  addCallHistory("call-btn2", "emergency-title2", "emergency-number2");
  addCallHistory("call-btn3", "emergency-title3", "emergency-number3");
  addCallHistory("call-btn4", "emergency-title4", "emergency-number4");
  addCallHistory("call-btn5", "emergency-title5", "emergency-number5");
  addCallHistory("call-btn6", "emergency-title6", "emergency-number6");
  addCallHistory("call-btn7", "emergency-title7", "emergency-number7");
  addCallHistory("call-btn8", "emergency-title8", "emergency-number8");

