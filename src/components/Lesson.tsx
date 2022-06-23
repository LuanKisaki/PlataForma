import { } from 'phosphor-react'

export function Lesson() {
    return (
        <a href="#">
            <span className="text-gray-500">
                Segunda
            </span>

            <div className="rounded border border-blue-999 mt-2 p-4 ">
                
                <header className="flex items-center justify-between">
                    <span className="text-sm text-blue-666 font-medium">
                        Status
                    </span>
                    <span className="text-xs rounded px-2 py-[0.125rem] text-white  border border-green-300 font-bold ">
                        Ao vivo
                    </span>
                </header>
                
                <span className="font-bold text-gray-300 mt-5 block">
                    Video 01
                </span>
            </div> 
        </a>
    )

}