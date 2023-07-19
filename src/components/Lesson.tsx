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
                  'sidebar-lesson-div',
                  {
                    'bg-blue-500': isActiveLesson,

                    
                  }
                  )}
              >
                <header className="sidebar-lesson-status">
                  {
                  isLessonAvailable ? (
                    <span className={
                      classNames (
                        'sidebar-lesson-status text-blue-666 ',
                        {
                          'text-white': isActiveLesson
                        })
                      }
                    >
                    <CheckCircle size={20}/>
                      Liberado
                    </span>
                  ) : (
                    <span className="sidebar-lesson-status text-orange-999">
                    <Lock size={20} />
                      Em breve
                    </span>
                  )}
                    <span className="sidebar-lesson-mode">
                        { props.type === 'live' ? 'AO VIVO' : 'VIDEO' }
                    </span>
                </header>
                
                
                <span className= {
                    classNames (
                      'font-bold block mt-5',
                      {
                      'text-gray-444 ': !isActiveLesson
                    })
                  }
                >
                    { props.title }
                </span>
            </div> 
        </Link >
    )
}