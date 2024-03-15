import { useState } from "kaioken"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      <p>Count: {count}</p>
      <button
        className="p-2 bg-blue-500 text-white"
        onclick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  )
}
