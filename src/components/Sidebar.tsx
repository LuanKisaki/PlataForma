import { gql, useQuery } from '@apollo/client'
import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from "./Lesson"


export function Sidebar() {
    const { data } = useGetLessonsQuery()

    return (
        <aside className="w-1/3 bg-gray-888 p-6 border-l border-myblue-888 hidden invisible sm:inline sm:visible">
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}