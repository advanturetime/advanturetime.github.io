window.onload = function(){

    // ** S : #section1
    
    // [eyes]
    eyeHandler = function(selector){
        let eyes = document.querySelector(selector),
            eyeBall = eyes.querySelector(".ball"),
            eyeArea = eyes.getBoundingClientRect();

        eyeMove = function (mouseX, mouseY) {
            let radian = Math.atan2( mouseY - (eyeArea.y + eyeArea.height * 0.5), mouseX - (eyeArea.x + eyeArea.width * 0.5));
            eyeBall.style.transform = "rotate(" + (180 * radian / Math.PI - 90) + "deg)";
        }

        return {eyeMove : eyeMove};
    };

    let eyeFirst = eyeHandler(".eye_first"),
        eyeSecond = eyeHandler(".eye_second");

    window.addEventListener('mousemove', (e) => {
        eyeFirst.eyeMove(e.pageX, e.pageY);
        eyeSecond.eyeMove(e.pageX, e.pageY);
    });

    // ** S : #section2

    // [sliderPopup]
    const pops = document.querySelectorAll(".project_area ul li:not(:first-child):not(:nth-child(4)) a");
    const overlayPop = document.querySelector(".overlay_pop");
    const overlayIframe = document.querySelector(".overlay-inner iframe")

    function open(e){
        overlayPop.classList.add("open");
        const src = e.currentTarget.querySelector('iframe').src;
        overlayIframe.src = src;
    }

    function close() {overlayPop.classList.remove("open");}
    pops.forEach((button) => {button.addEventListener('click', open);})
    overlayPop.addEventListener('click', close);

    // ** S : section4

    // [3DText]
    var ztxt = new Ztextify(".text_layer", {
        depth: "50px",
        layers: 80,
        fade: false,
        direction: "both",
        event: "pointer",
        eventRotation: "35deg"
    });

    // // [roundText]
    const text = document.querySelector("#roundText");
    text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 7.9}deg)">${char}</span>`).join("");

    const text2 = document.querySelector("#roundText2");
    text2.innerHTML = text2.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 7.9}deg)">${char}</span>`).join("");

    // S : allSetting

    // [skrollr]
    var s = skrollr.init({
        edgeStrategy: 'set',
        easing: 'linear'
    });

    // [nav]
    const navList = $("#nav #overlay nav ul li");
    const navMobileList = $("#navMobile #overlayMobile nav ul li");

    $('#toggle').click(function() {$('#bars').toggleClass('animate'); $('#nav').toggleClass('overlay');});
    $('#toggleMobile').click(function() {$('#barsMobile').toggleClass('animate'); $('#navMobile').toggleClass('overlay');});

    navList.click(function(){$('#bars').removeClass('animate'); $('#nav').removeClass('overlay');});
    navMobileList.click(function(){$('#barsMobile').removeClass('animate'); $('#navMobile').removeClass('overlay');});

    // [scroll]
    const html = document.querySelector('html');
    html.classList.add('scroll');

    window.addEventListener("scroll", function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
        // document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);

        const navLi = document.querySelectorAll("#overlay nav ul li");
        const remove = function(){
            nav.classList.toggle("overlay");
            bars.classList.toggle("animate");
        }

        navLi[0].addEventListener('click', () => {window.scrollTo({top : 0}); remove();});
        navLi[1].addEventListener('click', () => {window.scrollTo({top : 3000}); remove();});
        navLi[2].addEventListener('click', () => {window.scrollTo({top : 6001}); remove();});
        navLi[3].addEventListener('click', () => {window.scrollTo({top : 12000}); remove();});


        if(scrollTop >= 3000) {
            navLi[1].classList.add("active");
            navLi[2].classList.remove("active");
            navLi[3].classList.remove("active");
        }
        if(scrollTop >= 6000) {
            navLi[2].classList.add("active");
            navLi[1].classList.remove("active");
            navLi[3].classList.remove("active");
        }
        if(scrollTop >= 12000) {
            navLi[3].classList.add("active");
            navLi[1].classList.remove("active");
            navLi[2].classList.remove("active");
        }
    });
}