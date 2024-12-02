import { useState } from "react"
import Login from "./Login"

function Painel() {
    const [ pagina, definirPagina ] = useState('login')

 switch(pagina) { 
    case 'login': 
        return (
            <div className="min-w-full">
                <Login entrar={definirPagina} />
            </div>
        )
    
 }
}

export default Painel