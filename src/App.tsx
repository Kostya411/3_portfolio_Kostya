import './App.css'
import {Header} from "./assets/layout/header/Header.tsx";
import {Main} from "./assets/layout/sections/main/Main.tsx";
import {Skills} from "./assets/layout/sections/skills/Skills.tsx";
import {Projects} from "./assets/layout/sections/projects/Projects.tsx";
import {Contact} from "./assets/layout/sections/contact/Contact.tsx";
import {Footer} from "./assets/layout/footer/Footer.tsx";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Contact/>
            <Footer />
        </div>
    )
}

export default App

