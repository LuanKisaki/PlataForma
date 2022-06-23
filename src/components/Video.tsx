import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

export function Video() {
    return (
      <div className="flex-1" >
          <div className="bg-gray-888 flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video bg-gray-999">
              Video
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
                  <img src="https://github.com/LKisaki.png" alt="Luan Kisaki"
                    className="h-16 w-16 rounded-full border-2 border-blue-777"
                  />
                  <div>
                    <span className="font-bold text-2xl block">Luan Kisaki</span>
                    <span className="text-gray-200 text-sm block">Front end Dev</span>
                  </div>
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
            
            <div className="gap-8 mt-20 grid grid-cols-2">
              <a href="" className="bg-myblue-888 rounded overflow-hidden flex items-stretch gap-6 hover:bg-myblue-666 transition-colors">
                <div className="bg-blue-888 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                  <span className="font-bold text-2xl">
                    Material Complementar
                  </span>
                  <p>Acesse o material complementar para mais conteúdo</p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
              </a>

              <a href="" className="bg-myblue-888 rounded overflow-hidden flex items-stretch gap-6 hover:bg-myblue-666 transition-colors">
                <div className="bg-blue-888 h-full p-6 flex items-center">
                  <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                  <span className="font-bold text-2xl">Material Complementar</span>
                  <p>Acesse o material complementar para mais conteúdo</p>
                </div>
                <div className="h-full p-6 flex items-center">
                  <CaretRight size={24} />
                </div>
              </a>
              

            </div>
          </div>
      </div>
    )

}