import Converter from "../../components/Converter";
import Preview from "../../components/Preview";
import SideBySide from "../../layouts/SideBySide";

export default function Home() {
    return (
        
        <SideBySide>
            <Converter/>
            <Preview/>
        </SideBySide>
    )
}