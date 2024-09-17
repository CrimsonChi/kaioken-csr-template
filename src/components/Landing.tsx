export function Landing() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-8 justify-center">
        <LandingCard
          iconSrc="/signal.svg"
          text="global state via signals/stores"
        />
        <LandingCard
          iconSrc="/route.svg"
          text="routing straight out of the box"
        />
        <LandingCard
          iconSrc="/hook.svg"
          text="granular control of reactivity & state"
        />
      </div>
      <div className="flex justify-center">
        <small className="text-stone-200">
          Learn more at{" "}
          <a href="https://kaioken.dev" target="_blank" className="underline">
            kaioken.dev
          </a>
        </small>
      </div>
    </div>
  )
}

type LandingCardProps = {
  iconSrc: string
  text: string
}
function LandingCard({ iconSrc, text }: LandingCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <img src={iconSrc} className="w-16 h-16" alt="Route" />
      <img src="/arrowd.svg" className="animate-bounce" alt="Route" />
      <p>{text}</p>
    </div>
  )
}
