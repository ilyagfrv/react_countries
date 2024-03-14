import style from './NotFoundInfo.module.scss'
import Image from '../../assets/images/not-found.svg'

export default function NotFoundInfo() {
  return (
    <div className={style.container}>
      <img className={style.image} src={Image} alt='' />
      <p className={style.description}>This page does not exist!</p>
    </div>
  )
}
