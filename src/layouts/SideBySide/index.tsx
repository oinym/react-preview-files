import { ReactElement, ReactNode } from "react";
import './styles.css'


interface Props{
    children:ReactNode
}

export default function SideBySide({children}: Props) {
    return (
        <div className="side-by-side">
            {children}
        </div>
    )
}