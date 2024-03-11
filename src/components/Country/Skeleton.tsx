import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={450}
    viewBox='0 0 310 348'
    backgroundColor='#c0c0c0'
    foregroundColor='#808080'
  >
    <rect x='6' y='17' rx='4' ry='4' width='400' height='380' />
  </ContentLoader>
)

export default Skeleton
