import { Router, Route, Link } from "kaioken"
import { Counter } from "./components/Counter"
import { Landing } from "./components/Landing"


export function App() {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-3xl font-bold mb-24 text-center">react but <s>better</s> worse</p>
      <Counter />
      <Landing />
    </div>
  )
}
