import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import usePreview from "../assets/home_image_01.png";

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

    navigate('/event/lesson/criando-plataforma')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="bg-react bg-top bg-no-repeat">
        <div className="w-full max-w-6xl px-4 grid gap-4 justify-between mt-20 mx-auto sm:grid-cols-2">
          <div className="max-w-2xl pb-4 text-center sm:text-left">
            <div className="m-auto flex items-center justify-center sm:justify-start">
              <Logo />
            </div>

            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Construa uma <span className="font-bold text-blue-300">Maratona</span> Completa com o <span className="font-bold text-blue-300">PlataForma</span>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Suas aulas online, seus materiais de apoio, suporte, biografia e professores em um só lugar.  
            </p>

          </div>

          <div className="max-w-lg sm:justify-self-end hover:saturate-200">
            <div className="p-9 max-w-xs mx-auto border border-blue-999 rounded">
              <span className="font-bold"> Inscreva-se</span>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-4 w-full">
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
                  className="mt-4 bg-blue-777 uppercase py-4 rounded font-bold text-sm hover:bg-blue-888 hover:text-gray-200 transition-colors disabled:opacity-50"
                  >
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className=" w-full flex items-center justify-between mt-20 mx-auto">
          <img src={ usePreview } className="" alt=""/>
        </div>

      </div>
    </div>
  )
}