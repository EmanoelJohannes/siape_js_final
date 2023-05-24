import Docentes from '@/screens/docentes';
import DefaultLayout from '@/layouts/Default';
import { getAPIClient } from '@/services/axios';

export default function DocentesPage({ data }) {
  return (
    <DefaultLayout>
      <Docentes data={data} />
    </DefaultLayout>
  );
}

// export const getStaticProps = async (ctx) => {
//   const api = getAPIClient(ctx);

//   const { data } = await api.get('docentes');
//   console.log('data docentes', data);
  
//   return {
//     props: {
//       data: data
//     }
//   };
// };


export const getServerSideProps = async ctx => {
  const api = getAPIClient(ctx)

  const { data } = await api.get('docentes');

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }

  return {
    props: {
      data: data
    }
  };
}