const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');


let icon = '/img/377dc37df17523873990506e560f6e7b.1000x1000x1 (1) (Пользовательское).png';
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
    document.getElementById('playr').src = '/music/FACE/FACE_-_Malenkaya_telka_72787655 (3).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Маленькая телка'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}



function music_2() {
    document.getElementById('playr').src = '/music/FACE/FACE_-_Plachu_72787656 (1).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Плачу'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}


function music_3() {
    document.getElementById('playr').src = '/music/FACE/FACE_-_V_novykh_adikakh_72787657 (1).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'В новых адиках'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}


function music_4() {
    document.getElementById('playr').src = '/music/FACE/FACE_-_Rjejjman_71984254.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Рэйман'
    audio_after.innerHTML = 'FACE'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}



function share() {

    const shareData = {
        title: "MARB Music",
        text: "Поделиться Ссылкой на альбом",
        url: location.href,
    };

    navigator.share(shareData);
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

