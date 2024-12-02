import logofatec from '../../public/logofatec.png'

function Header() {
    return (
        <div className="bg-red-600 h-20 md:h-32 w-full p-3 flex items-center justify-between">
            <a href="https://fatecitapira.cps.sp.gov.br">
                <img src={logofatec} alt="FATEC Itapira" width='150px' />
            </a>
            <h1 className='font-bold text-white md:text-2xl'>Área do Aluno</h1>
        </div>
    )
}

export default Header