window.onload = function(){
    const slide_array = document.querySelectorAll(".img_slider li");
    let slide_length = slide_array.length - 1;

    let active_i = 0;
    let next_i = active_i + 1;
    let after_next_i = active_i + 2;
    let prev_i = slide_length;
    let before_prev_i = slide_length - 1;

    for(slideImg of slide_array){
        slide_array[active_i].classList.add("active");
        slide_array[next_i].classList.add("next");
        slide_array[after_next_i].classList.add("after_next");
        slide_array[prev_i].classList.add("prev");
        slide_array[before_prev_i].classList.add("before_prev")

        nextBtn.onclick=function(){
            slide_array[active_i].classList.remove("active");
            slide_array[next_i].classList.remove("next");
            slide_array[after_next_i].classList.remove("after_next");
            slide_array[prev_i].classList.remove("prev");
            slide_array[before_prev_i].classList.remove("before_prev");

            active_i = (active_i + 1) > slide_length ? 0 : active_i + 1;
            next_i = (next_i + 1) > slide_length ? 0 : next_i + 1;
            after_next_i = (after_next_i + 1) > slide_length ? 0 : after_next_i + 1;
            prev_i = (prev_i + 1) > slide_length ? 0 : prev_i + 1;
            before_prev_i = (before_prev_i + 1) > slide_length ? 0 : before_prev_i + 1;

            slide_array[active_i].classList.add("active");
            slide_array[next_i].classList.add("next");
            slide_array[after_next_i].classList.add("after_next");
            slide_array[prev_i].classList.add("prev");
            slide_array[before_prev_i].classList.add("before_prev");
        }

        prevBtn.onclick=function(){
            slide_array[active_i].classList.remove("active");
            slide_array[next_i].classList.remove("next");
            slide_array[after_next_i].classList.remove("after_next");
            slide_array[prev_i].classList.remove("prev");
            slide_array[before_prev_i].classList.remove("before_prev");

            active_i = (active_i - 1 < 0) ? slide_length : active_i - 1;
            next_i = (next_i - 1 < 0) ? slide_length : next_i - 1;
            after_next_i = (after_next_i - 1 < 0) ? slide_length : after_next_i - 1; 
            prev_i = (prev_i - 1 < 0) ? slide_length : prev_i - 1;
            before_prev_i = (before_prev_i - 1 < 0) ? slide_length : before_prev_i - 1;

            slide_array[active_i].classList.add("active");
            slide_array[next_i].classList.add("next");
            slide_array[after_next_i].classList.add("after_next");
            slide_array[prev_i].classList.add("prev");
            slide_array[before_prev_i].classList.add("before_prev");
        }
    }
}