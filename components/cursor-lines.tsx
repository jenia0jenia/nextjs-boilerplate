import styles from '@/styles/Home.module.scss'
import { useEffect } from "react"

export default function CursorLines(props) {
    useEffect(() => {
        let lineH = document.getElementById('lineH')
        let lineV = document.getElementById('lineV')

        if (lineH && lineV) {
            document.addEventListener("mousemove", (e: MouseEvent) => {
                console.log(e.clientY);
                lineH.style.top = e.clientY + 2 + "px";
                lineV.style.left = e.clientX + 2 + "px";
            })
        }
    }, [])

    return (
        <>
            <div className={styles.CursorLinesH} id="lineH"></div>
            <div className={styles.CursorLinesV} id="lineV"></div>
        </>
    )
}