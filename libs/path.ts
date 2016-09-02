/// <reference path="./langext.d.ts"/>
/// <reference path="../typings/index.d.ts"/>

import path = require("path");

path.simplify = function (src: string): string {

    let lvs: string[] = src.split("/");
    let tvs: string[] = [];
    let result: boolean = true;

    lvs.forEach((e: string) => {
        switch (e) {
        case ".":
            return;
        case "..":
            if (tvs.length === 0) {
                return result = false;
            } else {
                tvs.pop();
            }
            break;
        default:
            tvs.push(e);
        }
    });

    return result ? tvs.join(path.sep) : null;

};
