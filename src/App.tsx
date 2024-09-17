import { Counter } from "./components/Counter"
import { Landing } from "./components/Landing"

export function App() {
  return (
    <div className="min-h-screen flex flex-col gap-20 justify-between px-10 py-20">
      <h1 className="text-3xl md:text-5xl leading-10 font-bold text-center">
        Welcome to your Kaioken CSR app!
      </h1>
      <Counter />
      <Landing />
    </div>
  )
}
