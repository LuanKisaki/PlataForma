import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
const { slug } = useParams<{ slug: string}>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format (props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug;
  
    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-500">
                { availableDateFormatted }
            </span>

            <div
              className={
                classNames(
                  'rounded border border-blue-999 mt-2 p-4 group-hover:border-blue-500 transition-colors',
                  {
                    'bg-blue-500': isActiveLesson,
                  }
                  )}
              >
                <header className="flex items-center justify-between">
                  
                  {
                  isLessonAvailable ? (
  
                    <span className={
                      classNames (
                        'text-sm text-blue-666 font-medium flex items-center gap-2',
                        {
                          'text-white': isActiveLesson
                        })
                      }
                    >
                    <CheckCircle size={20}/>
                      Liberado
                    </span>
                  ) : (
                    <span className="text-sm text-orange-999 font-medium flex items-center gap-2">
                    <Lock size={20} />
                      Em breve
                    </span>
                  )}
                
                    <span className="text-xs rounded px-2 py-[0.125rem] text-gray-300  border border-green-300 font-bold ">
                        { props.type === 'live' ? 'AO VIVO' : 'VIDEO' }
                    </span>
                </header>
                
                <span className= {
                    classNames(
                      'font-bold text-gray-444 mt-5 block',
                      {
                      'text-white': isActiveLesson
                    })
                  }
                  >
                    { props.title }
                </span>
            </div> 
        </Link >
    )
}