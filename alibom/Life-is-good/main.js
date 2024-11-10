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
    document.getElementById('playr').src = '/music/artist/FACE/FACE_-_Malenkaya_telka_72787655 (3).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Маленькая телка'

    play()
}



function music_2() {
    document.getElementById('playr').src = '/music/artist/FACE/FACE_-_Plachu_72787656 (1).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Плачу'

    play()
}


function music_3() {
    document.getElementById('playr').src = '/music/artist/FACE/FACE_-_V_novykh_adikakh_72787657 (1).mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'В новых адиках'

    play()
}


function music_4() {
    document.getElementById('playr').src = '/music/artist/FACE/FACE_-_Rjejjman_71984254.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Рэйман'

    play()
}







InputReg.addEventListener('input', ()=>{
    audio.currentTime = Math.floor(InputReg.value)

    InputReg.max = Math.floor(playr.duration);
});

function debug() {
    console.log(audio.currentTime)
    console.log(audio.duration)
}

function updateProgress(e) {
    InputReg.value = audio.currentTime
    InputReg.max = Math.floor(audio.duration)
}

audio.addEventListener('timeupdate', updateProgress)

