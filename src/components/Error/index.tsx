import style from './Error.module.scss'

export const Error = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Something went wrong,</h2>
      <h3 className={style.subtitle}>try it a little later.</h3>
    </div>
  )
}
