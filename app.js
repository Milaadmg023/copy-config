const sni = document.querySelector(".sni");
const msg = document.querySelector(".msg");
const port = document.querySelector(".port");
const sniCopy = document.querySelector(".sni-copy");
const msgCopy = document.querySelector(".msg-copy");
const portCopy = document.querySelector(".port-copy");
const config = document.querySelector(".old");
const newConfig = document.querySelector(".new");

sniCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(sni.textContent);
});

msgCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(msg.textContent);
});

portCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(port.textContent);
});

function replaceURL(url) {
    // جایگزینی discord.com:2087 با hello.com
    url = url.replace(/discord\.com:2087/, "hello.com");
  
    // جایگزینی sni=freakshop4444.lmxtinl.com با sni=hello.com
    url = url.replace(/sni=freakshop4444\.lmxtinl\.com/, "sni=hello.com");
  
    return url;
  }
  
  // نمونه استفاده
  const originalURL = "vless://4357fbb4-2041-48a8-b62a-59942d7db74d@discord.com:2087?security=tls&sni=freakshop4444.lmxtinl.com&alpn=h2&allowInsecure=1&fp=chrome&type=grpc&encryption=none#%F0%9F%87%AC%F0%9F%87%A7%20CDN%20%F0%9F%87%AC%F0%9F%87%A7-122-11%D8%AE%D8%B1%D8%AF%D8%A7%D8%AF";
  const modifiedURL = replaceURL(originalURL);
  
  console.log("URL اصلی:", originalURL);
  console.log("URL اصلاح شده:", modifiedURL);

  config.innerHTML = originalURL;
  newConfig.innerHTML = modifiedURL;
