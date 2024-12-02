import { QrCode, SignOut } from "@phosphor-icons/react"
import foto from '../../public/fotoeu.png'

const sair = () => {
  localStorage.setItem('autenticado', 'false')
  location.reload();
}


// eslint-disable-next-line react/prop-types
function PaginaPrincipal({definirPagina}) {
  return (
    <div className="px-2 flex flex-col gap-2">
      <img src={foto} width='100px' alt="Thauã Felipe" />
      <h1 className="text-red-600 font-bold text-xl">Thauã Felipe dos Santos Araujo</h1>
      <p><span className="text-red-600 font-bold">CPF: </span> 368.293.248/82</p>
      <p><span className="text-red-600 font-bold">RA: </span> 0000000000</p>
      <p >Desenvolvimento de Software Multiplataforma</p>
      <p><span className="text-red-600 font-bold">PERIODO: </span>Noturno</p>
      <p><span className="text-red-600 font-bold">VÁLIDADE: </span>01/2026</p>

      <div className="w-full h-20 px-3 gap-3 bg-gray-300 shadow-xl fixed bottom-0 left-0 flex  items-center">
        
        <div className="h-16 grow border-1 border-gray-200 shadow-sm rounded-lg bg-white flex justify-center items-center cursor-pointer" onClick={() => definirPagina('qrcode')}>
          <QrCode size={32} weight="duotone" />
          <p className="text-[10px] font-extrabold">QR CODE</p>
        </div>
       
        <div className="h-16 w-16 border-1 border-gray-200 shadow-sm rounded-lg bg-white flex flex-col justify-center items-center cursor-pointer" onClick={() => sair()}>
          <SignOut size={32} weight="duotone" />
          <p className="text-[10px] font-extrabold">SAIR</p>
        </div>
      </div>
    </div>
  )
}

export default PaginaPrincipal