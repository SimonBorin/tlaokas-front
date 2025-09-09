import { useState } from 'react'
import './App.css'
import cover from './assets/back.jpg'

function InputPage() {
    const [secret, setSecret] = useState('')
    const [link, setLink] = useState('')
    const [copied, setCopied] = useState(false)

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:8080/secret', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ secret }),
        })

        if (response.ok) {
            const data = await response.json()
            setLink(`${window.location.origin}/secret/${data.url.split('/').pop()}`)
            setCopied(false)
        } else {
            alert('Failed to submit secret')
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(link)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="center">
            <div className="card">
                <img src={cover} alt="Cover" className="cover-image" />
                <div className="form-body">
          <textarea
              placeholder="Paste your secret here..."
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
          />
                    <button onClick={handleSubmit}>Generate Link</button>

                    <div className="result" style={{ visibility: link ? 'visible' : 'hidden' }}>
                        <input type="text" value={link} readOnly />
                        <button onClick={handleCopy}>Copy to clipboard</button>
                        <div className="toast-container">
                            <div className={`toast ${copied ? 'visible' : 'hidden'}`}>Copied!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputPage