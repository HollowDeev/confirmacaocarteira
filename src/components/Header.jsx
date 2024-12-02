import logofatec from '../../public/logofatec.png'

function Header() {
    return (
        <div className="bg-red-600 h-20 w-full p-3 flex items-center justify-between">
            <img src={logofatec} alt="FATEC Itapira" width='100px'/>
            <h1 className='font-bold text-white'>Área do Aluno</h1>
        </div>
    )
}

export default Header