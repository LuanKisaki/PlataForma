import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
    return (
      <div className="flex-1" >
          <div className="bg-gray-888 flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video bg-gray-999">

            </div>
          </div>

          <div className="p-8 max-w-[1100px] mx-auto">
            <div className="flex items-start gap-16">
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Criando Plataforma</h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Nesse video inicia-se criação de PlataForma
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <img src="" alt="" />
                </div>


              </div>

              <div className="flex flex-col w-1/3 gap-4">
                <a href="" className="p-4 text-sm bg-blue-777 flex items-center rounded font-bold uppercase gap-2 justify-center  hover:bg-blue-999 hover:text-gray-400 transition-colors">
                  <DiscordLogo size={24} />
                  Forum
                </a>
                <a href="" className="p-4 text-sm text-blue-777 border border-blue-777 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-777 hover:text-myblue-999 transition-colors">
                  <Lightning size={24} />
                  Desafio
                </a>

              </div>
            </div> 
            
            <div>

            </div>
          </div>
      </div>
    )

}