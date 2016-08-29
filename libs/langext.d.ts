interface Buffer {

    /**
     * Write a buffer to this buffer.
     */
    writeBuffer(bf: Buffer, pos: number, length?: number): number;

    /**
     * Read a buffer from this buffer.
     */
    readBuffer(pos: number, length: number): Buffer;

}

interface Console {

    /**
     * Read a line from console
     */
    readLine(callback: (chunk: string) => void): void;

}
