/// <reference path="./langext.d.ts"/>
/// <reference path="../typings/index.d.ts"/>

if (typeof(Buffer) !== "undefined") {

    Buffer.prototype.writeBuffer = function(bf: Buffer, pos: number, length?: number): number {
        return bf.copy(this, pos, 0, length);
    };

    Buffer.prototype.readBuffer = function(pos: number, length: number): Buffer {
        return this.slice(pos, pos + length);
    };
}

