import "./App.css"
import Header from "./components/header/header"
import Home from "./components/Home/Home" 
import About from "./components/About/About"
import Skills from "./components/skills/Skills"
function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Skills/>
      </main>
    </>
  )
}

export default App
