import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { ReactSimbol } from "../components/ReactSimbol";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    console.log(name, email)

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="bg-react bg-top bg-no-repeat">
        <div className=" w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
          <div className="max-w-[640px] ">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Construa uma aplicação <span className="font-bold text-blue-300">Completa</span>, do zero, com <span className="font-bold text-blue-300">React</span>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Domine na prática uma das tecnologias mais utilizadas. 
            </p>

          </div>

          <div className="p-9 border border-blue-999 rounded">
            <span className="font-bold"> Inscreva-se</span>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
              <input
                type="text"
                required
                className="bg-gray-900 rounded px-5 h-14"
                placeholder="Seu nome completo"
                onChange={event => setName(event.target.value)}
              />
              <input 
                type="email"
                required
                className="bg-gray-900 rounded px-5 h-14"
                placeholder="Seu e-mail"
                onChange={event => setEmail(event.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-blue-777 uppercase py-4 rounded font-bold text-sm hover:bg-blue-888 hover:text-gray-400 transition-colors disabled:opacity-50"
                >
                Cadastrar
              </button>

            </form>

          </div>

        </div>
        {/* <ReactSimbol /> */}

        <img src="/src/assets/home_image_01.png" className="mt-10" alt=""/>
      </div>
    </div>
  )
}