const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');


let icon = '/Music-player/img/m1000x1000 (Пользовательское).png';
audio_after.innerHTML = '3TERNITY'


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
    document.getElementById('playr').src = '/Music-player/music/3TERNITY/7ebd7eb223b3d2e9cdea0da8dce16744677c168954a9421f2182cf273b7501f0.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Купе'
    audio_after.innerHTML = '3TERNITY'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}

function music_2() {
    document.getElementById('playr').src = '/Music-player/music/3TERNITY/18867.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Лекарство'
    audio_after.innerHTML = '3TERNITY'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)

    play()
}

function music_3() {
    document.getElementById('playr').src = '/Music-player/music/3TERNITY/b9fdfa12cf32d63177f443d7e24f73058538e283bdb371947b5a8cd3047dadf0.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'PLACEBO'
    audio_after.innerHTML = '3TERNITY'

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
