import logocps from '../../public/logo-cps.png'
import logosp from '../../public/logo-sp.png'

function Footer() {
    return (
        <footer className="bg-black text-white w-full p-10 flex flex-col gap-10 items-center" >
            <img src={logocps} alt="FATEC Itapira" width='200px'/>
            <img src={logosp} alt="FATEC Itapira" width='200px'/>
        </footer>
    )
}

export default Footer