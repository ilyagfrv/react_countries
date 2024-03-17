import style from './NotFoundBlock.module.scss'
import Image from '../../assets/images/no_page.svg'

export default function NotFoundBlock() {
  return (
    <div className={style.container}>
      <img className={style.image} src={Image} alt='' />
      <p className={style.description}>This page does not exist.</p>
    </div>
  )
}
