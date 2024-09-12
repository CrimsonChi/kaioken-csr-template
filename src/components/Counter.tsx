import { useState } from "kaioken"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center ">
      <img 
        src="/favicon.svg" 
        className="w-32 h-32 animate-pulse cursor-pointer" 
        alt="kaioken logo" 
        onclick={() => setCount(count + 1)}
      />
      <p>{count}</p>
    </div>
  )
}
