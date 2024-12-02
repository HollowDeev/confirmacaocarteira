import Footer from "./components/Footer"
import Header from "./components/Header"
import Painel from "./components/Painel"

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <Header />

      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
        <Painel />
      </div>

      <Footer />
    </div>
  )
}

export default App
