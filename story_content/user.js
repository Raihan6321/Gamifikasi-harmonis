function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Sebo8va0wN":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="BGM.mp3";
audio.load();
audio.play();
audio.volume=0.1;
}

