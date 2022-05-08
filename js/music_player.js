window.onload = function(){
    const cdInfo =
    [{
    song: "손잡아 줘요",
    singer: "이하이(Lee Hi)",
    coverImg: "/image/music_player/album_cover/손잡아_줘요-이하이(Lee_Hi).jpg",
    audio: "/etc/music_file/손잡아_줘요-이하이(Lee_Hi).mp3"
    },
    {
    song: "삐삐",
    singer: "아이유(IU)",
    coverImg: "/image/music_player/album_cover/bbibbi_IU.jpg",
    audio: "/etc/music_file/삐삐-아이유(IU).mp3"
    },
    {
    song: "1호선",
    singer: "레인보우 노트(Rainbow note)",
    coverImg: "/image//music_player/album_cover/1호선-레인보우_노트(Rainbow_note).jpg",
    audio: "/etc/music_file/1호선-레인보우_노트(Rainbow_note).mp3"
    }];
    
    // val settings
    let imgCover = document.getElementById("imgCover");
    let musicImg = document.querySelector(".img_container > img");
    let imgTurnTable = document.querySelector(".img_container > .img_turntable");
    let value = progressBar.value;
    let select_song_i = 0;
    
    // basic settings
    function loadSong(){
        musicTitle.innerText = cdInfo[select_song_i].song;
        musicSinger.innerText = cdInfo[select_song_i].singer;
        imgCover.src = cdInfo[select_song_i].coverImg;
        musicAudio.src = cdInfo[select_song_i].audio;
    }
    loadSong();
    
    //btn settings
    const musicBtnHandler = function(e){
        const btn = e.target;
        
        if (btn.classList.contains("paused")){
    
            imgTurnTable.style.top = "-30px";
            imgTurnTable.style.opacity = "0";
            musicImg.classList.remove("play");
            playBtn.classList.add("play");
            playBtn.classList.remove("paused");
            musicAudio.pause();
    
        } else {
    
            if (btn.classList.contains("next_btn")) {
                select_song_i = ((select_song_i + 1) >= cdInfo.length) ? 0 : select_song_i + 1;
            } else if (btn.classList.contains("prev_btn")) {
                select_song_i = ((select_song_i - 1) < 0) ? cdInfo.length - 1 : select_song_i - 1;
            } else if (btn.classList.contains("play")) {
                imgTurnTable.style.top = "0";
                imgTurnTable.style.opacity = "1";
                musicImg.classList.add("play");
                playBtn.classList.add("paused");
    
                musicAudio.play();
                return
            }
    
            imgTurnTable.style.top = "0";
            imgTurnTable.style.opacity = "1";
            musicImg.classList.add("play");
            playBtn.classList.add("paused");
    
            musicTitle.innerText = cdInfo[select_song_i].song;
            musicSinger.innerText = cdInfo[select_song_i].singer;
            imgCover.src = cdInfo[select_song_i].coverImg;
            musicAudio.src = cdInfo[select_song_i].audio;
    
            musicAudio.play();
        }
    }
    
    // update progress bar
    musicAudio.ontimeupdate = function(e){
        let {duration, currentTime} = e.srcElement;
    
        if (duration && currentTime){
            let progressPercent = (currentTime / duration) * 100;
            progressBar.value = `${progressPercent}`;
            progressBar.style.background = `linear-gradient(to right, #fff 3%, #fff ${progressPercent}%, rgba(255,255,255,0.3) ${progressPercent}%, rgba(255,255,255,0.3) 100%)`;
        }
    }
    
    progressBar.onclick = function(e){
        let width = this.clientWidth;
        let widthX = e.offsetX;
        let duration = musicAudio.duration;
        musicAudio.currentTime = (widthX / width) * duration;
    }
    
    // play
    playBtn.addEventListener('click', musicBtnHandler);
    pvevBtn.addEventListener('click', musicBtnHandler);
    nextBtn.addEventListener('click', musicBtnHandler);
    musicAudio.addEventListener('ended',()=>{ nextBtn.click()});
}