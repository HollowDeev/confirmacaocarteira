import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
function Login({definirPagina}) {
  const [email, definirEmail] = useState('')
  const [senha, definirSenha] = useState('')

  const [erro, definirErro] = useState({
    erro: false,
    mensagem: ''
  })

  const entrar = () => {
    if(email == 'thauafelipe@fatec.sp.gov' && senha == 'thauafatec'){
      definirErro({
        erro: false,
        mensagem: 'Usuario Invalido'
      })
      localStorage.setItem("autenticado", "true");
      definirPagina('principal')
    }else {
      definirErro({
        erro: true,
        mensagem: 'Usuario Invalido'
      })
    }
  }

  return (
    <div className="px-4 flex flex-col gap-5">
        <h1 className="font-bold text-xl">ENTRAR </h1>
        <Input type="email" placeholder="Digite seu Email" label="Email Institucional ou RA" value={email} onValueChange={definirEmail} isInvalid={erro.erro} errorMessage={erro.mensagem}/>
        <Input type="password" label='Senha' placeholder="****" value={senha} onValueChange={definirSenha} isInvalid={erro.erro} errorMessage={erro.mensagem}/>
        <Button className="bg-red-700 text-white font-bold" onClick={() => entrar()}>Entrar</Button>
    </div>
  )
}

export default Login