import { CanvasModel } from './canvas'
import { Costumizer } from './pages/Costumizer'

import { Home } from './pages/Home'

function App() {
  return (
    <main className="w-full h-screen overflow-hidden transition-all ease-in relative">
      <Home />
      <CanvasModel />
      <Costumizer />
    </main>
  )
}

export default App
