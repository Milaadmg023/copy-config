const config = document.querySelector("#config");
const addBtn = document.querySelector("#add");
const copyBtn = document.querySelector("#copy");
const newConfig = document.querySelector("#result");

addBtn.addEventListener("click", () => {
  newConfig.innerHTML = replaceURL(config.value);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(newConfig.innerHTML);
    copyBtn.innerHTML = "کپی شد";
    config.value = "";
    newConfig.innerHTML = "";
});

function replaceURL(url) {
  url = url.replace(/172\.67\.191\.234:2087/, "hello.com");
  url = url.replace(/zula\.ir:2087/, "hello.com");
  url = url.replace(/freakshop4444\.lmxtinl\.com:2087/, "hello.com");
  url = url.replace(/discord\.com:2087/, "hello.com");


  url = url.replace(/sni=freakshop4444\.lmxtinl\.com/, "sni=hello.com");

  return url;
}

