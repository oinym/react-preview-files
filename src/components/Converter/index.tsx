import { Box, Button } from "@mui/material";
import { useState } from "react"
import './styles.css'
import { convertFileToBase64, getFileTypeFromBase64 } from '../../functions/converter';
import { useGlobalContext } from "../../context";
import { Textarea } from "@mui/joy";

export default function Converter() {
    const { fileObject, setFileObject } = useGlobalContext()

    async function handleFileChange(e: any) {
        const file = e.target.files[0]
        if (file) {
            const base64 = await convertFileToBase64(file);
            setFileObject({ ...fileObject, byteArray: base64, file: file })
        }
    }

    function handleConvert() {
        const type = getFileTypeFromBase64(fileObject.byteArray);
        console.log('File type:', type);

        setFileObject({ ...fileObject, fileType: type })
    }

    return (<div className="container">
        <h1>Converter</h1>
        <label title="Please choose file" id="file-input-label" />
        <input id="input-file-elm" type='file' max={1} aria-labelledby="file-input-label" accept='.pdf, .jpg, .jpeg, .docx' required onChange={handleFileChange} />
        <Button variant={'contained'} onClick={handleConvert}>Convert</Button>
        {fileObject?.byteArray &&
            <div className="bytes">{fileObject.byteArray}</div>
        }

    </div>

    )
}