export function Landing() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap gap-8 justify-center">
        <LandingCard
          iconSrc="/signal.svg"
          text="Global state via signals/stores"
        />
        <LandingCard
          iconSrc="/route.svg"
          text="Comprehensive routing & CSR utilities by default"
        />
        <LandingCard
          iconSrc="/hook.svg"
          text="Granular control of reactivity & state"
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
    <div className="flex flex-col md:basis-1/4 flex-grow items-center text-center gap-4 rounded-xl border border-white border-opacity-5 bg-white bg-opacity-5 p-6 shadow-lg backdrop-blur-md">
      <img src={iconSrc} className="w-12 h-12 opacity-60" alt={text} />
      <p className="text-lg font-thin">{text}</p>
    </div>
  )
}
