((doc, win, designWidth) => {
  const html = doc.documentElement;
  let dpr = win.devicePixelRatio; //DPR

  const refreshRem = () => {
    const clientWidth = html.getBoundingClientRect().width; //css像素
    if (clientWidth >= designWidth) {
      html.style.fontSize = "100px";
    } else {
      // html.style.fontSize = 16 * clientWidth/375 + 'px'
      html.style.fontSize = 100 * (clientWidth / designWidth) + "px";
    }
  };
  console.log(1);
  win.addEventListener("DOMContentLoaded", refreshRem);
  win.addEventListener("resize", refreshRem);

  win.addEventListener("unload", () => {
    win.removeEventListener("resize");
  });
})(document, window, 750);
