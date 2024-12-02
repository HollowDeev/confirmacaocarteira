import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"

function Login() {
  return (
    <div className="px-4 flex flex-col gap-5">
        <h1 className="font-bold text-xl">ENTRAR </h1>
        <Input type="email" placeholder="Digite seu Email" label="Email Institucional" />
        <Input type="password" label='Senha' placeholder="****" />
        <Button className="bg-red-700 text-white font-bold">Entrar</Button>
    </div>
  )
}

export default Login