import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    console.log()

  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className=" w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma aplicação <span className="font-bold text-blue-300">Completa</span>, do zero, com <span className="font-bold text-blue-300">React</span>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Domine na prática uma das tecnologias mais utilizadas. 
          </p>

        </div>

        <div className="p-9 border-r-gray-700 border border-gray-500 rounded">
          <span className="font-bold"> Inscreva-se</span>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input 
              type="text"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              Acessar
            </button>

          </form>

        </div>

      </div>

      <img src="/src/assets/home_image_01.png" className="mt-10" alt=""/>
    </div>
  )
}