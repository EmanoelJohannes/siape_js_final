import DefaultLayout from '@/layouts/Default';
import Departamentos from '@/screens/departamentos';
import { getAPIClient } from '@/services/axios';
import { parseCookies } from 'nookies';

export default function DepartamentosPage({data}) {
  return (
    <DefaultLayout>
      <Departamentos data={data} />
    </DefaultLayout>
  );
}

export const getServerSideProps = async (ctx) => {
  const api = getAPIClient(ctx);

  const { '@siape:action': action } = parseCookies(ctx);

  const { data } = await api.get(`generalMetrics?type=${action}`);
  
  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }

  return {
    props: {
      data: data
    }
  };
};
