import me from '../assets/me.jpeg'

export default function PresentationCard() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-1 flex-col justify-evenly py-4 text-left">
        <div>
          <p className="uppercase">Hey, Hola soy</p>
          <hr className="divider" />
        </div>
        <div>
          <h2 className="text-7xl font-bold">Jeison B.</h2>
          <h3 className="text-xl">FullStack Developer</h3>
        </div>
        <div>jedabero20@gmail.com</div>
      </div>

      <div className="flex-1">
        <img src={me} className="rounded-full" />
      </div>
    </div>
  )
}
