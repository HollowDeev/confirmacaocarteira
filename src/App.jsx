import Footer from "./components/Footer"
import Header from "./components/Header"
import { CheckFat } from "@phosphor-icons/react"

function App() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString(); // Data formatada
  const formattedTime = now.toLocaleTimeString();

  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <Header />

      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="px-2 flex flex-col gap-5 ">
          <div className="flex items-center flex-col">
            <CheckFat size={80} color="#519e47" weight="duotone" />
            <p className="text-green-600 font-bold text-2xl">Matricula confirmada</p>
          </div>
          <p className="font-bold text-red-900">Aluno regularmente matriculado e frequentando a instituição</p>
          <div className="p-2 border-2 flex flex-col gap-2">

            <p className="text-sm"><span className="text-red-600 font-bold">Aluno: </span> Thauã Felipe dos Santos Araujo</p>

            <p className="text-sm">Faculdade de Tecnologia de Itapira - Ogari de Castro Pacheco </p>
            <p className="text-sm"><span className="text-red-600 font-bold">Curso: </span> Desenvolvimento de Software Multiplataforma</p>
            <p className="text-sm"><span className="text-red-600 font-bold">CPF: </span> 368.293.248/82</p>
            <p className="text-sm"><span className="text-red-600 font-bold">RG: </span> 650253139</p>
            <p className="text-sm"><span className="text-red-600 font-bold">MATRICULA/RA: </span> 2781392313006</p>
          </div>

          <p className="bg-red-700 text-white p-1 text-center">Consultado em {formattedDate} - {formattedTime}</p>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
