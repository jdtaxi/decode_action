//Thu Dec 19 2024 04:37:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const got = require("got");
let HttpsProxyAgent;
try {
  HttpsProxyAgent = require("https-proxy-agent");
} catch (_0x4867e8) {
  console.log("\n缺少https-proxy-agent依赖，请运行依赖安装或手动安装!\n");
}
let api = process.env.DY_PROXY;
let num = 0;
async function getproxy(_0x433a1d) {
  const _0x4ab6fe = {
    timeout: 10000
  };
  const _0x2b9007 = await got.get(_0x433a1d, _0x4ab6fe);
  return _0x2b9007.body.replace("\n", "");
}
function intoRequest(_0xe0ccd4, _0x2dfe30 = false) {
  return ddd = async (_0x25ecc6, _0x24bd4d) => {
    {
      api && (num % 50 == 0 || this.failed || _0x2dfe30) && (this.ip = await getproxy(api), this.agent = new HttpsProxyAgent("http://" + this.ip), num = 0);
      const _0x51735a = {
        https: this.agent,
        http: this.agent
      };
      _0x25ecc6.agent = _0x51735a;
      _0x25ecc6.timeout = 10000;
      _0xe0ccd4(_0x25ecc6, async (_0x3b7d04, _0x466423, _0x54b57b) => {
        {
          try {
            {
              _0x3b7d04 ? (console.log(JSON.stringify(_0x3b7d04)), this.failed = true, await ddd(_0x25ecc6, _0x24bd4d)) : (num++, api ? console.log("当前使用代理：" + this.ip) : "", this.failed = false, _0x24bd4d(_0x3b7d04, _0x466423, _0x54b57b));
            }
          } catch (_0x141043) {
            console.log(_0x141043);
          }
        }
      });
    }
  };
}
const _0x3d6637 = {
  intoRequest: intoRequest
};
module.exports = _0x3d6637;