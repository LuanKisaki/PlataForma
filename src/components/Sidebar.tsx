import { Lesson } from "./Lesson";

export function Sidebar() {
    return (
        <aside className="w-1/3 bg-gray-888 p-6 border-l border-myblue-999">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-myblue-999 block">
                Sidebar
            </span>
            <div className="flex flex-col gap-8">
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </aside>
    )

}