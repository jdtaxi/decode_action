//Sat Dec 07 2024 02:32:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
活动名称：店铺签到
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_token // 活动令牌，不支持多个
        jd_dpqd_account_threads // 控制账号并发线程数（正整数），默认1
        jd_dpqd_account_interval // 自定义运行间隔时长（整数，单位毫秒），默认0
        jd_dpqd_max_retry // 签到火爆时的最大重试次数（整数），默认0
        jd_dpqd_notify // 是否推送通知信息（true/false），默认不推送

此脚本为高并发单一签到本，自动过滤垃圾活动，与另外3个本无任何关联可单独运行

7 7 29 2 * jd_dpqd_single.js

*/

const $ = new Env("\u5355\u4E2A\u5E97\u94FA\u7B7E\u5230");
const jdCookie = require("./jdCookie");
const notify = require("./function/sendJDNotify");
const common = require("./function/jdCommon");
const {
  H5st,
  jsTk
} = require("./function/jdCrypto");
var iｉl = "jsjiami.com.v7";
const I1Ii111l = l1IIIiIl;
(function (l1i1lIi, iI11IlI1, Il1Ii1li, li111111, IlI1Ii1I, I1illl1I, iiii11lI) {
  return l1i1lIi = l1i1lIi >> 5, I1illl1I = "hs", iiii11lI = "hs", function (I1Iiii1, Ilill1li, i1li1I1l, I11IiII1, I1lIIII) {
    const iiI1i1il = l1IIIiIl;
    I11IiII1 = "tfi", I1illl1I = I11IiII1 + I1illl1I, I1lIIII = "up", iiii11lI += I1lIIII, I1illl1I = i1li1I1l(I1illl1I), iiii11lI = i1li1I1l(iiii11lI), i1li1I1l = 0;
    const lilIll1l = I1Iiii1();
    while (true && --li111111 + Ilill1li) {
      try {
        I11IiII1 = -parseInt(iiI1i1il(405, "Uyh7")) / 1 * (-parseInt(iiI1i1il(927, "&7wW")) / 2) + parseInt(iiI1i1il(384, "Czze")) / 3 + parseInt(iiI1i1il(971, "&7wW")) / 4 + parseInt(iiI1i1il(830, "^Uyj")) / 5 * (-parseInt(iiI1i1il(860, "(lwu")) / 6) + -parseInt(iiI1i1il(575, "VVBt")) / 7 + -parseInt(iiI1i1il(696, "Czze")) / 8 + parseInt(iiI1i1il(534, "kR(!")) / 9 * (parseInt(iiI1i1il(440, "IkW%")) / 10);
      } catch (Iiilil1l) {
        I11IiII1 = i1li1I1l;
      } finally {
        I1lIIII = lilIll1l[I1illl1I]();
        if (l1i1lIi <= li111111) i1li1I1l ? IlI1Ii1I ? I11IiII1 = I1lIIII : IlI1Ii1I = I1lIIII : i1li1I1l = I1lIIII;else {
          if (i1li1I1l == IlI1Ii1I["replace"](/[ufQSOBDGndFAXYHeLMRNV=]/g, "")) {
            if (I11IiII1 === Ilill1li) {
              lilIll1l["un" + I1illl1I](I1lIIII);
              break;
            }
            lilIll1l[iiii11lI](I1lIIII);
          }
        }
      }
    }
  }(Il1Ii1li, iI11IlI1, function (l11i1iI, IIllli1i, li1iIili, IllIi1Il, llIllI11, ilI1111I, III1iIll) {
    return IIllli1i = "split", l11i1iI = arguments[0], l11i1iI = l11i1iI[IIllli1i](""), li1iIili = `\x72\x65\x76\x65\x72\x73\x65`, l11i1iI = l11i1iI[li1iIili]("v"), IllIi1Il = `\x6a\x6f\x69\x6e`, 1451438, l11i1iI[IllIi1Il]("");
  });
}(6432, 342744, iiiliill, 203), iiiliill) && (iｉl = `\xe22`);
let token = process[I1Ii111l(643, "T9@E")][I1Ii111l(858, "3T[h")] || "",
  accountThreads = process[I1Ii111l(632, "TXqj")][I1Ii111l(908, "elgH")] || "1";
