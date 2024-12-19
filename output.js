//Thu Dec 19 2024 04:33:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const fuck_0x1a6611 = require("got");
let fuck_0x8400da;
let fuck_0xc2a4a5;
let fuck_0x51d816 = true;
let fuck_0x1a7fbc;
try {
  fuck_0x8400da = require("https-proxy-agent").HttpsProxyAgent;
} catch (fuck_0x382c34) {
  console.log("未安装https-proxy-agent依赖，无法启用代理");
  process.exit();
}
const fuck_0x3cbae5 = process.env.DY_PROXY;
const fuck_0xcdc0e9 = process.env.DY_SOCKS;
const fuck_0x2d7508 = process.env.DY_PNUM || "3";
const fuck_0x2a187c = process.env.PERMIT_API ? (process.env.PERMIT_API + "&test").split("&") : "";
const fuck_0x3d2923 = true;
let fuck_0x173a33 = 1;
if (fuck_0xcdc0e9) {
  try {
    fuck_0xc2a4a5 = require("socks-proxy-agent");
  } catch (fuck_0x1e6121) {
    console.log(fuck_0x1e6121);
  }
  console.log("代理模式为SOCKS5\n");
}
!fuck_0x39348e(fuck_0x3cbae5) && (console.log("\n代理API地址不正确，不启用❗ ❗ ❗\n"), fuck_0x51d816 = false);
if (fuck_0x2a187c == "") {
  console.log("\n---------------API代理模式（非白名单）已开启---------------\n");
} else {
  fuck_0x2a187c && fuck_0x2a187c.filter(_0x2ee8b2 => process.mainModule.filename.includes(_0x2ee8b2)).length != 0 ? console.log("\n---------------API代理模式（白名单）已开启---------------\n") : fuck_0x51d816 = false;
}
async function fuck_0x25a06e(_0x1c98b8) {
  const _0x1c1416 = {
    lookup: 10000,
    connect: 10000,
    secureConnect: 10000,
    socket: 10000,
    send: 10000,
    response: 10000,
    request: 30000
  };
  const _0x5eecc9 = {
    timeout: _0x1c1416
  };
  const _0x53c5e5 = await fuck_0x1a6611.get(_0x1c98b8, _0x5eecc9).catch(_0x5e30e1 => {
    console.log(_0x5e30e1);
  });
  return _0x53c5e5.body.replace("\n", "").replace(/^.*:\/\//, "");
}
async function fuck_0x33dadd(_0x288e01) {
  return new Promise(_0x32dc91 => {
    setTimeout(_0x32dc91, _0x288e01);
  });
}
function fuck_0x39348e(_0xf42bb0) {
  var _0x5bf266 = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\u4E00-\\u9FA5\\d%_.,~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
  return _0x5bf266.test(_0xf42bb0);
}
async function fuck_0x31c239() {
  if (!fuck_0x51d816) {
    return;
  }
  let _0x5a0602 = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  let _0x31369c;
  for (let _0x255e28 of Array(3)) {
    {
      _0x31369c = await fuck_0x25a06e(fuck_0x3cbae5);
      if (_0x5a0602.test(_0x31369c) !== false) {
        break;
      }
      console.log(_0x31369c);
      _0x31369c = undefined;
    }
  }
  if (!_0x31369c) {
    console.log("\n连续三次获取IP失败，请检查代理API是否正常❗ ❗ ❗\n");
  }
  fuck_0x1a7fbc = _0x31369c ? new fuck_0x8400da("http://" + _0x31369c) : undefined;
  fuck_0x1a7fbc ? console.log("使用代理IP：" + _0x31369c) : "";
}
function fuck_0x43566a(_0x527f67, _0x4d2eac = false) {
  let _0x1874e1 = 0;
  let _0x118183;
  return ddd = async (_0x52c29a, _0x14ef0e) => {
    {
      fuck_0x3cbae5 && fuck_0x51d816 && (_0x118183 || _0x4d2eac || fuck_0x173a33 == 1 && fuck_0x3d2923) && (await fuck_0x31c239());
      const _0x511b87 = {
        https: fuck_0x1a7fbc,
        http: fuck_0x1a7fbc
      };
      _0x52c29a.agent = _0x511b87;
      const _0x536e7d = {
        lookup: 10000,
        connect: 10000,
        secureConnect: 10000,
        socket: 10000,
        send: 10000,
        response: 10000,
        request: 30000
      };
      _0x52c29a.timeout = _0x536e7d;
      _0x527f67(_0x52c29a, async (_0x248d38, _0x2da03e, _0xa14d24) => {
        try {
          if (_0x248d38) {
            if (_0x1874e1 < 1) {
              _0x118183 = true;
              _0x1874e1++;
              await ddd(_0x52c29a, _0x14ef0e);
            } else {
              _0x118183 = true;
              _0x1874e1 = 0;
              _0x14ef0e(_0x248d38, _0x2da03e, _0xa14d24);
            }
          } else {
            {
              fuck_0x173a33++;
              _0x118183 = false;
              _0x1874e1 = 0;
              _0x14ef0e(_0x248d38, _0x2da03e, _0xa14d24);
            }
          }
        } catch (_0x1ac3fe) {
          {
            console.log(_0x1ac3fe);
          }
        }
      });
    }
  };
}
const fuck_0x33e9a2 = {
  intoRequest: fuck_0x43566a,
  swip: fuck_0x31c239
};
module.exports = fuck_0x33e9a2;