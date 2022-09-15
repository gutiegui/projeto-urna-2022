$(".grande").on("click", function(){
    $("#tudo").addClass("ativo");
})

var bleep = new Audio();
bleep.src='http://themezz.com/files/Sounds/Click-5.wav';

$(".click").on("click", function(event){
    event.preventDefault();
    bleep.play();
})