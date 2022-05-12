import './styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { French } from './pages/French'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">aHello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/french" element={<French title="French" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
