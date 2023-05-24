import DefaultLayout from '@/layouts/Default'
import Home from '@/screens/home'

export default function HomePage() {
  return (
    <DefaultLayout>
      <h1>Home page</h1>
    </DefaultLayout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
