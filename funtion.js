let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let conticon = document.querySelector('#conticon');
let songimage = document.querySelector('#song-image');

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

const  playpush = () => {
    if(conticon.classList.contains('fa-pause')){
        song.pause();
        conticon.classList.remove('fa-pause');
        conticon.classList.add('fa-play');
        songimage.style.animation = 'none'
    }
    else{
        song.play()
        conticon.classList.add('fa-pause');
        conticon.classList.remove('fa-play');
        songimage.style.animation = 'changecolor linear infinite 4s'
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = ()=>{
    song.play();
    song.currentTime = progress.value;
    conticon.classList.add('fa-pause');
    conticon.classList.remove('fa-play');
}