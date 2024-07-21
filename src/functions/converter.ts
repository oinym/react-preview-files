import { Result, parse } from "file-type-mime";
import { Buffer } from 'buffer';

export function convertFileToBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}

export function getFileTypeFromBase64(base64: string): Result {
    const buffer = Buffer.from(base64, 'base64');
    console.log('buffer:', { buffer });
    const result = parse(buffer);
    console.log('Result:',{result});
    
    return result!;
}

