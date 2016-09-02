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

    /**
     * Write text into console without EOL.
     */
    write(text: string): void;

    /**
     * Ask user to type in text, after print text.
     */
    question(text: string, callback: (chunk: string) => void): void;

}

declare module "path" {

    export function simplify(path: string): string;
}
