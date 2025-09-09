import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OutputPage from './OutputPage'
import InputPage from './InputPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InputPage />} />
                <Route path="/secret/:id" element={<OutputPage />} />
            </Routes>
        </Router>
    )
}

export default App