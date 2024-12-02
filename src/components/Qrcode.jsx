import qr from '../../public/qr.png'

function Qrcode() {
  return (
    <div className="px-2 py-10 flex flex-col items-center gap-2">
      <h1 className='text-lg text-red-800 font-bold'>Validação da carteira de estudante</h1>
      <p className='text-sm p-2 border-2'>O QRCode valida internamente a situação atual da matricula do estudante</p>

      <img src={qr} alt="error" />

      <p className='text-sm p-2 border-2'>A leitura levará para a plataforma da instituição relacionada à verificação de matricula</p>
    </div>
  )
}

export default Qrcode