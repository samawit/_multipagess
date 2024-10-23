import { useState, useEffect } from 'react'
import './Timer.css'

function Timer() {

    const [running, setRunning] = useState(false)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let interval = null
        if (running) {
            interval = setInterval(() => {
                setSeconds(seconds + 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [running, seconds])

    function runClick() {
        setRunning(!running)
    }

    function secondsToString(seconds) {
        const MINUTE_SECONDS = 60
        const HOUR_SECONDS = MINUTE_SECONDS * 60
        const DAY_SECONDS = HOUR_SECONDS * 24

        const days = Math.floor(seconds / DAY_SECONDS)
        const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS)
        const minutes = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS)
        const secs = seconds % MINUTE_SECONDS

        if (days > 0) {
            return `${days}d ${hours}h ${minutes}m ${secs}s`
        } else if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`
        } else {
            return `${secs}s`
        }
    }

    function resetClick() {
        setRunning(false)
        setSeconds(0)
    }

    return ( 
    <div className='timer-container'>
        <h3 className='timer-title'>Timer</h3>
        <p><input className='timer-display' type="text" readOnly={true} value={secondsToString(seconds)} /></p>
        <div className='timer-buttons'>
            <button className='btn btn-danger' onClick={resetClick}><span class="bi bi-arrow-clockwise">Reset</span></button>
            <button className={'btn ' + (running ? 'btn-warning' : 'btn-success')} onClick={runClick}>{running ? <span class="bi bi-pause-circle">Pause</span> : <span class="bi bi-play">Run</span>}</button>
        </div>
    </div>
     );
}

export default Timer;