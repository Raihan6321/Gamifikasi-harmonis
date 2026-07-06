function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HteYT1tHRl":
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

