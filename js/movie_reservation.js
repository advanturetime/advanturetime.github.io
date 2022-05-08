window.onload = function(){
    const seatClear = document.querySelectorAll(".seat:not(.booked,.selection)");
    let seatClearCount = seatClear.length;
    const seatSelection = document.querySelectorAll(".selection");
    let seatSelectionCount = seatSelection.length;
    
    availCount.innerText = seatClearCount;
    selection.innerText = seatSelectionCount;
    totalPrice.innerText = (12000 * seatSelectionCount).toLocaleString('ko-KR');
    
    for(seats of seatClear){
        seats.onclick = function(){
            this.classList.toggle("selection");
    
            seatClearCount = document.querySelectorAll(".seat:not(.booked,.selection)").length;
            seatSelectionCount = document.querySelectorAll(".selection").length;
            
            availCount.innerText = seatClearCount;
            selection.innerText = seatSelectionCount;
            totalPrice.innerText = (12000 * seatSelectionCount).toLocaleString('ko-KR');
        }
    }
}