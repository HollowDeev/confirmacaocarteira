import { useEffect, useState } from "react"
import Login from "./Login"
import PaginaPrincipal from "./PaginaPrincipal"
import Qrcode from "./Qrcode"
import Qrvalidacao from "./Qrvalidacao"

function Painel() {
    const [ pagina, definirPagina ] = useState('login')

    useEffect(() => {
        console.log(pagina)

        const caminho = window.location.pathname
        const auth = localStorage.getItem("autenticado");

        if(caminho == '/hcnshqlsmthaua000000'){
            definirPagina('qrvalidacao')
        }else if(auth == 'true'){
            definirPagina("principal")
        }else {
            definirPagina("login")
        }
    }, [])

 switch(pagina) { 
    case 'login': 
        return (
            <div className="w-full md:w-[400px]">
                <Login definirPagina={definirPagina} />
            </div>
        )

    case 'principal':
        return (
            <div className="w-full flex justify-center">
                <PaginaPrincipal definirPagina={definirPagina}/>
            </div>
        )

    case 'qrcode':
        return (
            <div className="w-full flex justify-center">
                <Qrcode />
            </div>
        )

    case 'qrvalidacao':
        return (
            <div className="w-full flex justify-center">
                <Qrvalidacao />
            </div>
        )
    
 }
}

export default Painel