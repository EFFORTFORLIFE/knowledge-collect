/*
 * @Author:
 * @Date: 2019-08-13 16:10:45
 * @LastEditors:
 * @LastEditTime: 2019-08-15 21:29:16
 * @Description: file content
 */

import qs from "qs";
import { Toast } from 'mint-ui'
let barcode = null;
import router from "../router"
// let msg = "";
let createBarcode = function () {
  if (!barcode) {
    barcode = new plus.barcode.create("barcode", [plus.barcode.QR], {
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "static"
    });
    barcode.onmarked = onmarked;
    plus.webview.currentWebview().append(barcode);
  }
  barcode.start();
};

// 扫码成功回调
let onmarked = function (type, result) {
  var text = "未知: ";
  switch (type) {
    case plus.barcode.QR:
      text = "QR: ";
      break;
    case plus.barcode.EAN13:
      text = "EAN13: ";
      break;
    case plus.barcode.EAN8:
      text = "EAN8: ";
      break;
  }
  barcode.close();
  barcode = null;
  // alert(qsObj(result));
  // location.href = result;
  router.replace({
    path: "/",
    query: {
      result: result
    }
  })
  // Toast(result)

};

function qsObj(url) {
  let i = url.indexOf("?");
  let st = url.substr(i + 1);
  return qs.parse(st);
}

export default { createBarcode, barcode };
