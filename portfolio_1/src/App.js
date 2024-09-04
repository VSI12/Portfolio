import "./App.css"
import Header from "./components/header/header"
import Home from "./components/Home/Home" 
import About from "./components/About/About"
import Skills from "./components/skills/Skills"
import Services from "./components/Services/Services" 
import Qualification from "./components/Qualifications/Qualification"
function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
      </main>
    </>
  )
}

export default App
