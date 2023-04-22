var songs = document.getElementById("play-back-music");
  var icons = document.getElementById("icons");

  icons.onclick = function(){
    if(songs.paused){
      songs.play();
      icons.src = "assets/img/pause.png"
    }else{
      songs.pause();
      icons.src = "assets/img/play.png"
    }
    
  }