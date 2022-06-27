import { gql, useQuery } from '@apollo/client'
import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from "./Lesson"


export function Sidebar() {
    const { data } = useGetLessonsQuery()

    return (
        <aside className="w-1/3 bg-gray-888 p-6 border-l border-myblue-888">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-myblue-888 block">
                Sidebar
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title= {lesson.title}
                            slug= {lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type= {lesson.lessonType}                 
                        />
                    )
                })}
            </div>
        </aside>
    )
}