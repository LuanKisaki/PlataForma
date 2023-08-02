import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, CodesandboxLogo, DiscordLogo, FileArrowDown, Lightning, LinkedinLogo, WhatsappLogo } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";


interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
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
        <div className="h-full w-3/4 max-w-[1100px] max-h-[60vh] aspect-video bg-gray-999">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="lg:p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex-1 p-4 ">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-justify">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex flex-row items-start lg:items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-666"
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                />
                <div>
                  <span className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </span>
                  <span className="text-gray-200 text-sm block text-justify">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col self-center lg:self-start p-4 w-full lg:w-1/3 gap-4">
            <a
              className="video-button bg-blue-777 hover:saturate-200"
              href="https://wa.me/message/VWLMKUPXHCLMP1"
              target="_blank"
              >
              <WhatsappLogo size={24} />
              Contato
            </a>
            <a 
              className="video-button text-blue-777 hover:bg-blue-777 hover:text-white"
              href="https://linkedin.com/in/LuanKisaki"
              target="_blank"
              >
              <LinkedinLogo size={24} />
              me visite
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 my-20 lg:grid lg:grid-cols-2">
          <a href="" className="bg-myblue-888 mx-4 rounded overflow-hidden flex items-stretch justify-justify gap-6 hover:bg-myblue-666 transition-colors">
            <div className="bg-blue-888 p-4 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <h2 className="font-bold text-2xl">
                Material Complementar
              </h2>
              <p>Acesse o material complementar para mais conteúdo</p>
            </div>
            <div className="flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a href="" className="bg-myblue-888 rounded overflow-hidden flex items-stretch gap-6 hover:bg-myblue-666 transition-colors mx-4">
            <div className="bg-blue-888 p-4 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <h2 className="font-bold text-2xl">Material Complementar</h2>
              <p>Acesse o material complementar para mais conteúdo</p>
            </div>
            <div className="flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )

}