const runInterval = process[I1Ii111l(491, "kR(!")][I1Ii111l(859, ")2&@")] || "";
let signHotMaxRetryTimes = process[I1Ii111l(632, "TXqj")][I1Ii111l(585, "L7xV")] || "0";
function l1IIIiIl(_0x4658db, _0x3d6b14) {
  const _0x3d1727 = iiiliill();
  return l1IIIiIl = function (_0x150475, _0x309ca3) {
    _0x150475 = _0x150475 - 327;
    let _0x4de084 = _0x3d1727[_0x150475];
    if (l1IIIiIl["BFNpqG"] === undefined) {
      var _0x22063e = function (_0x56b6f1) {
        const _0x3810e6 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x9a0803 = "",
          _0x3124e4 = "";
        for (let _0x2b8966 = 0, _0x256d81, _0x4f56e0, _0x3aae96 = 0; _0x4f56e0 = _0x56b6f1["charAt"](_0x3aae96++); ~_0x4f56e0 && (_0x256d81 = _0x2b8966 % 4 ? _0x256d81 * 64 + _0x4f56e0 : _0x4f56e0, _0x2b8966++ % 4) ? _0x9a0803 += String["fromCharCode"](255 & _0x256d81 >> (-2 * _0x2b8966 & 6)) : 0) {
          _0x4f56e0 = _0x3810e6["indexOf"](_0x4f56e0);
        }
        for (let _0x1ad166 = 0, _0x47df32 = _0x9a0803["length"]; _0x1ad166 < _0x47df32; _0x1ad166++) {
          _0x3124e4 += "%" + ("00" + _0x9a0803["charCodeAt"](_0x1ad166)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x3124e4);
      };
      const _0x4ef75b = function (_0x110ccf, _0x4813b1) {
        let _0x44d1b4 = [],
          _0x228258 = 0,
          _0x393e7c,
          _0x4c2d6e = "";
        _0x110ccf = _0x22063e(_0x110ccf);
        let _0x9eab6c;
        for (_0x9eab6c = 0; _0x9eab6c < 256; _0x9eab6c++) {
          _0x44d1b4[_0x9eab6c] = _0x9eab6c;
        }
        for (_0x9eab6c = 0; _0x9eab6c < 256; _0x9eab6c++) {
          _0x228258 = (_0x228258 + _0x44d1b4[_0x9eab6c] + _0x4813b1["charCodeAt"](_0x9eab6c % _0x4813b1["length"])) % 256, _0x393e7c = _0x44d1b4[_0x9eab6c], _0x44d1b4[_0x9eab6c] = _0x44d1b4[_0x228258], _0x44d1b4[_0x228258] = _0x393e7c;
        }
        _0x9eab6c = 0, _0x228258 = 0;
        for (let _0x46005b = 0; _0x46005b < _0x110ccf["length"]; _0x46005b++) {
          _0x9eab6c = (_0x9eab6c + 1) % 256, _0x228258 = (_0x228258 + _0x44d1b4[_0x9eab6c]) % 256, _0x393e7c = _0x44d1b4[_0x9eab6c], _0x44d1b4[_0x9eab6c] = _0x44d1b4[_0x228258], _0x44d1b4[_0x228258] = _0x393e7c, _0x4c2d6e += String["fromCharCode"](_0x110ccf["charCodeAt"](_0x46005b) ^ _0x44d1b4[(_0x44d1b4[_0x9eab6c] + _0x44d1b4[_0x228258]) % 256]);
        }
        return _0x4c2d6e;
      };
      l1IIIiIl["jhmiqo"] = _0x4ef75b, _0x4658db = arguments, l1IIIiIl["BFNpqG"] = true;
    }
    const _0x19d5c6 = _0x3d1727[0],
      _0x50f825 = _0x150475 + _0x19d5c6,
      _0x5245b1 = _0x4658db[_0x50f825];
    return !_0x5245b1 ? (l1IIIiIl["jdnzli"] === undefined && (l1IIIiIl["jdnzli"] = true), _0x4de084 = l1IIIiIl["jhmiqo"](_0x4de084, _0x309ca3), _0x4658db[_0x50f825] = _0x4de084) : _0x4de084 = _0x5245b1, _0x4de084;
  }, l1IIIiIl(_0x4658db, _0x3d6b14);
}
function iiiliill() {
  const l1iIIlIl = function () {
    return [...[iｉl, "fLjusYjLXianmeGiOAB.FMcfdoOHm.v7nNVDQSQR==", "c8kaWQVdG8oWsmoBba", "A8kUnt7cRWJdQNLh", "WQVdLHDbWO/cMmkZFa", "5yUB5B2n5lMl", "5BET6l+N5RwT5yMa5lI+6zUG", "FH1gxqe", "ACoLWRrxcW", "WQu7lqXF", "s1OMWQ0", "F1/cPmkZWOe", "zM3dMgtdV8k1xxRdJH3cMG", "umosWRvPrtj1nsa", "WRuazZBcJW", "WQqsi8k3evldReXPW7ddPSkrW6pcS8kn", "5QYG5PAg56YP5yIW", "W7vAcMZcQmkRnmobqa", "we7cKCkKWOm", "W5FcTHlcGSkJW4NcJd51", "emkiWR7dGSoZ", "W45BE8kbnCkgwG", "headW5a", "zKjQWP7cOa", "hCknWRZcM8o3", "5yAf57Iv5y2Q8jY0Jq", "5REu5yUl5PA35Pwi", "EZGIWOK", "xSk8pSo5W6K", "W6CHxXtcVG", "sCoeWPPrjG", "eNddKtNcKmkbWQJcKSoocfdcRmou", "vmoyWOXahGbpWRCgAv9pAf9dyvWmvHFcHSoxjaq", "WRiyqdxcPmkFkmo9tSkW", "a8koWOdcTCkkghBdKrVdH1a", "WQldQCkcW4jG", "fSktWRRdTCoW", "4PYfWP/OJzpLJjdMT6NLIA3KVQdMGk3LP4JOTPu", "W6hdMg/cUmo1", "WQyfjCk7aue", "WQ3dOvPh", "m8k0pZtcGW", "W5ZdKSobo0i", "xNOkWRG6", "8j2kPdpOTlhLJOBML6xMLRG", "aM5rWOa7W5yVga", "prhcLSo1W5y", "WQFdHbXKWO3cGa", "5B6K5Asj5PAw6zsF77+x", "BsW4WQ1AW5q", "zKHQWRBcGW", "4P+5WQdOHPBMNzNOV6lOO57PG5VLIipKUQRPL4tORl/dHG", "lmoGW69WeW", "4P+NWQdKUy7NIQZMORZLViZPL7xOR4y", "mr/dPmk1", "WPGcpNq", "W4ldOCoLawBdU8oXvG", "4P6vW6FNR5ZLIPlMIOZLIlW", "wmovWQS", "6lEC5y2P5PsS5PEB", "5Q+V5PE156675yIc", "4P6pv+ESQEwlHUwLG+I0GW", "pCkTWQBcRCockKpdRa", "aSkXbthcPW", "amobW69HhsaWleldNsFcJu9Ey1zHW7NdUuac", "776F5BAc5y6o5A2N", "WOeTxcZcTW", "WQijbGDEfW", "bGlcNCouW4K", "W6TitCkZoG", "W4fRla", "W5hdOCo1bG", "WR8cEYBcPCoUW5pcI8otW5hcKmoHWOi5WOa", "WOJdPHvAWR8", "c8ovWRtcSCkE", "WRKPjqrC", "tuJcNCkFWQG", "W5dcRqVcJSkJ", "w8o+WPzQoa", "uuBdPfe", "WO4qjgNcNmoG", "bwT2WQGUW5eUk8koWOS7W7ldSSkqWRJdPmoBumonW6/cOCkbW74", "ob/dVSkrWRm", "W58ABmo1W7O", "FqzSuqa", "WQKNW5OTW6m", "W5KICW", "agilW4NdNrvxW7i", "CxHDEX4", "F2P9CXr3WRKN", "4P2SmoIhN+ACNUI+TEIITEMaNEwkRUs4JEMvIEIUNSkT", "W6OjjSksW6r3bmkpgCkKWOBdLCoNr38u", "c2ddVdtcJSkxWQxcQ8od", "W4ddO8oiWQxdLW", "W4emEYpcUG", "sx7cSvCxWPG5W6RdLdmuW4K/W4pcGdSUymklEJTvc2/dSmkKWPeAWR7dLqKbp8oGbv4jW43cQSk4", "EISKWQvhW5C", "h8kAlZG", "bMfDWQKSW4ePamkWWOS9W7pdS8kBWR7dPmoCumoqW7RcK8kmW6RdGSooB8kBDXDzaCkqiCo8W55ME8oMW7ldJG", "bCkhlYZcHelcOmkmW68", "zCoXW7JdMmkqzgldPcJdNGiE", "drbKFH0", "nKBdOrVdUW", "DdhcUSkMW6BcMqS", "q1q1", "77Ya8jYQUa", "CeBcJW", "W5FdP8oBgwS", "fCk0WQpdVmoD", "AmkKdSos", "iLmPW63dHa", "WOiMfSkSpa", "W4zEsCkmaq", "d8o3WOZcSmkc", "cSk2WRJdJmoK", "DsO5WOzeWOfyWPS2", "uf/dUuq", "uK15WOFcMa", "wSoDWQPx", "WO3dV8kLW6C", "iCkxba7cRa", "j8ogWRlcSSkO", "W7ldIxVcU8o8", "nqxdVmk4WOu", "w8ooWQfPhry", "F8k0cCo7W6FdHCoijW1Nl08/WRxdIG", "W4/dUmo/oxe", "4P6kWPFOJ5JLJ5VMT5hLIyBKVlFMGB/LP7tOTyi", "b8ouWOhcHmk7", "EK/cUCkRWRu", "kmosWOFcLCkq", "WPZdT8kIW7jvD8kv", "W6fldetcPCk4nmorumkMWONdQmkFWPBdTW", "bJdcO8onW6pdQa", "W6tcV8oVamkg", "WQatda", "5RE95yIF5BgP5zYLW4O", "WO7dRHToWOi", "WR8cEZtcR8o9W5tcR8oFW4BcHSoAWOG", "WQa6W48", "WQ/dJSkhW4n0", "AZWUWPWBW4aeW4PUW4W", "hCoMWQdcObtcHq", "F0BcJmka", "zCoWW7hdK8kFe03dJaZdIrm", "W4vmFq", "g2zeWQK", "vKJdVLBcU8kw", "js3cVmkc", "nmkLWRhcKG", "DK3cT8kbWQVdTSkEAmoGaSoRW6VcSxC", "W53dTmo4buhcQmkZhetdQmo+WQhcLWLCz8kSW5BdSCoQW5lcLCkzW6GVWOBcVd7dUx0wWOf7WOFcRxBdNf3cUmkulNyPW5tcMsRdSKLkaSoVWRlcNSkXW6CQhtxdRd5sW68PWRNdLtlcLSoGz0VdQ8o2cq", "WPGlBSkLWQWnxG", "bgGxW7pdQbfF", "4P6cWQ7NRydLIjlLP63OTQW", "kMmyW6JcPW", "W6bhfhhcO8k+", "x1ZcP8kSWOK", "zLVcJCkoWRm", "yEIUNEAZLEwqKow5V8kc", "W7BdS8onafq", "gSkqdHdcPa", "WQ4wjW", "lSoAWPdcLCk6WQOXdmkyW51O", "lrPzucZdQ1yi", "mSoeW4FcUCkt", "we8tWQux", "lMbLW5SeW74rW4nqW6yU", "lmovBG/cUa", "sCkscCoGW6G", "W4BcICo0W43dMq", "Ef46WQSX", "wow8OEwMSE++R+AAREEaOUwhGEACP+wsPL4T", "WQuuEmkpWOm", "mCk3WRVcImoamG", "WPKtFqtcQW", "sx7cS1mjWPa+W5/dQcq", "W4vbfNhcO8kIkCkkBCkRWOddHa", "W5nByCkcn8kd", "8lUzRmkc", "g04EW4y", "p2n7WRuT", "WQ/dVu1lWRVdPW", "aNXo", "fmkJWRhcOmo/", "z3hdQKRcSW", "W5tcTXpcGW", "B2dcGui3", "WRWgDHq", "lgbhWRG7W44+wCk7WPeOW7G", "WQqebqT5", "bCkgWRJcHCoO", "sf48WPK5", "W4BdSmoGhey", "WPSmpgxcLCkZ", "WOabDIZcKq", "isFcRmkMW47cPY/cRmo8zZZdNmkSWOtcSW", "W6/cVCoghSkGW7hdSrG", "WQaym8kt", "msVcNmoaW6u", "sSowWPbliW", "oCoEWPBcP8k/WRyfi8knW5e", "aqXWuG8", "cWVcRmkDW70", "WQqsi8k+r1xdSq", "D8khW5JcNrddQW", "W4xcSHdcJSkJW4RcPJDIWQzZcs0", "6lEj5y6u5PA35Pwi", "bSkbjYlcLh0", "44gm6lA95y+3", "hxanW5pdUu0kWQFdGG", "WOHwkSkG", "WRiuwWJcRCo/W5q", "F8kdW4/cIq", "4P2xW4lNR4JLI4RLPzxOTQzIBmoM", "4PILWP7OH4NLRyVKU5JOV7VOO4xPLPlPMl3ML4NPL4tORQJNVy3PLkZOR58", "WR8jcazEfSkh", "WRNdTCkgW5fT", "bXpdHmkzWOy", "5yAamUwmTG", "BfJcVhyO", "F8kdW4lcMW", "pmo8WOZcI8kg", "WQy6W4eS", "W5pdI0lcMCoF", "CZyX", "WPjmmmkM", "WORcTmkMWOHr", "EM5+CLXQWOiQAefn", "qwdcTvClWP0zW7hdPsquW4K/", "m37dQW", "ye16WQNcOsrU", "BKpcRmknWPy", "l8osW5VcSSk9", "WRabeCkAoq", "cSoRWQFcKq", "wCozWQDLdqvcWP4oFKvPC1Dy"], ...function () {
      return [...["5RsY5yQN5Bcj5PY95B2X5AEo", "fmopW6HHicCOla", "tfq2WQK", "ihyiW43dVq", "WRWjga0", "W5eSBse", "W5VdOCoyWOhdRxdcQeGcCG", "W5SgyIpcUa", "WQysW4mwW6G", "WOK0eCkNha", "WQNdQ0PJWR/dVslcG8kfCdCFk8ktW7W", "vmotWRPk", "D0zUWPhcQsPU", "tCoiWRjqgWi", "W4ZdPCoEWQ3dPxdcN0GrDG", "W4xdTmotbvVdVa", "WRiAASkiWQa", "W7pcQmogW4C", "WO5gn8kSWRWyl8kb", "omo6DaW", "W7tcPSoBW5e", "h8kVWQZcKCoO", "lIFcUCkdW4JcOtu", "mYBdR8kRWQy", "fSk8abhcIa", "t0pcPSklWRW", "W4VIN6iT6kYX5Rkl5Awp6lsi772e", "W4KwBCo+W65BumkTk8oJW4ZdQSkP", "5Q265PAO562Q5yMI", "FCkJW57cLW0", "W7eKxHtcSq", "jt/cG8oDW6a", "feqmW4BcMW", "W78Ig8kzWPK", "iIpcOCku", "naPdCIxdUhG", "WOKVs8kSWRG", "W4xcUcVcPSk7", "sxNcO8k1WPy", "mCo6EchcNa3dLMe", "4P+FuoADTEIaLUAUQUEHLowLJEEsPf0", "hmoQWRBcJc4", "4PYfWP/MN47NNkpORkxMSODH", "eSoRW4VcOCkg", "ihJdMXRcLW", "amokW6dcJmkn", "cCobW6H7", "aSkaWONcSSoq", "WQedpCkQWOjWba", "AhXGFHzR", "W67cUCoqnCkXW68", "W4hdR8oNefW", "owJdUdhdLCovWQNdTCoPs8onW5WudSol", "xCkHgmoIW6K", "CKj3WONcNcbMWQq", "zg5J", "WP0By8kIWQWmzcG", "W5dcSCoM", "W6aDpmkIWQm", "WOOrju3cImoP", "dmojW6BcJq", "fCknWQhcQ8oR", "fgWmW57dNr1jW7W", "W67NUz3MNAhVVk7KU5FMRQJMLQlNGyZMNONLKkmWxa", "rhVcLeCY", "WQKhnCkcgW", "aqzduHK", "W4WnBq", "W5WJyJpcKvbLlXddUq", "WOqglNm", "lmkadrpcSW", "W7ddN0VcPmoD", "WQKJW4ahW4u", "lLadW7BcMW", "nXbq", "W4pdKmoRoLq", "W6hdN1FcSa", "5P2R5yIh5zUN57QI5BYM", "lSoAWPdcISk9WQiOlmkQW4rSWRLVcG", "6lAJ5y2j5PEd5PAz", "ufhcGCkUWRK", "cM7dRZhcRG", "W5a/bSkaWRO", "hGjHW79iDCkHW6/dJCkbW6K", "DMJdIvVcOq", "W6NdKutcLmoJwq", "W5iOEGFcVa", "W5FcTcBcH8kg", "Cmk0hmoEW6hdG8os", "E+E6RoADQo+8Uos5GUAUUoAxTUEdLEAETEwrQMOY", "mmousW/cLq", "W4bwvCkbeW", "5BUI6zcp5zgl56AM77+7lq", "5BII6zk356E75yMu8ycEPU+4JG", "WRZdUqjSWO8", "aSkaWQRdVa", "W4hdICoCafq", "adRcOCoGW7a", "oMZdUbe", "FaPMAdW", "W7jxcga", "wuJdTW", "muD/W47dUW", "A3L8Ftu", "W4/dOCoEWOe", "8j6kId7OT5VLJl/MLQNMLym", "W54OCsldKfHTbWxdQa", "W4FcSCopo8k9", "WO3cR8kSWP9lW5SLDSk0", "5REJ5yUp5BE957QO57Iv5P+f", "A13cQCkmWRq", "W7XGfwtcOW", "WPpcUSk9", "WResjSkdf1xdSq", "W41lyCkGlCkp", "eIBdSSkWWQu", "WRyiiGtcQCoOW4K", "bJlcVmobWR7dS8ojWPVcG8oMWQC", "xCotWRDb", "WPGiBSk1WRO", "oWxdP8kUWQ4", "xfi1WQi7vmk0W6VdV8kMW4uJamoMW68", "cwBdNb/dNq", "r3xcSxmgWO0ZW6JdOIqiW64LW4dcNq", "W4y9EdVcIq", "W5lJGBFLVi/LPQZMLldPLA7JGQS", "a3exW5G", "WOhOR5NMSy3LP7BOTBZdH+kEOxm", "W5NdR8oR", "n8okWOBcHW8", "qhXLEIG", "WRxdLb1KWPRcMG", "5RAo5yIO5Bw+5lU7eG", "W6RcQqxcQCkK", "W6ddKfu", "W4i5vtVcKG", "W7JcKSotm8kG", "d8obW6y", "F1euWQim", "nSoQtSkkWOW", "eSkqmHFcGNRcOmkjW7ldGKtdSrJdGCoy", "5Rwk5yIp5BEB57Ik5P6lpW", "gNaf", "rhhcVee", "owldNcJdJa", "WRyiEa", "nMulW4tcGW", "W4CEDGRcLW", "q0ldVLtcT8kdre8", "ngldPr4", "WRrXe8kKWQe", "gNxdGrtdGa", "hmorxmkBWOC", "W4Dcmw/cPa", "W6Hpfwa", "WPBdSCkR", "W77dRmoTWQRdTq", "wwnbBGi", "W4ZdUSodWPdcRcpcIeWqF8kiW7j6we9PtG", "WR7dUCk1W5jH", "W6BcVCohiq", "8l+5T8kE5P636kYN5RA85yI85l6v5OoM5AwW6lwRW5VINO4k", "mspcSCkt", "8kUzR8oO", "n2fhWRym", "Be1QWPJcUGPUWQ8gDmkhuCkXvSosqCo+iCkABa", "W6DEesVcQ8oIn8odf8kXWP/dJa", "5yEb57M+5y67", "uwdcNmkFWOS", "uL/cNmkHWRa", "oConWO3cVmk3", "eSojW6tcHSkrhW", "oSouWPhcImkZWQGK", "W5hdSSopWOVdQa", "bmktWRNdImoH", "WRxdRSk4W7Xo", "WPewimkfWODsvYqeWRanW7OHEmohBmkao8kl", "WRFcJrxdPSoKtCoQamoNtG", "od3dSCkxWPi", "FCoKWRzHoW", "dYVcOSoOW5a", "5BAf6l695Rwz5yIv5lQd6zIS", "ANi7WOy0", "W4JcImoWo8kM", "W7RcQmolW4W", "oSojW7rymG", "imk8dIpcHG", "jCoqWOm", "WRmfpSkmfW", "fCkvWQhdPSo7wCoxdSo0", "c8owW697nG", "rSofWPf9pG", "hSkhWQBcUmoY", "5BE36l6D5RsL5yMv5lUc6zIz", "WQiprbFcVG", "vhFcT3yg", "qMDAWRFcUq", "W7zBc20", "nmosq8kXWRy", "DZ47WOjT", "dZVcOSk2W6q", "4PYnsUAEVEIaOoAUIoEJJowMM+EqSSoF", "FmkWcCoB", "uZPJDr4", "5BIr6zou56Ax5yId", "WOemia", "EYKtWRLN", "WQFcRSkgWQHT", "jCohWOdcJbK", "eM0u", "W5JOR5tMSjVLP7NOT7Xk4P+6W4xMLPlLKztLUiNML5/MJQe", "WPVdVCk4W7PpCSkycCk4WPu", "WOerqmk0WQC", "p3mUW7tdHW", "Aenvrdm", "gmojxCk8WQz2fr3dQ2T3oCozz3DPiCo/WRaq", "W5ZdRSo4eeddS8o/r3pcVSk1WQldJqzkfSk8W5hdS8k1W6pcNCkCW6mCWQxcSdpcHu4uWPPAW43dVeNdR3G", "WOxcSmk8", "WRBdRmkny8oYWR7cOX7dPcK8WRLq", "cSkoWRq", "W7ZdICoEWOZdLG", "WPNcVSk5WQXCW7SLBCk4y2ejuGRcNG", "DuFcNmkaWQNdPSkzq8oEh8o2W7JcSL0rWQxcVbtdICow", "WRldISkFW4vq", "kIFcTSkaW5NcUW", "e3hdQY3dJCkrWQdcPmomaG", "WO4BlCktgG", "WOenySkOWRLphxWA", "cCokW55Xbd8HfN/dJJBcQfHPyKH9", "rh/cJ8kgWPC", "dCopW6XW", "nXPzuZ3dSq", "WOqrmfhcJG", "l8onW4TafW", "WORdRmkLW6LC", "W7FcGLS7W53dN8oGwmkChCoRENW", "WOBdPNjsWPe"], ...function () {
        return ["fCo7W6pcPJtdJuhcUCkXaHbLo8oDivdcPtnf", "q+ITMEAZG+wtMow7Og4", "4PUgWOBORBJLHQVLRAxKUAVLVBtOPANNMlFNJ6RLOiVLJkxPHQ3LKPxLHRROVO/OOiVOHBhMNk7VVQO", "e0tdUaRdPG", "vmkdW7NcIWu", "AEE5VEAFNUAxO+MwGo+9La", "nMJdRrtdK8otWRm", "g2fdWPWw", "WQldOvK", "WQNdGHTlWOBcJ8kX", "WOXknmkT", "CuJcKmkPWR7dSCkFwW", "lutdHq3cRq", "W5JINR956kY/5RkB5AwB6lwd77+T5PAs5zgu5BIj5PEF5O6H776z8j27Ra", "WRyEsa", "5l+Z5OkE5yI18y60Mo+5Sq", "W5fah3/cLG", "eZH4wGy", "zHDdxXTI", "W7OEkCkkWQvtlCoJhSk0", "lmoxWOpcQtldSbS1WOm", "sLBcP0eM", "WRSEwqpcSG", "WQ/dVK5hWRldRqJcMSkcCcS4mq", "WR0QbgpcRG", "WPlcTmkQ", "W51qytFcJSoOWRalWRed", "W6BdJeBcSmoLtG", "WRxdGX1KWOtcICk/DSk8", "tsdcT2/dMmk/WQFcGCoPiu0", "jsdcUCosW7O", "WRhdHZ9BWPm", "b8ohW7j2gZSRpq", "5PYX55Yh5AEG5zc7772S", "W73dSCotWRxdRa", "W7aFo8ko", "5lYs5Oks5yIv", "i8omWRdcQCk5WQaV", "jatdOq", "W4/dUNpcG8oy", "e2iwW5W", "cSojW6G", "5lIi6lke8kEtNq", "tKGHWQuFvq", "p8oasSklWPO", "amkxaZ/cLG", "utqsWRPt", "W7/dLmochfe", "b3elW4FdRdbtW6tcHq", "WOOniq", "vfFdUr7cV8oFz0/cPdBdGdK", "m8oqWPtcTCkx", "WRmfpSkmf3tdSfzLW4JdTSkRW7K", "E1igWOy5", "F+odPEw7KEMsRowtRoENVUodMmoC", "W4BdSmozmvq", "W7eFmmkhWQXBjW", "hhxdUJW", "D2ZdG3hcOq", "nmkQWQRcQ8oY", "W7eYmCkZWPK", "abtcL8kDW6C", "wfO7WRGSuSk1W6i", "hmkBjtRcLgRcRmkm", "WONcUSkKWPLRW6yHFG", "j1aaW7ddRG", "WPSKW6u2W5S", "euyuW7VdRa", "dNylW7hdKq", "WO7dRmkLW74", "aSossSk6WRfgaW", "cCoAW5f0pa", "EvVcMSkOWQJdOa", "WRtdGfndWRK", "heaoW4i", "WOSkjgpcLmo7WR0z", "WPWFzmkYWP0xqcK", "C8kwW4lcIHFcUw1UWQ4HF8kDW4RdVmkblSoGW5mlW4TaWRqKW65UW6Lcg1rnW6P7weebWO/cS8ohW7NdGtRcPJWDW5JcJCoiWOVcHdb8W6BcUCkXyXFcMSoskWzuWPqvWRJdG3pdPrnebSkYWOHUn8ogWQVcI8kiwuC", "pmkRWQ8", "WPzmlG", "b8opW7v0", "W6xcUCoke8kMW7pdVqldOdu3WRj8tby", "Df3cNmkvWQJcVCovgmoMwmkXW6/dUwqEW77cKXldL8knW6OKcSk9yCoiWQvxW6bYW5C6svecAJueWRHhkZDWphX3WOyAtxpdSSoAvaaWWPfUWR/cVXfUyCkiW7pdKb9pW4FcSYldMWpdUq", "lKaIW4BcKW", "qf8yWQSq", "W4NcSqC", "egywW7ZdQGHtW6hcMeb3WOpcOadcHa", "txxcTKeeWP4/", "WOTXhmkNWQ8", "CSkmW4dcMWJdQIyaWQvG", "WRacBGpcO8oOW4K", "WO0CpSkznW", "WRuuAa", "qvZcG2eN", "mcFcTSkdW4JcOq/cVG", "ndFcTSkIW4pcTW", "sf4MWO8xvmkZW67dV8ktW5aihmoL", "vmorWQPddW", "gtZcTG", "g2xdGtFcKW", "W47cPmoxgCkN", "px/dNJxdGq", "W4WxAmo/W6PyxSkXhCo+W7VdImkb", "nv3dUIFcSa", "BYWLWOa", "ECkIdSotW6pdNW", "fSotW7ZcIW", "WP9glCkjWROEd8ktg8oTW6tdPSkHW7zL", "s8opWRzLhGf/WOqu", "hmoOW6lcGSkA", "4PYCW6tNRRBLI5hLPPBOTBK", "W4vpDSk0", "WRejBaVcS8o+W5/cJG", "l8owWPW", "q0JcRMCs", "5P2R556p5AEb5zcC77+J", "nCo1DGZcLrldL0XHWQi", "DSkdW4y", "5RAo5yUL5BEM5lUCW50", "hZZcUmok", "WO7dNY1+WRK", "W6DEcgdcQmkOhSoiv8kMWPxdJ8kf", "emoexCkWWQjCbaRdLMO", "WO8AW7ePW6i", "W7HHWPL1WQlcVmoWvCo4bCkYWQ/cRG", "d1a0W7FdPq", "fSk5WOtdVSoF", "W6pcSSobW4hdUCoqDa", "u8koW77cTa8", "AMb3CG", "ECoPWP5jhG", "W4ldUMFcM8oG", "W78Foa", "DuFcI8kjWQ7dO8kFra", "W6xcUCokgSoWW7tdOa", "hmkoWQpdVmoq", "WRmBsdZdSCo0gCodtSkdWPFdKW", "W7tdRmofh1a", "gNpdMthcUq", "wSotWR1b", "eSkyWQpdQG", "c1qzW4dcKSoOpW", "44o/5O6Z56wT44cr6kYm5yEg6i2K5y67WRWDcKzdfq", "jqVdO8k8", "WOFcLSkVWPT1", "WROnaa1i", "WOiqE8kNWQuxsq1kWOW", "hwxdMa7cJG", "oIpcLCouW4e", "twpcOG", "W6JdJuBcGCo3", "cSoaW7D0gcCHchhdMW", "gvijW4RcKmo1", "WQRdMaG", "yKzQWRZcQZ1IWRCBzCkmr8kSwmos", "iSkXWQBcPmojoa", "W4LAE8k3kSoDeNZcQMDHvxvaimk0WPRcOHdcUSkZWOZcImoT", "eColW7bGet0X", "kZhcVW", "W7fpexe", "W45Sp1tcGW", "hbvGW6jjfCoO", "ifOfW47dRa", "BWbFvX0", "W4VdVu3cImoe", "WRKeEW7cSmoZW47cHmoZW4e", "eSkSWPFdJCoS", "W7HmwfqmxmodnH3cJCkpWRNcTa", "laVdPW", "lxddHJ7cTW", "BCooWPbcpq", "WQLGlCksWRu", "fmkeWQpdO8o0xCoB", "W6ddVgBcN8oh", "AezTWO7cQs5U", "uSknW6BcVWm", "W7lcLSoKW4JdRq", "W6qOztpcMG", "FJOIWOfcW5KCW5joW4y", "iXVdKCkmWQ4", "wSoDWQDf", "uMRdMKxcNa", "kmoSW7nudG", "WOSci2e", "egFdUJlcMG", "5ys7zowmM/c3VBy", "WO9cmmk8", "WQSWW5WdW7ldUSkHD8o+fSkTWOhcJL3dSW", "WP5kiq", "W4RdRCo1W51DW5W5qCkMDq", "ECo5WOC", "W6pdG8oypem", "WPNcOCkKWP0tWQ8OFSk3E3K0wuddKCkyBa", "FM56yYvSWP0M", "WOXgkSk8", "r0ldOfZcS8ksAa", "5lUL5PEE5BAG566Y", "DJCIWO1gW5elW59xW5aFzSoGWOL+WQpdV05WwW", "WR7dJCk/W5Hs", "tComWR9ngG", "s15WzGS", "ydDlsIC", "W5pcLSo0gCkJ", "BoocTUE5NoAEVoAuIEMxLUocOa", "WQpdR0zUWRNdVY7cMq", "WPtdSCoHW7bwACkF", "ewVdOJBdSa", "W4bnE8kUl8kossRcMgnPd20D", "lXbCusC", "w14QWRHxs8k0W6BdS8kR", "WR/dJ2XoWPy", "W5lcLaRcOCk8", "k3DI", "W6tcISoMW6ddPq", "W6NdM03cTSoLqW", "W6mBBt7cVW", "WOOvp0xcRW", "WPddStP1WOC", "W7fEtSkoiq", "puWlW4RcJW", "4PYnsUEVQEwlREwNMUI2H8k/gCoF", "WQxdGLDGWQG", "fKaxW4y", "ExPGFW", "k8o6ArNcRrldNMG", "DY0IWPHhWOPhWOrMW5iFmSoOW7r/WRlcNurSqMBcL04b", "44g25O2256A144oY6kYi5ywQ6iYg5yY+W7aQW6FcLGVdVG", "WOhdJ29GWRy", "adRcK8ovW4i", "o2faWOeq", "oSo3BWlcIW", "xceBW6jVWO56", "pEA1KEwiV+wNT+EcGoEkPa", "oNXqWQyo", "5Q6t5Pw+562+5yMD"];
      }()];
    }()];
  }();
  iiiliill = function () {
    return l1iIIlIl;
  };
  return iiiliill();
}
;
const isNotify = process[I1Ii111l(566, "Tk@v")][I1Ii111l(977, "E[%u")] === I1Ii111l(483, "Tk@v"),
  activityUrl = I1Ii111l(671, "[8&D") + token,
  signStatusMessages = {
    403030023: I1Ii111l(790, "IkW%"),
    407100001: I1Ii111l(357, "yN&!"),
    407100002: I1Ii111l(466, "[d)$"),
    407000007: I1Ii111l(436, "kR(!"),
    402: I1Ii111l(853, "T9@E"),
    "-1": I1Ii111l(434, "bfO#")
  },
  cookiesArr = Object[I1Ii111l(426, "T9@E")](jdCookie)[I1Ii111l(412, "yN&!")](iilII1Il => jdCookie[iilII1Il])[I1Ii111l(983, "(lwu")](I1IiiIll => I1IiiIll);
!cookiesArr[0] && ($[I1Ii111l(499, "Tk@v")]($[I1Ii111l(511, "(lwu")], I1Ii111l(736, "T9@E")), process[I1Ii111l(943, "BLj[")](1));
!(async () => {
  const I1III1ii = I1Ii111l,
    I11II11 = {
      "uipDc": I1III1ii(888, "28fd"),
      "UBpdO": function (ll1III1, li11I11l) {
        return ll1III1 + li11I11l;
      },
      "krgQu": I1III1ii(596, "bfO#"),
      "VqyUl": function (ilIiIii, Iliiii1l) {
        return ilIiIii(Iliiii1l);
      },
      "XwNQY": function (Ili1Iili, iliiiiIl) {
        return Ili1Iili >= iliiiiIl;
      },
      "jmyga": function (liIlllII, i1ll1Iil) {
        return liIlllII === i1ll1Iil;
      },
      "gMJuN": I1III1ii(795, "(N[a"),
      "dnbJU": I1III1ii(868, "YI]x"),
      "zrekh": function (i1ll, iIlIIlii) {
        return i1ll === iIlIIlii;
      },
      "FySDm": I1III1ii(661, "Tk@v"),
      "hKmkM": I1III1ii(682, "Czze"),
      "spUDf": I1III1ii(335, "kR(!"),
      "BjPwL": function (IlIi11II, I1ll1l) {
        return IlIi11II > I1ll1l;
      },
      "NvtDk": function (IIll1l1i, IlI1l1ii) {
        return IIll1l1i === IlI1l1ii;
      },
      "PSbMg": I1III1ii(890, "YI]x"),
      "UlGJu": I1III1ii(821, "MG@5"),
      "vimMf": function (IIi1ili, IIIii) {
        return IIi1ili(IIIii);
      },
      "Atrcm": function (lIlllIi, l11lli1I) {
        return lIlllIi > l11lli1I;
      },
      "HlHNk": function (Iiil1l1i, il1IllII) {
        return Iiil1l1i !== il1IllII;
      },
      "zxsLC": I1III1ii(460, "yN&!"),
      "VFUxm": function (Ilili1ll) {
        return Ilili1ll();
      }
    };
  try {
    notify[I1III1ii(974, "BLj[")]({
      "title": $[I1III1ii(816, "DPt8")]
    });
    if (!token) {
      console[I1III1ii(494, "L7xV")](I11II11[I1III1ii(589, "T9@E")]);
      return;
    }
    $[I1III1ii(883, "6n)c")] = null;
    if (runInterval) try {
      const iiiIii1i = I11II11[I1III1ii(628, "8zew")](parseInt, runInterval);
      if (I11II11[I1III1ii(862, "4lIj")](iiiIii1i, 0)) {
        if (I11II11[I1III1ii(691, ")2&@")](I11II11[I1III1ii(775, "BLj[")], I11II11[I1III1ii(653, "&7wW")])) {
          II1IlIli = I11II11[I1III1ii(454, "eaW5")], Ili11ll = [iIII1IIi[I1III1ii(686, "[d)$")]];
          if (!ilil1ilI[iil1Iii[I1III1ii(723, "yN&!")]]) iIIii1ii = true;
        } else $[I1III1ii(914, "Tk@v")] = iiiIii1i;
      }
    } catch {
      I11II11[I1III1ii(530, "8zew")](I11II11[I1III1ii(338, "TXqj")], I11II11[I1III1ii(929, ")2lA")]) ? (i1llil1i[I1III1ii(485, "6n)c")](I1III1ii(518, "VVBt") + iiii11Il[I1III1ii(679, "lww4")]), lillli[I1III1ii(425, "%WYZ")] = true) : console[I1III1ii(512, "4lIj")](I11II11[I1III1ii(649, "6n)c")]);
    }
    try {
      const iIiI1iI = I11II11[I1III1ii(430, "DPt8")](parseInt, signHotMaxRetryTimes);
      signHotMaxRetryTimes = I11II11[I1III1ii(901, "0C!G")](iIiI1iI, 0) ? iIiI1iI : 0;
    } catch {
      signHotMaxRetryTimes = 3;
    }
    try {
      if (I11II11[I1III1ii(526, "E[%u")](I11II11[I1III1ii(659, "Tk@v")], I11II11[I1III1ii(513, "8zew")])) i11lii1l[I1III1ii(602, "MG@5")](lil1i1I1[I1III1ii(762, "TXqj")](I1i1i1l => (I1i1i1l[I1III1ii(500, "e05e")] === 0 ? I1III1ii(385, "%WYZ") : "\u8FDE\u7EED" + (I1i1i1l[I1III1ii(391, "0cIa")] < 10 ? " " : "") + I1i1i1l[I1III1ii(333, "[8&D")] + "\u5929") + "\uFF1A" + I1i1i1l[I1III1ii(527, "0C!G")][I1III1ii(417, "bfO#")]("\uFF0C"))[I1III1ii(403, "L7xV")]("\n")), I1II1IIi[I1III1ii(1033, "lww4")](I11II11[I1III1ii(1018, "&7wW")]("\n", i1ii1lii[I1III1ii(711, "[8&D")](lllI111l => "\u3010" + (lllI111l[I1III1ii(849, "DPt8")] === 0 ? I1III1ii(843, "T9@E") : "\u8FDE\u7EED" + (lllI111l[I1III1ii(705, "s2#N")] < 10 ? " " : "") + lllI111l[I1III1ii(1015, "[d)$")] + "\u5929") + "\u3011" + lllI111l[I1III1ii(863, "1CHN")][I1III1ii(506, ")2lA")]("\uFF0C"))[I1III1ii(924, "YI]x")]("\n")));else {
        const iiII111i = I11II11[I1III1ii(847, "1CHN")](parseInt, accountThreads);
        I11II11[I1III1ii(1002, "[d)$")](iiII111i, 0) && I11II11[I1III1ii(722, "[8&D")](iiII111i, 1) && (I11II11[I1III1ii(985, "E[%u")](I11II11[I1III1ii(953, "6n)c")], I11II11[I1III1ii(537, "eaW5")]) ? accountThreads = iiII111i : IiIil11I[I1III1ii(699, "i^OM")](lIil1IIl, ilIIl1));
      }
    } catch {
      accountThreads = 1;
    }
    await I11II11[I1III1ii(811, "Vink")](Main), isNotify && notify[I1III1ii(371, "8zew")]() && (await notify[I1III1ii(936, "i^OM")]());
  } catch (iillII1i) {
    console[I1III1ii(933, "E[%u")](I1III1ii(878, "6n)c") + iillII1i);
  }
})()[I1Ii111l(850, "Ycmy")](liiil1li => $[I1Ii111l(442, "kR(!")](liiil1li))[I1Ii111l(958, "4lIj")](() => $[I1Ii111l(733, ")2&@")]());
async function Main() {
  const l1llIIIl = I1Ii111l,
    Iiil11l1 = {
      "oeHFE": l1llIIIl(820, "bfO#"),
      "Eujhb": function (il1iil, il1lilI1) {
        return il1iil(il1lilI1);
      },
      "rLxvM": function (lliiIii1, liIiIi1I) {
        return lliiIii1 > liIiIi1I;
      },
      "tMDBy": function (I11i111l, ll1il) {
        return I11i111l !== ll1il;
      },
      "WkPok": function (II1IIII, lIiiI1iI, IIli1iii) {
        return II1IIII(lIiiI1iI, IIli1iii);
      },
      "WItlV": function (iliIlIi1, i1l11Ii) {
        return iliIlIi1 === i1l11Ii;
      },
      "COYks": function (iii1IIli, ilIIili) {
        return iii1IIli === ilIIili;
      },
      "Pshvi": l1llIIIl(410, "i^OM"),
      "jGkTy": l1llIIIl(921, "%WYZ"),
      "UsyjP": l1llIIIl(832, "28fd"),
      "LRJlx": function (iIl1Iil, i11iii1i, liIIIiIl, I1Iil1i1) {
        return iIl1Iil(i11iii1i, liIIIiIl, I1Iil1i1);
      },
      "svcss": l1llIIIl(978, "6n)c"),
      "SLemN": l1llIIIl(861, "&7wW"),
      "HGOnO": l1llIIIl(825, "elgH"),
      "GDDJq": function (iil1Iiil, IiIllIi) {
        return iil1Iiil < IiIllIi;
      },
      "fcQRC": l1llIIIl(840, "L7xV"),
      "PpAIx": l1llIIIl(864, "0C!G"),
      "Qauzs": function (l1iIili1, iiii1i11) {
        return l1iIili1(iiii1i11);
      },
      "wwXjm": l1llIIIl(842, "28fd"),
      "AlIjb": l1llIIIl(543, "YI]x"),
      "WYgse": l1llIIIl(918, "Uyh7"),
      "svFlK": l1llIIIl(456, "(N[a"),
      "eqVSn": function (iIlIII, lili111) {
        return iIlIII === lili111;
      },
      "XnnzR": l1llIIIl(630, "(N[a"),
      "qAXtB": function (liI1i1Ii, lliI1l) {
        return liI1i1Ii / lliI1l;
      },
      "VaXed": l1llIIIl(892, "Uyh7"),
      "msePf": function (I1lllI, iI1IiIll) {
        return I1lllI > iI1IiIll;
      },
      "XlUGw": function (Iili1lIi, II1l1iiI) {
        return Iili1lIi + II1l1iiI;
      },
      "LxiKb": function (IIill11, IIl1Ii11) {
        return IIill11 === IIl1Ii11;
      },
      "Mlzeh": l1llIIIl(893, "[d)$"),
      "SjNng": l1llIIIl(1029, "dj0d"),
      "uiBqQ": function (iIIi111I, iIlliil1) {
        return iIIi111I > iIlliil1;
      },
      "YdgNi": l1llIIIl(531, "1CHN"),
      "Optow": l1llIIIl(386, "[8&D"),
      "uUNag": function (I11IiIll, iliI1il) {
        return I11IiIll === iliI1il;
      },
      "lRDrP": l1llIIIl(498, "BDOF"),
      "IsvmY": function (I11ili1I, llIiIl1i) {
        return I11ili1I > llIiIl1i;
      },
      "xyBYP": function (lili11l, l1Iilll1) {
        return lili11l - l1Iilll1;
      }
    };
  let i11illII = true;
  token[l1llIIIl(657, "YI]x")](":") && Iiil11l1[l1llIIIl(577, "8zew")](token[l1llIIIl(793, ")2&@")](":")[l1llIIIl(471, "s2#N")], 3) && (Iiil11l1[l1llIIIl(717, "0C%t")](Iiil11l1[l1llIIIl(624, "eaW5")], Iiil11l1[l1llIIIl(365, "0C%t")]) ? i1l11lll[l1llIIIl(635, "bfO#")](l1llIIIl(917, "e05e") + iIIillll) : token = token[l1llIIIl(481, "%WYZ")](":")[0]);
  if (Iiil11l1[l1llIIIl(807, "j1AA")](token[l1llIIIl(1032, "[8&D")], 32) || !/^[A-Z0-9]*$/[l1llIIIl(788, "Czze")](token)) {
    console[l1llIIIl(544, "0C!G")](l1llIIIl(880, "8zew"));
    return;
  }
  $[l1llIIIl(834, "(N[a")] = token, $["UA"] = common[l1llIIIl(443, "%WYZ")](Iiil11l1[l1llIIIl(827, "elgH")]), {
    jsToken: $[l1llIIIl(631, "0C!G")]
  } = await Iiil11l1[l1llIIIl(507, "Czze")](jsTk, $["UA"], Iiil11l1[l1llIIIl(476, "CsB(")], {
    "bizId": Iiil11l1[l1llIIIl(472, "TXqj")],
    "v": Iiil11l1[l1llIIIl(611, "dj0d")],
    "qs": l1llIIIl(528, "bfO#") + $[l1llIIIl(950, "TXqj")]
  });
  let IiIli1II = 0;
  $[l1llIIIl(497, "YI]x")] = "", $[l1llIIIl(1003, "e05e")] = false;
  const l11lIIiI = 10;
  while (!$[l1llIIIl(675, "VVBt")] && Iiil11l1[l1llIIIl(725, "kR(!")](IiIli1II, l11lIIiI) && !$[l1llIIIl(683, "[8&D")]) {
    const Il1li1I = Iiil11l1[l1llIIIl(961, "VVBt")][l1llIIIl(1020, "6n)c")]("|");
    let l1i1ilIl = 0;
    while (true) {
      switch (Il1li1I[l1i1ilIl++]) {
        case "0":
          IiIli1II++;
          continue;
        case "1":
          await $[l1llIIIl(946, "4lIj")](1000);
          continue;
        case "2":
          Iiil11l1[l1llIIIl(441, "BLj[")](IiIli1II, l11lIIiI) && (console[l1llIIIl(966, "0C%t")]($[l1llIIIl(951, ")2&@")] || Iiil11l1[l1llIIIl(812, "s2#N")]), $[l1llIIIl(666, "E[%u")] = "");
          continue;
        case "3":
          $[l1llIIIl(409, ")2lA")] = "";
          continue;
        case "4":
          await Iiil11l1[l1llIIIl(903, "E[%u")](sendRequest, Iiil11l1[l1llIIIl(949, "kR(!")]);
          continue;
      }
      break;
    }
  }
  if (!$[l1llIIIl(899, "[d)$")]) return;
  $[l1llIIIl(991, "dj0d")] = $[l1llIIIl(748, "Ycmy")][l1llIIIl(505, "BLj[")], $[l1llIIIl(759, "[d)$")] = $[l1llIIIl(480, "e05e")]["id"];
  if (!$[l1llIIIl(916, "yN&!")] || !$[l1llIIIl(568, "4lIj")] || $[l1llIIIl(740, "CsB(")]) {
    if (Iiil11l1[l1llIIIl(400, "bfO#")](Iiil11l1[l1llIIIl(510, "(lwu")], Iiil11l1[l1llIIIl(731, "6n)c")])) il1ililI[l1llIIIl(1009, "MG@5")](II1iIi1i, ill1l1l1);else return;
  }
  const liiIlI1I = $[l1llIIIl(959, "(lwu")][l1llIIIl(801, "s2#N")],
    ii11lI = $[l1llIIIl(578, "W^Hz")][l1llIIIl(891, "L7xV")] || [],
    I111lll1 = $[l1llIIIl(701, "Czze")][l1llIIIl(646, "28fd")] || [],
    II11Iiil = $[l1llIIIl(680, "Tk@v")][l1llIIIl(465, "W^Hz")],
    i11IlII1 = $[l1llIIIl(781, "0C%t")][l1llIIIl(351, "Ycmy")],
    I1111lil = $[l1llIIIl(973, "elgH")](Iiil11l1[l1llIIIl(835, ")2&@")], II11Iiil),
    IiIiilIl = $[l1llIIIl(604, "Czze")](Iiil11l1[l1llIIIl(756, "Tk@v")], i11IlII1);
  let IiIill1 = false;
  const I1iII1iI = [],
    lIIl1II = [...I111lll1, ...ii11lI];
  for (const l1Iill of lIIl1II) {
    const IiiilIi1 = l1Iill[l1llIIIl(389, "DPt8")],
      Ii1illii = l1Iill[l1llIIIl(926, "YI]x")] || [],
      iilI1iI1 = [];
    for (const IiI1II1l of Ii1illii) {
      if (Iiil11l1[l1llIIIl(439, "Uyh7")](Iiil11l1[l1llIIIl(354, "28fd")], Iiil11l1[l1llIIIl(444, "lww4")])) {
        let Ili1lliI = "";
        const iI111III = IiI1II1l[l1llIIIl(669, "T9@E")],
          llllliii = IiI1II1l[l1llIIIl(734, "1CHN")],
          iiI11Iii = IiI1II1l[l1llIIIl(894, "Lhk^")],
          liiil1I = IiI1II1l[l1llIIIl(370, ")2&@")],
          iI1li1i = Iiil11l1[l1llIIIl(741, "3T[h")](liiil1I, 5);
        switch (llllliii) {
          case 1:
            Ili1lliI = Iiil11l1[l1llIIIl(521, "elgH")];
            break;
          case 4:
            Ili1lliI = iI111III + "\u4EAC\u8C46";
            break;
          case 6:
            Ili1lliI = iI111III + l1llIIIl(561, "(lwu");
            break;
          case 9:
            Ili1lliI = "" + IiI1II1l?.[l1llIIIl(579, "E[%u")][0]?.[l1llIIIl(980, "Tk@v")];
            break;
          case 10:
            Ili1lliI = iI111III + l1llIIIl(339, "28fd");
            break;
          case 14:
            Ili1lliI = Iiil11l1[l1llIIIl(870, "IkW%")](iI111III, 100) + l1llIIIl(524, "VVBt");
            break;
          default:
            Ili1lliI = l1llIIIl(709, "TXqj") + llllliii + "\uFF09";
        }
        if (![1, 6][l1llIIIl(727, "E[%u")](llllliii) && !iI1li1i) IiIill1 = true;
        iilI1iI1[l1llIIIl(1013, "lww4")](Ili1lliI + "\uFF08\u5171" + iiI11Iii + "\u4EFD" + (iI1li1i ? Iiil11l1[l1llIIIl(677, "DPt8")] : "") + "\uFF09");
      } else l1I11Il[l1llIIIl(752, "0cIa")](ili1IIii[l1llIIIl(587, "L7xV")], Iiil11l1[l1llIIIl(988, "YI]x")]), lliI1i1I[l1llIIIl(355, "(Z8e")](1);
    }
    I1iII1iI[l1llIIIl(817, "yN&!")]({
      "days": IiiilIi1,
      "prize": iilI1iI1,
      "havePrize": IiIill1
    });
  }
  const ll1Ii1 = await common[l1llIIIl(990, "0C!G")]({
    "venderId": $[l1llIIIl(413, "CsB(")]
  });
  console[l1llIIIl(619, "W^Hz")]((ll1Ii1 ? l1llIIIl(449, "YI]x") + ll1Ii1 + "\n" : "") + l1llIIIl(875, "lww4") + I1111lil + l1llIIIl(599, "L7xV") + IiIiilIl), notify[l1llIIIl(715, "(lwu")]((ll1Ii1 ? l1llIIIl(648, "YI]x") + ll1Ii1 : "") + l1llIIIl(482, "[d)$") + I1111lil + l1llIIIl(797, "bfO#") + IiIiilIl);
  Iiil11l1[l1llIIIl(744, "kR(!")](I1iII1iI[l1llIIIl(588, "dj0d")], 0) && (console[l1llIIIl(544, "0C!G")](I1iII1iI[l1llIIIl(989, "28fd")](I1i1lI1 => (I1i1lI1[l1llIIIl(362, "%WYZ")] === 0 ? l1llIIIl(887, "e05e") : "\u8FDE\u7EED" + (I1i1lI1[l1llIIIl(377, "j1AA")] < 10 ? " " : "") + I1i1lI1[l1llIIIl(500, "e05e")] + "\u5929") + "\uFF1A" + I1i1lI1[l1llIIIl(545, "28fd")][l1llIIIl(346, "Czze")]("\uFF0C"))[l1llIIIl(368, ")2&@")]("\n")), notify[l1llIIIl(349, "e05e")](Iiil11l1[l1llIIIl(401, "3T[h")]("\n", I1iII1iI[l1llIIIl(469, "W^Hz")](IlIIIll1 => "\u3010" + (IlIIIll1[l1llIIIl(898, "6n)c")] === 0 ? l1llIIIl(828, "^Uyj") : "\u8FDE\u7EED" + (IlIIIll1[l1llIIIl(452, "1CHN")] < 10 ? " " : "") + IlIIIll1[l1llIIIl(500, "e05e")] + "\u5929") + "\u3011" + IlIIIll1[l1llIIIl(591, "4lIj")][l1llIIIl(343, "0C%t")]("\uFF0C"))[l1llIIIl(713, "eaW5")]("\n"))));
  console[l1llIIIl(962, "Lhk^")](""), notify[l1llIIIl(617, "MG@5")]("\n\n" + activityUrl);
  const I1IIlI1 = Date[l1llIIIl(502, "[d)$")]();
  if (II11Iiil && Iiil11l1[l1llIIIl(553, "Ycmy")](I1IIlI1, II11Iiil)) {
    if (Iiil11l1[l1llIIIl(694, "VVBt")](Iiil11l1[l1llIIIl(583, "28fd")], Iiil11l1[l1llIIIl(382, "E[%u")])) {
      const IliIl1ll = Iiil11l1[l1llIIIl(555, "BDOF")](i11l1II, illI1lli);
      Iiil11l1[l1llIIIl(380, "TXqj")](IliIl1ll, 0) && Iiil11l1[l1llIIIl(760, "1CHN")](IliIl1ll, 1) && (III11llI = IliIl1ll);
    } else console[l1llIIIl(544, "0C!G")](l1llIIIl(963, "Vink") + I1111lil + l1llIIIl(999, "DPt8")), i11illII = false;
  }
  if (i11IlII1 && Iiil11l1[l1llIIIl(822, "eaW5")](I1IIlI1, i11IlII1)) Iiil11l1[l1llIIIl(437, "E[%u")](Iiil11l1[l1llIIIl(373, "CsB(")], Iiil11l1[l1llIIIl(532, "4lIj")]) ? (IiiIi1Ii[l1llIIIl(485, "6n)c")](il11i1Ii), I1l11I1l && (lIi1ill1[l1llIIIl(603, "Vink")] = true)) : (console[l1llIIIl(619, "W^Hz")](l1llIIIl(489, "6n)c") + IiIiilIl + l1llIIIl(420, "MG@5")), i11illII = false);else Iiil11l1[l1llIIIl(902, "Lhk^")](liiIlI1I, 3) && (console[l1llIIIl(726, "Uyh7")](Iiil11l1[l1llIIIl(390, "Uyh7")]), i11illII = false);
  !IiIill1 && (i11illII = false);
  Iiil11l1[l1llIIIl(487, "yN&!")](I1iII1iI[l1llIIIl(808, "kR(!")], 0) && ($[l1llIIIl(889, "&7wW")] = I1iII1iI[0][l1llIIIl(945, ")2&@")], $[l1llIIIl(798, "MG@5")] = I1iII1iI[Iiil11l1[l1llIIIl(548, ")2&@")](I1iII1iI[l1llIIIl(581, "0cIa")], 1)][l1llIIIl(517, "VVBt")]);
  if (!i11illII) return;
  await common[l1llIIIl(419, "Tk@v")](accountThreads, cookiesArr, async (ll1liill, Il1iIIii) => {
    const l1ilIl1 = l1llIIIl;
    await Iiil11l1[l1ilIl1(479, ")2lA")](concMain, ll1liill, Il1iIIii);
    if ($[l1ilIl1(658, "W^Hz")]) await $[l1ilIl1(882, "T9@E")]($[l1ilIl1(358, "L7xV")]);
  });
}
async function concMain(iI1i1IiI, l1iIIl1) {
  const i11IIlli = I1Ii111l,
    i1iii1lI = {
      "JTNic": i11IIlli(1004, "(lwu"),
      "pXWqJ": i11IIlli(954, "Vink"),
      "zNmae": function (IlIIlI11, liiIli11) {
        return IlIIlI11 !== liiIli11;
      },
      "cXkUw": i11IIlli(877, "Ycmy"),
      "HpLIN": i11IIlli(428, "kR(!"),
      "UPKPM": i11IIlli(478, "IkW%"),
      "wtAio": function (Il1lilIl, iII1I1Ii) {
        return Il1lilIl === iII1I1Ii;
      },
      "eBENV": function (l1lliII, iII11iIl) {
        return l1lliII > iII11iIl;
      },
      "zopsE": function (i1ii1Iii, I11lil1i) {
        return i1ii1Iii !== I11lil1i;
      },
      "evhET": i11IIlli(504, "%WYZ"),
      "dkQuW": i11IIlli(939, "s2#N"),
      "jFbsC": i11IIlli(796, "VVBt"),
      "RDASw": i11IIlli(609, "CsB("),
      "VuaHN": function (iii1I1il, I1lII1li) {
        return iii1I1il / I1lII1li;
      },
      "iGFid": i11IIlli(884, "j1AA"),
      "WqMtJ": function (iIIilliI, i11i1Ii1) {
        return iIIilliI > i11i1Ii1;
      },
      "NkeBi": function (liiIl, ll1ii1lI) {
        return liiIl !== ll1ii1lI;
      },
      "YguMF": i11IIlli(381, "YI]x"),
      "qARlJ": i11IIlli(724, ")2&@"),
      "YHNMq": i11IIlli(590, "L7xV"),
      "nKvqE": i11IIlli(920, "8zew"),
      "cvLVZ": i11IIlli(981, "MG@5"),
      "YuKER": function (il1l1ill, illi1Il) {
        return il1l1ill === illi1Il;
      },
      "nyVtz": i11IIlli(652, "BLj["),
      "tIPuf": i11IIlli(638, "BDOF"),
      "PlRys": i11IIlli(965, "[d)$"),
      "DgyAX": function (l1IlIil1, illiIiiI) {
        return l1IlIil1 === illiIiiI;
      },
      "sQLpZ": i11IIlli(773, "TXqj"),
      "dfLid": i11IIlli(809, "%WYZ"),
      "NmDRg": function (l1IIilll, lIiiII1i) {
        return l1IIilll > lIiiII1i;
      },
      "DSsKk": function (illIii1, iiiIil1i) {
        return illIii1 >= iiiIil1i;
      },
      "bQFjq": i11IIlli(1027, ")2&@"),
      "syxiT": i11IIlli(833, "4^74"),
      "QCtZl": i11IIlli(785, "6n)c"),
      "OpDpR": i11IIlli(784, ")2&@"),
      "XYHbu": i11IIlli(910, "CsB("),
      "jpbti": i11IIlli(925, "elgH"),
      "Emqix": i11IIlli(522, "Ycmy"),
      "MItzP": function (IlIiili, iI1i1iI1) {
        return IlIiili(iI1i1iI1);
      },
      "HTSVi": i11IIlli(806, "4^74"),
      "bgWlY": i11IIlli(750, "s2#N"),
      "GMgSX": i11IIlli(330, "Tk@v"),
      "iRMNp": i11IIlli(573, "6n)c"),
      "UdHcW": function (iIlIiIli, I1iiiII) {
        return iIlIiIli(I1iiiII);
      },
      "azKMv": i11IIlli(942, "4^74"),
      "tgrDc": function (l1l1l11, li1ll1I) {
        return l1l1l11 / li1ll1I;
      },
      "IyzQI": i11IIlli(586, "E[%u"),
      "jtPaH": i11IIlli(879, "L7xV"),
      "FVOzJ": i11IIlli(414, "4lIj"),
      "OfnFF": i11IIlli(515, "8zew"),
      "TbBXM": i11IIlli(594, "(Z8e"),
      "hstoz": i11IIlli(582, "3T[h"),
      "FHhvP": i11IIlli(803, "IkW%"),
      "ZytfP": i11IIlli(523, "(lwu"),
      "RIScU": i11IIlli(960, "eaW5"),
      "RVzza": i11IIlli(799, "4lIj"),
      "ubEiw": i11IIlli(348, "yN&!"),
      "hxnnB": function (IIiI1l1i, l1i1liIi) {
        return IIiI1l1i < l1i1liIi;
      },
      "vVjJq": i11IIlli(982, "DPt8"),
      "WehgI": i11IIlli(823, "elgH"),
      "SrCfS": function (I1iI1lIi, lIiIlII1, ill11lii) {
        return I1iI1lIi(lIiIlII1, ill11lii);
      },
      "uChMT": function (i1Iiiii, IIlIi11i) {
        return i1Iiiii >= IIlIi11i;
      },
      "HhBsS": i11IIlli(372, "6n)c"),
      "PjFnt": function (ill11ii1, ilIliiIl) {
        return ill11ii1 === ilIliiIl;
      },
      "crREw": i11IIlli(650, "Uyh7"),
      "JCFQn": i11IIlli(857, ")2&@"),
      "hgmjY": i11IIlli(360, "Tk@v"),
      "ItTQB": i11IIlli(886, "4lIj"),
      "tnjPH": function (iIli1l11, I1IlIl1l, ll11liI, I1li11i1) {
        return iIli1l11(I1IlIl1l, ll11liI, I1li11i1);
      },
      "amcSB": i11IIlli(676, "E[%u"),
      "OaOqa": i11IIlli(839, "BLj["),
      "NkioE": i11IIlli(755, "IkW%"),
      "joMrn": function (iliiIII1, ii1iII1l) {
        return iliiIII1 > ii1iII1l;
      },
      "bBnXP": function (II1iIil, I1l11l) {
        return II1iIil(I1l11l);
      },
      "yMbvJ": function (ilIiIi1i, lllIl111) {
        return ilIiIi1i(lllIl111);
      }
    };
  if ($[i11IIlli(969, "(Z8e")]) return {
    "runEnd": true
  };
  const iIili1l = i1iii1lI[i11IIlli(597, ")2lA")](decodeURIComponent, common[i11IIlli(690, "IkW%")](iI1i1IiI, i1iii1lI[i11IIlli(714, "Vink")])),
    i1ii1l1 = i11IIlli(329, "^Uyj") + l1iIIl1 + "\u3011" + iIili1l + "\uFF1A",
    lI1lili = notify[i11IIlli(621, "kR(!")](l1iIIl1, iIili1l),
    ll1i1il1 = await common[i11IIlli(435, "0C!G")](iI1i1IiI);
  if (!ll1i1il1 && i1iii1lI[i11IIlli(495, "IkW%")](typeof ll1i1il1, i1iii1lI[i11IIlli(695, ")2lA")])) {
    if (i1iii1lI[i11IIlli(451, "Vink")](i1iii1lI[i11IIlli(366, "28fd")], i1iii1lI[i11IIlli(556, "4^74")])) {
      console[i11IIlli(458, "BLj[")](i1ii1l1 + i11IIlli(462, "Ycmy")), lI1lili[i11IIlli(707, "0C!G")](i1iii1lI[i11IIlli(353, "bfO#")]);
      return;
    } else delete llliilii[i11IIlli(433, "kR(!")], delete l1IIiI11[i11IIlli(684, "[d)$")][i1iii1lI[i11IIlli(540, "VVBt")]];
  }
  const iillliI1 = common[i11IIlli(1019, "IkW%")](iIili1l),
    {
      jsToken: Il1iIiIl
    } = await i1iii1lI[i11IIlli(601, "elgH")](jsTk, iillliI1, i1iii1lI[i11IIlli(957, "0C!G")], {
      "bizId": i1iii1lI[i11IIlli(598, "[8&D")],
      "v": i1iii1lI[i11IIlli(685, "28fd")],
      "qs": i11IIlli(1021, "T9@E") + $[i11IIlli(408, "6n)c")]
    });
  if ($[i11IIlli(749, "&7wW")]) return {
    "runEnd": true
  };
  let iIIl1lI = "",
    ll1ii1i = [],
    Ill1iII1 = false;
  await i1iii1lI[i11IIlli(1030, "0cIa")](iiili1Il, i1iii1lI[i11IIlli(606, "3T[h")]);
  if ($[i11IIlli(656, "IkW%")]) await $[i11IIlli(753, "(lwu")]($[i11IIlli(818, "^Uyj")]);
  if (Ill1iII1 && i1iii1lI[i11IIlli(569, "CsB(")](signHotMaxRetryTimes, 0)) {
    let I1ili1l1 = 0;
    while (i1iii1lI[i11IIlli(1017, "Lhk^")](I1ili1l1, signHotMaxRetryTimes)) {
      if ($[i11IIlli(1005, "s2#N")]) return {
        "runEnd": true
      };
      await i1iii1lI[i11IIlli(654, "Uyh7")](iiili1Il, i1iii1lI[i11IIlli(937, "Tk@v")]);
      if (!Ill1iII1) break;
      if ($[i11IIlli(818, "^Uyj")]) await $[i11IIlli(780, "Czze")]($[i11IIlli(411, "Ycmy")]);
      I1ili1l1++;
    }
  }
  if (iIIl1lI) {
    await i1iii1lI[i11IIlli(738, "W^Hz")](iiili1Il, i1iii1lI[i11IIlli(1008, "elgH")]);
    const i1IIIl = "" + iIIl1lI + (i1iii1lI[i11IIlli(905, ")2&@")](ll1ii1i[i11IIlli(612, "(N[a")], 0) ? "\uFF08" + ll1ii1i[i11IIlli(541, "j1AA")]("\uFF0C") + "\uFF09" : "");
    console[i11IIlli(458, "BLj[")]("" + i1ii1l1 + i1IIIl), lI1lili[i11IIlli(885, ")2&@")](i1IIIl[i11IIlli(369, "Ycmy")]("\u2705", "")[i11IIlli(789, "BLj[")]("\u274C", "")[i11IIlli(766, "1CHN")]("\uD83D\uDEAB", "")[i11IIlli(663, "4lIj")]());
  }
  function iIIilIIl(lIliIi1, I1i1i1II) {
    const llI11ii = i11IIlli,
      IllIli1I = {
        "rzalN": i1iii1lI[llI11ii(720, "1CHN")],
        "zhKpx": i1iii1lI[llI11ii(641, "6n)c")]
      };
    try {
      if (i1iii1lI[llI11ii(493, "VVBt")](i1iii1lI[llI11ii(708, "e05e")], i1iii1lI[llI11ii(570, "Tk@v")])) switch (lIliIi1) {
        case i1iii1lI[llI11ii(967, "4lIj")]:
          if (i1iii1lI[llI11ii(911, "(N[a")](I1i1i1II[llI11ii(374, "j1AA")], 200) && i1iii1lI[llI11ii(467, "E[%u")](I1i1i1II[llI11ii(336, "Lhk^")], true)) {
            const I1I1i1li = [];
            if (I1i1i1II[llI11ii(455, ")2lA")] && i1iii1lI[llI11ii(767, "kR(!")](I1i1i1II[llI11ii(461, "8zew")][llI11ii(407, "VVBt")], 0)) {
              if (i1iii1lI[llI11ii(645, "0C!G")](i1iii1lI[llI11ii(810, "T9@E")], i1iii1lI[llI11ii(429, "0C%t")])) illIIiIl[llI11ii(635, "bfO#")]("\u2753" + iIII1Il + " " + IilllllI[llI11ii(622, "Vink")](ii1iiiI1));else for (const iili1iIl of I1i1i1II[llI11ii(461, "8zew")]) {
                if (i1iii1lI[llI11ii(729, "1CHN")](i1iii1lI[llI11ii(421, "e05e")], i1iii1lI[llI11ii(615, "e05e")])) {
                  const lI1lIll1 = iili1iIl?.[llI11ii(642, "Tk@v")] || [];
                  for (const l11iII1I of lI1lIll1) {
                    const I1i1iii1 = l11iII1I?.[llI11ii(457, "(lwu")],
                      IiiiiIIl = l11iII1I?.[llI11ii(626, "L7xV")];
                    let i1lilIl = "";
                    switch (I1i1iii1) {
                      case 1:
                        i1lilIl = i1iii1lI[llI11ii(404, "&7wW")];
                        break;
                      case 4:
                        i1lilIl = IiiiiIIl + llI11ii(636, "lww4");
                        break;
                      case 6:
                        i1lilIl = IiiiiIIl + llI11ii(450, "%WYZ");
                        break;
                      case 9:
                        i1lilIl = l11iII1I?.[llI11ii(791, "4^74")][0]?.[llI11ii(529, "0C!G")] + "\uD83C\uDF81";
                        break;
                      case 10:
                        i1lilIl = IiiiiIIl + llI11ii(779, "DPt8");
                        break;
                      case 14:
                        i1lilIl = i1iii1lI[llI11ii(344, "kR(!")](IiiiiIIl, 100) + llI11ii(852, "Vink");
                        break;
                      default:
                        i1lilIl = llI11ii(627, "[8&D") + I1i1iii1 + "\uFF09";
                    }
                    I1I1i1li[llI11ii(698, "4^74")](i1lilIl);
                  }
                } else lIill1ll = llI11ii(814, "TXqj") + iI11IlII[llI11ii(846, "lww4")](illIlii1);
              }
            }
            iIIl1lI = i1iii1lI[llI11ii(836, "Lhk^")], i1iii1lI[llI11ii(660, "0C%t")](I1I1i1li[llI11ii(808, "kR(!")], 0) && (ll1ii1i = I1I1i1li), Ill1iII1 = false;
          } else {
            if (i1iii1lI[llI11ii(667, "MG@5")](I1i1i1II[llI11ii(1007, "DPt8")], 200)) {
              const llli11iI = signStatusMessages[I1i1i1II[llI11ii(629, "Uyh7")]] || I1i1i1II[llI11ii(867, "MG@5")] + llI11ii(826, "TXqj");
              [407100001, 407100002, 402][llI11ii(706, "[d)$")](I1i1i1II[llI11ii(970, "E[%u")]) && ($[llI11ii(876, "4^74")] = true), ll1ii1i = [llli11iI], iIIl1lI = llI11ii(704, "&7wW"), (i1iii1lI[llI11ii(467, "E[%u")](I1i1i1II[llI11ii(975, "0cIa")], "-1") || i1iii1lI[llI11ii(993, "IkW%")](I1i1i1II[llI11ii(629, "Uyh7")], -1)) && (i1iii1lI[llI11ii(955, "0C!G")](i1iii1lI[llI11ii(542, "L7xV")], i1iii1lI[llI11ii(804, "MG@5")]) ? Ill1iII1 = true : I1Il1lI1[llI11ii(848, "s2#N")] = true);
            } else {
              if (I1i1i1II[llI11ii(350, ")2lA")]) {
                if (i1iii1lI[llI11ii(492, "%WYZ")](i1iii1lI[llI11ii(560, "(N[a")], i1iii1lI[llI11ii(364, "%WYZ")])) ll1i11Ii[llI11ii(576, "1CHN")](llI11ii(712, "%WYZ") + lIi11llI + llI11ii(446, "dj0d")), IlI1IIIi = false;else {
                  iIIl1lI = i1iii1lI[llI11ii(838, "E[%u")], ll1ii1i = [I1i1i1II[llI11ii(1010, "elgH")]];
                  if (!signStatusMessages[I1i1i1II[llI11ii(359, "IkW%")]]) Ill1iII1 = true;
                }
              } else i1iii1lI[llI11ii(564, "W^Hz")](i1iii1lI[llI11ii(948, "0C!G")], i1iii1lI[llI11ii(453, "6n)c")]) ? (lI1I111i[llI11ii(345, "4^74")]("\u2753" + ll1iIlii + " " + liiIi1[llI11ii(546, "1CHN")](ii1iII1i)), Il1I1I1i[llI11ii(710, "^Uyj")] = true) : iIIl1lI = llI11ii(334, "[8&D") + JSON[llI11ii(846, "lww4")](I1i1i1II);
            }
          }
          break;
        case i1iii1lI[llI11ii(514, "yN&!")]:
          if (i1iii1lI[llI11ii(845, "E[%u")](I1i1i1II[llI11ii(475, ")2&@")], 200) && i1iii1lI[llI11ii(427, "YI]x")](I1i1i1II[llI11ii(721, "j1AA")], true) && I1i1i1II[llI11ii(651, "3T[h")]) {
            if (i1iii1lI[llI11ii(468, "(lwu")](i1iii1lI[llI11ii(895, "eaW5")], i1iii1lI[llI11ii(865, "kR(!")])) {
              const liil1lli = I1i1i1II[llI11ii(854, "4^74")][llI11ii(976, "&7wW")];
              i1iii1lI[llI11ii(640, "4^74")](liil1lli, 0) && $[llI11ii(605, "E[%u")] && (ll1ii1i[llI11ii(881, "TXqj")]("\u8FDE\u7B7E" + liil1lli + "\u5929"), $[llI11ii(831, "Vink")] && i1iii1lI[llI11ii(792, "4lIj")](liil1lli, $[llI11ii(1024, "VVBt")]) && (i1iii1lI[llI11ii(1011, "&7wW")](i1iii1lI[llI11ii(393, "CsB(")], i1iii1lI[llI11ii(770, "j1AA")]) ? ll1ii1i[llI11ii(554, "(lwu")](i1iii1lI[llI11ii(398, "(Z8e")]) : iil1iIii = 1));
            } else Ilii111 = i1iliII;
          } else {
            if (I1i1i1II[llI11ii(1010, "elgH")]) {} else console[llI11ii(692, "eaW5")]("\u2753" + lIliIi1 + " " + JSON[llI11ii(919, "3T[h")](I1i1i1II));
          }
          break;
      } else iiiiliil[llI11ii(747, "Vink")](i1llIil[llI11ii(416, "T9@E")] || IllIli1I[llI11ii(438, "3T[h")]), I1IIiI1i[llI11ii(923, "4^74")] = "";
    } catch (lIi1iIi) {
      i1iii1lI[llI11ii(703, "bfO#")](i1iii1lI[llI11ii(996, "i^OM")], i1iii1lI[llI11ii(765, "Czze")]) ? (delete Il1IliIi[llI11ii(906, "BLj[")], delete liiIlii[llI11ii(445, "i^OM")][IllIli1I[llI11ii(551, "[d)$")]]) : console[llI11ii(458, "BLj[")](llI11ii(558, "TXqj") + lIliIi1 + llI11ii(595, "L7xV") + (lIi1iIi[llI11ii(768, "Ycmy")] || lIi1iIi));
    }
  }
  async function iiili1Il(I1lli1i1) {
    const Iil1llli = i11IIlli;
    let lli11II1 = "",
      i1i1i1il = null,
      IlliIiI = null,
      IlIlIli = i1iii1lI[Iil1llli(1014, "e05e")],
      ll1l1iIi = {},
      Iiliili1 = {};
    switch (I1lli1i1) {
      case i1iii1lI[Iil1llli(395, "E[%u")]:
        Iiliili1 = {
          "appId": i1iii1lI[Iil1llli(486, "(Z8e")],
          "functionId": i1iii1lI[Iil1llli(422, "28fd")],
          "appid": i1iii1lI[Iil1llli(464, "VVBt")],
          "body": {
            "token": $[Iil1llli(904, "lww4")],
            "venderId": i1iii1lI[Iil1llli(851, "&7wW")](parseInt, $[Iil1llli(375, "Czze")]) || "",
            "activityId": i1iii1lI[Iil1llli(525, "E[%u")](parseInt, $[Iil1llli(716, "BDOF")]) || "",
            "type": 56,
            "actionType": 7
          },
          "version": i1iii1lI[Iil1llli(580, "4lIj")],
          "ua": iillliI1
        }, ll1l1iIi = await H5st[Iil1llli(1031, "28fd")](Iiliili1), lli11II1 = i1iii1lI[Iil1llli(732, "3T[h")], IlliIiI = Object[Iil1llli(406, "yN&!")]({}, ll1l1iIi[Iil1llli(363, "8zew")], {
          "jsonp": i1iii1lI[Iil1llli(496, "BDOF")]
        });
        break;
      case i1iii1lI[Iil1llli(388, "eaW5")]:
        lli11II1 = i1iii1lI[Iil1llli(934, "6n)c")], IlliIiI = {
          "appid": i1iii1lI[Iil1llli(813, "DPt8")],
          "functionId": i1iii1lI[Iil1llli(869, "6n)c")],
          "body": JSON[Iil1llli(846, "lww4")]({
            "token": $[Iil1llli(802, "dj0d")],
            "venderId": i1iii1lI[Iil1llli(697, "3T[h")](parseInt, $[Iil1llli(688, "0cIa")]) || "",
            "activityId": i1iii1lI[Iil1llli(763, "3T[h")](parseInt, $[Iil1llli(772, "4^74")]) || "",
            "type": 56
          }),
          "jsonp": i1iii1lI[Iil1llli(394, "lww4")]
        };
        break;
    }
    const lli1l1Ii = {
      "t": Math[Iil1llli(824, "^Uyj")](i1iii1lI[Iil1llli(552, "e05e")](Date[Iil1llli(562, "T9@E")](), 1000)) + Iil1llli(608, "(lwu"),
      "loginType": "2",
      "x-api-eid-token": Il1iIiIl
    };
    i1i1i1il && Object[Iil1llli(907, "T9@E")](i1i1i1il, lli1l1Ii);
    IlliIiI && (i1iii1lI[Iil1llli(490, "lww4")](i1iii1lI[Iil1llli(557, "0cIa")], i1iii1lI[Iil1llli(665, "L7xV")]) ? Object[Iil1llli(637, "IkW%")](IlliIiI, lli1l1Ii) : iiIIi1i1[Iil1llli(952, "i^OM")] = li1111i[Iil1llli(668, "DPt8")]);
    const i1I1llil = {
      "url": lli11II1,
      "method": IlIlIli,
      "headers": {
        "Accept": i1iii1lI[Iil1llli(655, "0cIa")],
        "Accept-Encoding": i1iii1lI[Iil1llli(800, ")2lA")],
        "Accept-Language": i1iii1lI[Iil1llli(947, "YI]x")],
        "Connection": i1iii1lI[Iil1llli(778, "3T[h")],
        "Content-Type": i1iii1lI[Iil1llli(940, "0C!G")],
        "Host": i1iii1lI[Iil1llli(423, "dj0d")],
        "Referer": activityUrl,
        "Sec-Fetch-Dest": i1iii1lI[Iil1llli(618, "T9@E")],
        "Sec-Fetch-Mode": i1iii1lI[Iil1llli(1012, "BLj[")],
        "Sec-Fetch-Site": i1iii1lI[Iil1llli(639, "YI]x")],
        "User-Agent": iillliI1,
        "Cookie": iI1i1IiI
      },
      "params": IlliIiI,
      "data": i1i1i1il,
      "timeout": 30000
    };
    i1iii1lI[Iil1llli(516, "4lIj")](IlIlIli, i1iii1lI[Iil1llli(742, "eaW5")]) && (delete i1I1llil[Iil1llli(376, "^Uyj")], delete i1I1llil[Iil1llli(379, "0cIa")][i1iii1lI[Iil1llli(565, "(Z8e")]]);
    const lllIiI1i = 3;
    let lili1111 = 0,
      I1llll11 = null,
      l11I11ii = false;
    while (i1iii1lI[Iil1llli(547, "L7xV")](lili1111, lllIiI1i)) {
      const IIlIlllI = await common[Iil1llli(470, "28fd")](i1I1llil);
      if (!IIlIlllI[Iil1llli(979, "CsB(")]) {
        if (i1iii1lI[Iil1llli(477, "TXqj")](i1iii1lI[Iil1llli(805, "lww4")], i1iii1lI[Iil1llli(998, "IkW%")])) {
          I1llll11 = I1lli1i1 + Iil1llli(383, "CsB(") + IIlIlllI[Iil1llli(912, "0C%t")] + Iil1llli(932, "yN&!"), lili1111++;
          continue;
        } else I1i11III[Iil1llli(670, "CsB(")] = lI1111l;
      }
      if (!IIlIlllI[Iil1llli(634, "Tk@v")]) {
        I1llll11 = I1lli1i1 + Iil1llli(607, "Czze"), lili1111++;
        continue;
      }
      i1iii1lI[Iil1llli(764, ")2&@")](iIIilIIl, I1lli1i1, IIlIlllI[Iil1llli(559, "i^OM")]), l11I11ii = false;
      break;
    }
    i1iii1lI[Iil1llli(342, "0C!G")](lili1111, lllIiI1i) && (console[Iil1llli(544, "0C!G")](I1llll11), l11I11ii && ($[Iil1llli(392, "dj0d")] = true));
  }
}
async function handleResponse(iI11IliI, i11Il1I1) {
  const iIl1I1li = I1Ii111l,
    lliliiil = {
      "CuOIR": iIl1I1li(327, "T9@E"),
      "pNnbA": iIl1I1li(550, "Ycmy"),
      "vqkhs": function (i11i1iIi, I11iIlI) {
        return i11i1iIi !== I11iIlI;
      },
      "CkJBT": iIl1I1li(719, "Tk@v"),
      "HhLpM": iIl1I1li(509, "BDOF"),
      "VoSJT": iIl1I1li(1023, "0cIa"),
      "aLFSB": function (I1IlIIlI, l11l111i) {
        return I1IlIIlI === l11l111i;
      },
      "lWkCq": function (l11IiIli, l1liiii) {
        return l11IiIli === l1liiii;
      },
      "vPgOf": iIl1I1li(503, "DPt8"),
      "JfBtc": iIl1I1li(1022, "[d)$")
    };
  try {
    if (lliliiil[iIl1I1li(739, "Lhk^")](lliliiil[iIl1I1li(337, "4lIj")], lliliiil[iIl1I1li(593, "MG@5")])) switch (iI11IliI) {
      case lliliiil[iIl1I1li(928, "dj0d")]:
        if (lliliiil[iIl1I1li(687, "e05e")](i11Il1I1[iIl1I1li(1025, "28fd")], 200) && lliliiil[iIl1I1li(941, "1CHN")](i11Il1I1[iIl1I1li(664, "BDOF")], true) && i11Il1I1[iIl1I1li(737, "TXqj")]) {
          if (lliliiil[iIl1I1li(571, "yN&!")](lliliiil[iIl1I1li(432, "6n)c")], lliliiil[iIl1I1li(896, "s2#N")])) {
            li1Illli[iIl1I1li(672, "&7wW")](lI11IIIi + iIl1I1li(871, "yN&!")), liIi1i1I[iIl1I1li(782, "Czze")](lliliiil[iIl1I1li(984, "E[%u")]);
            return;
          } else $[iIl1I1li(367, "MG@5")] = i11Il1I1[iIl1I1li(837, "IkW%")];
        } else i11Il1I1[iIl1I1li(743, "e05e")] ? (console[iIl1I1li(635, "bfO#")](iIl1I1li(518, "VVBt") + i11Il1I1[iIl1I1li(752, "0cIa")]), $[iIl1I1li(745, "L7xV")] = true) : (console[iIl1I1li(913, "%WYZ")]("\u2753" + iI11IliI + " " + JSON[iIl1I1li(844, "(lwu")](i11Il1I1)), $[iIl1I1li(613, "Uyh7")] = true);
        break;
    } else iil1l11[iIl1I1li(361, "Lhk^")](lliliiil[iIl1I1li(995, "^Uyj")]);
  } catch (iI1iIlI) {
    console[iIl1I1li(485, "6n)c")](iIl1I1li(397, "Uyh7") + iI11IliI + iIl1I1li(986, "TXqj") + (iI1iIlI[iIl1I1li(681, "e05e")] || iI1iIlI));
  }
}
async function sendRequest(i1IIiii1) {
  const Il111il1 = I1Ii111l,
    IiII11lI = {
      "HBGQE": function (i1IIii1I, iIiIliII) {
        return i1IIii1I(iIiIliII);
      },
      "EIiJL": function (IilIlIIl, IiiilIil) {
        return IilIlIIl > IiiilIil;
      },
      "LHyDM": function (lIii1llI, liliIiI) {
        return lIii1llI > liliIiI;
      },
      "WngzP": function (lI1ll1l, lI1iI1Il) {
        return lI1ll1l >= lI1iI1Il;
      },
      "NQzWU": Il111il1(538, "Tk@v"),
      "cqOjs": function (lii1lIIl, ili11I11) {
        return lii1lIIl >= ili11I11;
      },
      "NCnYU": Il111il1(897, "(lwu"),
      "DiJFL": Il111il1(356, ")2&@"),
      "rjDhM": Il111il1(459, "Ycmy"),
      "yWfJy": Il111il1(922, "e05e"),
      "cyVdt": Il111il1(572, "BDOF"),
      "Qeqag": Il111il1(424, "Czze"),
      "axZFJ": Il111il1(819, "4^74"),
      "AQAZN": Il111il1(584, "CsB("),
      "NjuIJ": function (IlIIl11i, iIlI1lII) {
        return IlIIl11i / iIlI1lII;
      },
      "CXeEU": Il111il1(972, "T9@E"),
      "KBrAz": Il111il1(786, "W^Hz"),
      "mghQI": Il111il1(533, "CsB("),
      "RlKFC": Il111il1(463, "%WYZ"),
      "sUpsH": Il111il1(968, "4^74"),
      "OkdpO": Il111il1(644, "BLj["),
      "xwNlo": Il111il1(488, "Vink"),
      "IoPEg": Il111il1(473, "[d)$"),
      "wpPVy": Il111il1(474, "eaW5"),
      "kLiBt": function (I1Ii111I, l1l1iII1) {
        return I1Ii111I === l1l1iII1;
      },
      "HYtCh": Il111il1(1016, "elgH"),
      "BQcqz": function (i1IiIIi1, Ii111IIi) {
        return i1IiIIi1 < Ii111IIi;
      },
      "odJgh": function (i1l1llll, lI1llil1) {
        return i1l1llll !== lI1llil1;
      },
      "smcIj": Il111il1(992, "bfO#"),
      "ffQNn": Il111il1(501, ")2lA"),
      "lOKbl": function (iIlIlIli, illIill) {
        return iIlIlIli === illIill;
      },
      "yuiLX": Il111il1(855, "i^OM"),
      "DxMdv": function (liillii, illIIIiI) {
        return liillii !== illIIIiI;
      },
      "dpEQS": Il111il1(997, "j1AA"),
      "JDPRI": Il111il1(987, "6n)c"),
      "TiTJA": function (iii111il, iillil1l, i1IilIl) {
        return iii111il(iillil1l, i1IilIl);
      }
    };
  if ($[Il111il1(689, "0cIa")]) return;
  let l1i1li1I = "",
    illll = null,
    illI1i1 = null,
    I11ill1i = IiII11lI[Il111il1(758, "kR(!")],
    l11ilIIl = {},
    iIlIil1I = {};
  switch (i1IIiii1) {
    case IiII11lI[Il111il1(387, "%WYZ")]:
      iIlIil1I = {
        "appId": IiII11lI[Il111il1(352, "E[%u")],
        "functionId": IiII11lI[Il111il1(535, "TXqj")],
        "appid": IiII11lI[Il111il1(616, "[d)$")],
        "body": {
          "token": $[Il111il1(347, "W^Hz")],
          "venderId": ""
        },
        "version": IiII11lI[Il111il1(771, "%WYZ")],
        "ua": $["UA"]
      }, l11ilIIl = await H5st[Il111il1(728, "VVBt")](iIlIil1I), l1i1li1I = IiII11lI[Il111il1(448, "s2#N")], illI1i1 = Object[Il111il1(746, "DPt8")]({}, l11ilIIl[Il111il1(1028, "0C!G")], {
        "jsonp": IiII11lI[Il111il1(938, "28fd")]
      });
      break;
    default:
      console[Il111il1(931, "IkW%")](Il111il1(399, "0C!G") + i1IIiii1);
      return;
  }
  const lliIlii = {
    "t": Math[Il111il1(402, "bfO#")](IiII11lI[Il111il1(1000, "CsB(")](Date[Il111il1(673, "Czze")](), 1000)) + Il111il1(574, "6n)c"),
    "loginType": "2",
    "x-api-eid-token": $[Il111il1(332, "[d)$")]
  };
  illll && Object[Il111il1(874, "Vink")](illll, lliIlii);
  illI1i1 && Object[Il111il1(1001, "&7wW")](illI1i1, lliIlii);
  const IlIiil1l = {
    "url": l1i1li1I,
    "method": I11ill1i,
    "headers": {
      "Accept": IiII11lI[Il111il1(536, ")2&@")],
      "Accept-Encoding": IiII11lI[Il111il1(776, "L7xV")],
      "Accept-Language": IiII11lI[Il111il1(841, "[d)$")],
      "Connection": IiII11lI[Il111il1(856, "%WYZ")],
      "Content-Type": IiII11lI[Il111il1(935, "1CHN")],
      "Host": IiII11lI[Il111il1(378, "&7wW")],
      "Referer": activityUrl,
      "Sec-Fetch-Dest": IiII11lI[Il111il1(915, "yN&!")],
      "Sec-Fetch-Mode": IiII11lI[Il111il1(769, "[8&D")],
      "Sec-Fetch-Site": IiII11lI[Il111il1(625, "Vink")],
      "User-Agent": $["UA"]
    },
    "params": illI1i1,
    "data": illll,
    "timeout": 30000,
    "httpsTlsOptions": common[Il111il1(702, ")2&@")]()
  };
  IiII11lI[Il111il1(815, "MG@5")](I11ill1i, IiII11lI[Il111il1(549, "&7wW")]) && (delete IlIiil1l[Il111il1(674, "L7xV")], delete IlIiil1l[Il111il1(600, ")2lA")][IiII11lI[Il111il1(964, "Vink")]]);
  const llil1i1l = 1;
  let I1IliiI = 0,
    ii11Il11 = null,
    i11llIii = null;
  while (IiII11lI[Il111il1(794, "yN&!")](I1IliiI, llil1i1l)) {
    if (IiII11lI[Il111il1(678, "IkW%")](IiII11lI[Il111il1(415, "Uyh7")], IiII11lI[Il111il1(956, "E[%u")])) {
      IiII11lI[Il111il1(418, "&7wW")](I1IliiI, 0) && (await $[Il111il1(519, "0cIa")](2000));
      const l1ii1ii1 = await common[Il111il1(751, "L7xV")](IlIiil1l);
      if (!l1ii1ii1[Il111il1(735, "DPt8")]) {
        if (IiII11lI[Il111il1(447, "^Uyj")](IiII11lI[Il111il1(909, "TXqj")], IiII11lI[Il111il1(662, "Tk@v")])) {
          i11llIii = l1ii1ii1[Il111il1(328, "YI]x")], ii11Il11 = Il111il1(1006, "j1AA") + i1IIiii1 + Il111il1(484, "s2#N") + l1ii1ii1[Il111il1(757, "(N[a")], I1IliiI++;
          continue;
        } else {
          const iIiiiIii = IiII11lI[Il111il1(754, "(lwu")](liIIii1l, l1IIllI);
          iil1iI1i = IiII11lI[Il111il1(539, "IkW%")](iIiiiIii, 0) ? iIiiiIii : 0;
        }
      }
      if (!l1ii1ii1[Il111il1(777, "T9@E")]) {
        if (IiII11lI[Il111il1(508, ")2lA")](IiII11lI[Il111il1(563, "4^74")], IiII11lI[Il111il1(633, "kR(!")])) {
          ii11Il11 = Il111il1(520, "&7wW") + i1IIiii1 + Il111il1(567, "Czze"), I1IliiI++;
          continue;
        } else {
          const i11i11l = Iil1Il1I[Il111il1(341, "[8&D")][Il111il1(391, "0cIa")];
          IiII11lI[Il111il1(340, "e05e")](i11i11l, 0) && lIiIilI[Il111il1(396, "^Uyj")] && (IIlIl1il[Il111il1(331, "Czze")]("\u8FDE\u7B7E" + i11i11l + "\u5929"), IIi11il1[Il111il1(829, "1CHN")] && IiII11lI[Il111il1(944, "Ycmy")](i11i11l, IIil1Il[Il111il1(872, "elgH")]) && llI1Iili[Il111il1(700, "bfO#")](IiII11lI[Il111il1(900, "Vink")]));
        }
      }
      await IiII11lI[Il111il1(647, "IkW%")](handleResponse, i1IIiii1, l1ii1ii1[Il111il1(774, ")2&@")]), ipBlack = false;
      break;
    } else {
      const iI11llll = IiII11lI[Il111il1(873, "eaW5")](IillIl1l, iI1lilIi);
      IiII11lI[Il111il1(693, "3T[h")](iI11llll, 0) && (Iili1Ii1[Il111il1(787, "yN&!")] = iI11llll);
    }
  }
  IiII11lI[Il111il1(610, "(lwu")](I1IliiI, llil1i1l) && ($[Il111il1(866, "28fd")] = ii11Il11, IiII11lI[Il111il1(1026, "eaW5")](i11llIii, 403) && console[Il111il1(431, "dj0d")](ii11Il11));
}
var version_ = "jsjiami.com.v7";

// prettier-ignore
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}