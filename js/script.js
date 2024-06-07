//play each sound by key input
function playSound(key){
    const sound = document.getElementById('sound_' + key);
    if(sound){
        sound.currentTime = 0; //allows to plays same note at same time
        sound.play(); //play is a method from object audio
    }
}

//events for each key
document.getElementById('key_a').addEventListener('click',function(){
    playSound('a');
});

document.getElementById('key_s').addEventListener('click',function(){
    playSound('s');
});

document.getElementById('key_d').addEventListener('click',function(){
    playSound('d');
});

document.getElementById('key_f').addEventListener('click',function(){
    playSound('f');
});

document.getElementById('key_g').addEventListener('click',function(){
    playSound('g');
});


//checks if the pressed key is one of the specified keys and plays the corresponding sound
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (['a', 's', 'd', 'f', 'g'].includes(key)) {
        playSound(key);
    }
});