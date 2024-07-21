import { useEffect, useState } from "react"
import './styles.css'
import { useGlobalContext } from "../../context"

export default function Preview() {
    const { fileObject } = useGlobalContext();
    const [source, setSource] = useState<string | null>(null)
    useEffect(() => {
        console.log({ fileObject });

        console.log('Started preview....');
        if (fileObject.type?.startsWith('/image')) {
            setSource(`data:image/${fileObject.type};base64,${fileObject.byteArray}`)
        } else if (fileObject.type === 'pdf') {
            setSource(`data:application/pdf;base64,${fileObject.byteArray}`)
        } else {
            setSource(fileObject.byteArray)
        }

    }, [fileObject])
    return (
        <div>
            <h1>Preview</h1>
            {fileObject ?
                <iframe src={`${source}`} title="document viewer" width={1000} height={1000} />
                :
                "No data"
            }
        </div>



    )

}