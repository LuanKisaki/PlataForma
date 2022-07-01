import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, CodesandboxLogo, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";


interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const {data} = useGetLessonBySlugQuery ({
    variables: {
      slug: props.lessonSlug,
    }
  })


  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

    return (
      <div className="flex-1" >
          <div className="bg-gray-999 flex justify-center">
            <div className="h-full  w-3/4 max-w-[1100px] max-h-[60vh] aspect-video bg-gray-999">
              <Player>
                <Youtube videoId={data.lesson.videoId} />
                <DefaultUi />
              </Player>
            </div>
          </div>

          <div className="p-8 max-w-[1100px] mx-auto">
            <div className="flex items-start gap-16">
              <div className="flex-1">
                <h1 className="text-2xl font-bold">
                  {data.lesson.title}
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                {data.lesson.description}
                </p>
              {data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-6">
                  <img className="h-16 w-16 rounded-full border-2 border-blue-777"
                    src={data.lesson.teacher.avatarURL}
                    alt={data.lesson.teacher.name}
                    />
                  <div>
                    <span className="font-bold text-2xl block">{data.lesson.teacher.name}</span>
                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                  </div>
                </div>
              )}
            </div>

              <div className="flex flex-col w-1/3 gap-4">
                <a href="" className="video-button bg-blue-777  hover:bg-blue-999 hover:border-blue-999 hover:text-gray-400">
                  <DiscordLogo size={24} />
                  Forum
                </a>
                <a href="" className="video-button text-blue-777 hover:bg-blue-777 hover:text-white">
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