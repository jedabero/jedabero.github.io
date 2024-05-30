import { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'

import me from '../assets/me.jpeg'

const socials = [
  {
    id: 'twitter',
    icon: faTwitter,
    handle: '@jedabero',
    url: 'twitter.com/jedabero'
  },
  {
    id: 'youtube',
    icon: faYoutube,
    handle: '@jedabero',
    url: 'www.youtube.com/@jedabero'
  },
  {
    id: 'twitch',
    icon: faTwitch,
    handle: '@jedabero',
    url: 'www.twitch.tv/jedabero'
  },
  {
    id: 'linkedIn',
    icon: faLinkedin,
    handle: 'jedabero',
    url: 'www.linkedin.com/in/jedabero'
  },
  {
    id: 'github',
    icon: faGithub,
    handle: '@jedabero',
    url: 'github.com/jedabero'
  }
]
const email = 'jedabero20@gmail.com'

export default function PresentationCard() {
  const [showEmail, setShowEmail] = useState(false)
  const handleReveal = useCallback(() => {
    setShowEmail(show => !show)
  }, [])
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
        <div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            {showEmail ? (
              <a href={`mailto:${email}`}>{email}</a>
            ) : (
              '**********@*****.***'
            )}{' '}
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              onClick={handleReveal}
              icon={showEmail ? faEyeSlash : faEye}
            />
          </div>
          {socials.map(({ id, icon, handle, url }) => (
            <div key={id}>
              <FontAwesomeIcon icon={icon} />{' '}
              <a href={`https://${url}`} target="_blank">
                {handle}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <img src={me} className="rounded-full" />
      </div>
    </div>
  )
}
