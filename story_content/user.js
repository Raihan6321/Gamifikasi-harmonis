function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hH7Cknnm5z":
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
audio.volume=0.3;
}

