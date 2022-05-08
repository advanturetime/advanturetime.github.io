window.onload = function(){
    let cards = document.querySelectorAll(".card");
    let cardBack = document.querySelectorAll(".card_back");

    function init(){
        const backArray = [
            "/image/card_game/card_back1.jpg",
            "/image/card_game/card_back1.jpg",
            "/image/card_game/card_back2.jpg",
            "/image/card_game/card_back2.jpg",
            "/image/card_game/card_back3.jpg",
            "/image/card_game/card_back3.jpg",
            "/image/card_game/card_back4.jpg",
            "/image/card_game/card_back4.jpg",
            "/image/card_game/card_back5.jpg",
            "/image/card_game/card_back5.jpg"
        ]
        let backArrayLength = backArray.length;
        let clickFlag = false;
        let clickNum = 0;
        let backImg = [];
        let cardArray = [];
        let successCard = [];
    
        //타이머
        let minutes = 0;
        let seconds = 0;
        let tenMillis = 0;
        let timeInterval;
        const appendTens = document.getElementById("tenMillis");
        const appendSeconds = document.getElementById("seconds");
        const appendMinutes = document.getElementById("minutes");
        function operateTimer(){
    
            tenMillis++;
            appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis;
    
            if(tenMillis > 99){
                seconds++;
                appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
                tenMillis = 0;
                appendTens.textContent = "00";
            }
    
            if(seconds > 59){
                minutes++;
                appendMinutes.textContent = '0' + minutes;
                seconds = 0;
                appendSeconds.textContent = "00";
            }
        }
    
        for(let i = 0; i < backArrayLength; i++) {
            backImg = backImg.concat(
                backArray.splice(Math.floor(Math.random() * backArray.length), 1)
            );
        }
    
        cardBack.forEach((back, i) => {
            back.style.backgroundImage = "url('"+backImg[i]+"')";
        });
    
        cards.forEach((setCard, i) => {

            setTimeout(() => {
                setCard.classList.add("flipped");
            }, 1000 + 100 * i);
        
            setTimeout(() => {
                setCard.classList.remove("flipped");
            }, 5000);
        
            setTimeout(() => {clickFlag = true;}, 5500)
        
            setCard.addEventListener("click", (e) => {
    
                if(clickFlag && !successCard.includes(setCard)){
                    
                    setCard.classList.toggle("flipped");
                    cardArray.push(setCard);
    
                    if(clickNum === 0) {timeInterval = setInterval(() => {operateTimer();}, 10)}
                    ++clickNum;
                    
                    if(cardArray.length == 2){
                        
                        let card_0 = cardArray[0];
                        let card_1 = cardArray[1];
                        let cardA = cardArray[0].querySelector(".card_back").style.backgroundImage;
                        let cardB = cardArray[1].querySelector(".card_back").style.backgroundImage;
    
                        if(cardA == cardB && card_0 !== card_1){
        
                            cardArray[0].classList.add("shake");
                            cardArray[1].classList.add("shake");
                            successCard.push(cardArray[0]);
                            successCard.push(cardArray[1]);
                            cardArray = [];
    
                            if (successCard.length == 10){
                                gameFinish.innerText = `${appendMinutes.textContent} : ${appendSeconds.textContent} : ${appendTens.textContent}`;
                                celebrate.classList.add("show");
                                clearInterval(timeInterval);
    
                                refreshBtn.onclick=() => {
                                    minutes = 0;
                                    seconds = 0;
                                    tenMillis = 0;
                                    appendTens.textContent = '0' + tenMillis;
                                    appendSeconds.textContent = '0' + seconds;
                                    appendMinutes.textContent = '0' + minutes;
                                    celebrate.classList.remove("show");
                                    setTimeout(() => {init();}, 1500);
                                };
                            }
    
                        } else {                    
                            cardArray = [];
                            clickFlag = false;
                            
                            setTimeout(() => {
                                card_0.classList.remove("flipped");
                                card_1.classList.remove("flipped");
                                clickFlag = true;
                            }, 1000);
                        }
                    } 
                }
            });
        });
    }
    init();
}