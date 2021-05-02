"use strict";

//doms
var audioSource = document.querySelector("#audioSource");
var audioOutput = document.querySelector("#audioOutput");
var videoSource = document.querySelector("#videoSource");

console.log(audioSource, audioOutput, videoSource);
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices is not supported!");
} else {
  navigator.mediaDevices.enumerateDevices().then(getDevices).catch(handleError);
}

//http 下默认label不会显示  https下才可以显示
function getDevices(deviceInfos) {
  deviceInfos.forEach(function (deviceInfo) {
    // console.log(
    //   deviceInfo.kind +
    //     " label = " +
    //     deviceInfo.label +
    //     ": id = " +
    //     deviceInfo.deviceid +
    //     " : groundId = " +
    //     deviceInfo.groupId
    // );
    var options = document.createElement("option");
    options.text = deviceInfo.label;
    options.value = deviceInfo.id;
    if (deviceInfo.kind === "audioinput") {
      audioSource.appendChild(options);
    } else if (deviceInfo.kink === "audiooutput") {
      audioOutput.appendChild(options);
    } else if (deviceInfo.kind === "videoinput") {
      videoSource.appendChild(options);
    }
  });
}
function handleError(err) {
  console.log(err.name + err.message);
}
