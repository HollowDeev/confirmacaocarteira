import { useEffect, useState } from "react"
import Login from "./Login"

function Painel() {
    const [ pagina, definirPagina ] = useState('login')

    useEffect(() => {
        console.log(pagina)
    }, [pagina])
    
 switch(pagina) { 
    case 'login': 
        return (
            <div className="min-w-full">
                <Login definirPagina={definirPagina} />
            </div>
        )

    case 'principal':
        return (
            <h1>Principal</h1>
        )
    
 }
}

export default Painel