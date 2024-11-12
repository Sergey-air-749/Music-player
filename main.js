const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');

document.getElementById('playr').src = localStorage.getItem('playr')
document.getElementById('playr_img').src = localStorage.getItem('audio_icon');
audio_name.innerHTML = localStorage.getItem('audio_name')
audio_after.innerHTML = localStorage.getItem('audio_after')




function play() {
    document.getElementById('playr').play();

    localStorage.setItem('audio_play', 1)

    document.getElementById('play').style.display = 'block'
    document.getElementById('pause').style.display = 'none'
}

function pause() {
    document.getElementById('playr').pause();
    
    localStorage.setItem('audio_play', 0)

    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
}




InputReg.addEventListener('input', ()=>{
    audio.currentTime = Math.floor(InputReg.value)

    // InputReg.max = Math.floor(playr.duration);
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

