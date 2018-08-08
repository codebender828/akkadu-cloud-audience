let streamStatus = false;

var streamButton = document.getElementById("stream");
var translateButton = document.getElementById("translate");

  function stopStream() {
    if (streamStatus == true) {
      streamButton.innerHTML = "Stream";
      streamButton.className = "button";
      streamButton.disabled = false;
      translateButton.innerHTML = "Translate";
      translateButton.className = "button";

      streamStatus = false;
    }
  }

  function startStream() {
    if (streamStatus == false) {
      streamButton.innerHTML = "Now Streaming";
      streamButton.className = "nowStreaming";
      streamButton.disabled = true;
      translateButton.innerHTML = "Stop";
      translateButton.className = "stopStreaming";
      streamStatus = true;
    } else {
      stopStream();
    }
  };
