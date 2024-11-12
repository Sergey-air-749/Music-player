const InputReg_S = document.getElementById('time');
const audio_S = document.getElementById('playr');
const audio_name_S = document.getElementById('audio_name');
const audio_after_S = document.getElementById('audio_after');

if (localStorage.getItem('playr') == null) {
    document.getElementById('playr_img').src = '/Music-player/img/notaudio.svg'
    audio_name_S.innerHTML = 'Нет данных'
} else {
    document.getElementById('playr').src = localStorage.getItem('playr')
    document.getElementById('playr_img').src = localStorage.getItem('audio_icon');
    audio_name_S.innerHTML = localStorage.getItem('audio_name')
    audio_after_S.innerHTML = localStorage.getItem('audio_after')

    audio_after_S.duration = localStorage.getItem('audio_time')

    InputReg_S.max = localStorage.getItem('audio_time_max')
    InputReg_S.value = localStorage.getItem('audio_time')
}