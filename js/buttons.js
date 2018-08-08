let streamStatus = false;
let translateStatus = false;

var streamButton = document.getElementById("stream");
var translateButton = document.getElementById("translate");

  function startStream() {
    if(translateStatus) {
      stopTranslate();
    }
    if (streamStatus == false) {
      streamButton.className = "nowStreaming";
      streamStatus = true;


    } else {
      stopStream();
    }
  };

  function stopStream() {
    if (streamStatus == true) {
      streamButton.className = "button";
      streamStatus = false;

    } else {
      startStream();
    }
  };

  function startTranslate() {
    if (streamStatus) {
      stopStream();
    }
    if (translateStatus == false) {
      translateButton.className = "nowTranslating";
      translateStatus = true;
    } else {
      stopTranslate();
    }
  };

  function stopTranslate() {
    if (translateStatus == true) {
      translateButton.className = "button";
      translateStatus = false;
    } else {
      startTranslate();
    }
  };
