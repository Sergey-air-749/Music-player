const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');


let icon = '/Music-player/img/100x100 (3).jpg';
audio_after.innerHTML = 'OG Buda'


function play() {
    document.getElementById('playr').play();

    document.getElementById('play').style.display = 'block'
    document.getElementById('pause').style.display = 'none'
}

function pause() {
    document.getElementById('playr').pause();

    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
}


// function pause() {
//     if (document.getElementById('playr').paused != true) {
//         document.getElementById('playr').play();
//     } else {
//         document.getElementById('playr').pause();
//     }
// }


function share() {

    const shareData = {
        title: "MARB Music",
        text: "Поделиться Ссылкой на альбом",
        url: location.href,
    };

    navigator.share(shareData);
}



function music_1() {
    document.getElementById('playr').src = '/music/OG Buda/23115.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Из-за К...'
    audio_after.innerHTML = 'OG Buda'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}





InputReg.addEventListener('input', ()=>{
    audio.currentTime = Math.floor(InputReg.value)

    //InputReg.max = Math.floor(playr.duration);
});

function debug() {
    console.log(audio.currentTime)
    console.log(audio.duration)
}

function updateProgress(e) {
    InputReg.value = audio.currentTime
    InputReg.max = Math.floor(audio.duration)

    // if (localStorage.getItem('audio_time') == null || 0) {

    // } else {
    //     localStorage.setItem('audio_time', InputReg.value)
    //     localStorage.setItem('audio_time_max', InputReg.max)
    // }
}

audio.addEventListener('timeupdate', updateProgress)

