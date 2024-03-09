import style from './NotFoundInfo.module.scss'

export default function NotFoundInfo() {
  return (
    <div className={style.container}>
      <span>😕</span>
      <p className={style.description}>This page doesn't exist</p>
    </div>
  )
}
