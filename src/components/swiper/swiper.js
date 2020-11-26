import React, { useState, useEffect } from 'react'
import styles from './swiper.css'

function Swiper(props) {
    const [page, setPage] = useState(0)
    const [notice, pause] = props;
    useEffect(() => {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
        const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame

        const scrollNode = noticeContentEl.current
        const distance = scrollNode.clientWidth / 2

        scrollNode.style.left = scrollNode.style.left || 0
        window.__offset = window.__offset || 0

        let requestId = null
        const scrollLeft = () => {
            const speed = 0.5
            window.__offset = window.__offset + speed
            scrollNode.style.left = -window.__offset + 'px'
            // 关键行：当距离小于偏移量时，重置偏移量
            if (distance <= window.__offset) window.__offset = 0
            requestId = requestAnimationFrame(scrollLeft)
        }
        requestId = requestAnimationFrame(scrollLeft)

        if (pause) cancelAnimationFrame(requestId)
        return () => cancelAnimationFrame(requestId)
    }, [notice, pause])

    return <ul className={styles.ul}>
        <li className={styles.li}>

        </li>
        <li>

        </li>
    </ul>
}

export default Swiper;