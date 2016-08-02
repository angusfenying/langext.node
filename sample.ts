/// <reference path="./libs/langext.d.ts" />

import "./langext.node";

let buf: Buffer = new Buffer("sample test");

console.log(buf.readBuffer(7, 4));

buf.writeBuffer(new Buffer("word"), 7);

console.log(buf.readBuffer(7, 4));
