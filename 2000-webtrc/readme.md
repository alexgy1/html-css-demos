## 视频特效

- css filter
- 如何将 video 和 filter 关联？

- OpenGl/Metal

特效
graystyle 灰度
sepia 褐色
saturate 饱和度
hue-rotate 色相旋转
ivert 反色

opacity 透明度
brightness 亮度
contrast 对比度
blur 模糊
drop-shadow 阴影

## 从视频中获取图片

```js
snapshot.onclick = function () {
  //滤镜
  canvas.className = filterSelect.value;
  //截图
  canvas
    .getContext("2d")
    .drawImage(videoPlay, 0, 0, canvas.width, canvas.height);
};
```

## 只处理音频

audio

## mediastream

MediaStream.addTrack()
MediaStream.removeTrack()
MediaStream.getVideoTracks()
MediaStream.getAudioTracks()

MediaStream.onaddtrack
MediaStream.onremovetrack
MediaStream.onended

```js
var videoTrack = stream.getVideoTracks()[0];
var videoConstraints = videoTrack.getSetting(); //obj
divDOm.textContent = JSON.stringify(videoConstraints, null, 2);
```

## webrtc 录制媒体流

https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder

MediaRecoder
MediaRecoder.start(timeslice)
MediaRecoder.stop()
MediaRecoder.pasue
MediaRecoder.resume()
MediaRecoder.isTypeSupported()

events
MediaRecoder.ondataavailable
MediaRecoder.onerror

js 几种存储数据的方式

- 字符串
- Blob 是对 ArrayBuffer 的封装
- ArrayBuffer
- ArrayBufferView

## 获取桌面

getDisplayMedia
chrome flags enable-experimental web platform features

## socket.io send message

- socket.emit() 给本次链接发消息

- 给某个房间里面所有人发消息
  io.in(room).emit()

- 除了本链接以外 给某个房间所有人发消息
  socket.to(room).emit()
- 除了本链接外 给所有人发消息
  socket.boradcast.emit()

  # 发送 action

  S : socket.emit('action')
  C : socket.on('action', function(){...})

  # action + data

  S : socket.emit('action',data)
  C : socket.on('action', function(data){...})

  # action + 两个 data

  S : socket.emit('action', arg1, arg2)
  C : socket.on('action', function(arg1, arg2){...})

  # action + data + callback

  S : socket.emit('action', data, function(arg1,arg2){})
  C : socket.on('action',function(data,fn){ fn('a','b')})

  ## webrtc 信令服务器 每个公司不一样 自己定义

  ## 为什么用 socket.io

  - socket.io 是 websocket 的超集
  - socket.io 本身就有房间的概念
  - socket.io 跨平台 跨终端 跨语言

  scoket.io (nodejs ) 一对多

  ## 通过 socket.io 实现信令服务器

  1. install socket.io
  2. import
  3. use connection

客户端实现

## webrtc 传输的基本知识

NAT Network Address Translator 可以将内网地址转为公网地址 保证可以被发现

- NAT 产生原因 ipv4 地址不够
- 出于网络安全的原因
  STUN （Simple Traversal of UDP Through NAT）让互通
  TURN （Traversal Using Relays around NAT）
  ICE (Interactive Connectivity Establishment)

  ## 网络分析方法

  - linux tcpdump
  - 其他端 WireShark

  tcpdump -i eth0 src port 80 -xx -Xs 0 -w test.cap

  - -i 指定网卡
  - src 指定包的来源
  - port 指明端口号
  - -xx 抓到的包 16 进制显示
  - -X ASCII 码显示
  - -s 0 抓整个包
  - -w 写到文件里

  ## 端对端的链接

  RTCPeerConnection

https://blog.csdn.net/china_jeffery/article/details/102792832

## SDP （Session Description Protocol）

- 信息格式的标准 不属于传输协议 但是可以被其他传输协议用来交换必要的信息
