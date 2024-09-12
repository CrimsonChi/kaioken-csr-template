import { Router, Route, Link } from "kaioken"


export function Landing () {
    
    return (
        <div className="flex flex-col">
            <p className="m-12">Welcome to Kaioken</p>
            <div className="flex">

            <span>
            <img src="/signal.svg" className="w-16 h-16 m-auto justify-normal pb-4" alt="Route" />
            <img src="/arrowd.svg" className="m-auto justify-normal animate-bounce" alt="Route" />
            <p className="px-4 m-8">global state via signals/stores</p>
            </span>

            <span>
            <img src="/route.svg" className="w-16 h-16 m-auto justify-normal pb-4" alt="Route" />
            <img src="/arrowd.svg" className="m-auto justify-normal animate-bounce" alt="Route" />
            <p className="px-4 m-8">routing straight out of the box</p>
            </span>

            <span>
            <img src="/hook.svg" className="w-16 h-16 m-auto justify-normal pb-4" alt="Route" />
            <img src="/arrowd.svg" className="m-auto justify-normal animate-bounce" alt="Route" />
            <p className="px-4 m-8">granular control of reactivity/state</p>            
            </span>
            </div>
        </div>
    )
}