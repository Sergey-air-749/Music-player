const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');


let icon = '/Music-player/img/1200x1200bb100.jpg';
audio_after.innerHTML = 'FACE'


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





function music_1() {
    document.getElementById('playr').src = '/Music-player/music/artist/FACE/FACE_-_Rasstoyanie_72897284 (1).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Расстояние'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}



function music_2() {
    document.getElementById('playr').src = '/Music-player/music/artist/FACE/FACE_-_DNK_72897285 (1).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'ДНК'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}


function music_3() {
    document.getElementById('playr').src = '/Music-player/music/artist/FACE/FACE_-_Domino_72897286.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Домино'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}

function music_4() {
    document.getElementById('playr').src = '/Music-player/music/artist/FACE/FACE_-_Isterika_72897287.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Истерика'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}


function music_5() {
    document.getElementById('playr').src = '/Music-player/music/artist/FACE/FACE_-_Pejj_72897288.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Пей'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}


function music_6() {
    document.getElementById('playr').src = '/Music-player/music/artist/FACE/FACE_-_Nevzaimnoe_Padenie_72897289.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Невзаимное Падение'
    audio_after.innerHTML = 'FACE'

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

    if (localStorage.getItem('audio_time') == null || 0) {

    } else {
        localStorage.setItem('audio_time', InputReg.value)
        localStorage.setItem('audio_time_max', InputReg.max)
    }
}

audio.addEventListener('timeupdate', updateProgress)

