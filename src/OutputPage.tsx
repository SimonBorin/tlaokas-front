// src/OutputPage.tsx
import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import './App.css'
import cover from './assets/back.jpg'

function OutputPage() {
    const {id} = useParams()
    const [secret, setSecret] = useState('')
    const [copied, setCopied] = useState(false)
    const fetched = useRef(false)

    useEffect(() => {
        if (fetched.current || !id) return
        fetched.current = true

        fetch(`/api/secret/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error()
                return res.text()
            })
            .then((data) => setSecret(data))
            .catch(() => setSecret('secret not found or expired'))
    }, [id])

    const handleCopy = () => {
        navigator.clipboard.writeText(secret)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="center">
            <div className="card">
                <img src={cover} alt="Cover" className="cover-image"/>
                <div className="result">
                    <textarea value={secret} readOnly style={{ marginTop: '1rem' }} />
                    <button onClick={handleCopy}>Copy to clipboard</button>
                    <div className="toast-container">
                        <div className={`toast ${copied ? 'visible' : 'hidden'}`}>Copied!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutputPage