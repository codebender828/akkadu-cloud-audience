let streamStatus = false;
let translateStatus = false;

var streamButton = document.getElementById("stream");
var translateButton = document.getElementById("translate");

  function startStream() {
    if(translateStatus) {
      stopTranslate();
    }
    if (!streamStatus) {
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
    if (!translateStatus) {
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

  var streamStatus = !1,
      translateStatus = !1,
      streamButton = document.getElementById("stream"),
      translateButton = document.getElementById("translate");

  function startStream() {
      translateStatus && stopTranslate(), streamStatus ? stopStream() : (streamButton.className = "nowStreaming", streamStatus = !0)
  }

  function stopStream() {
      1 == streamStatus ? (streamButton.className = "button", streamStatus = !1) : startStream()
  }

  function startTranslate() {
      streamStatus && stopStream(), 0 == translateStatus ? (translateButton.className = "nowTranslating", translateStatus = !0) : stopTranslate()
  }

  function stopTranslate() {
      1 == translateStatus ? (translateButton.className = "button", translateStatus = !1) : startTranslate()
  }
