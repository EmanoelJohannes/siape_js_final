import Externos from '@/screens/externos';
import DefaultLayout from '@/layouts/Default';
import { getAPIClient } from '@/services/axios';
import { parseCookies } from 'nookies';

export default function ExternosPage({ data }) {
  return (
    <DefaultLayout>
      <Externos data={data} />
    </DefaultLayout>
  );
}

export const getServerSideProps = async (ctx) => {
  const api = getAPIClient(ctx);
  const { '@siape:action': action } = parseCookies(ctx);

  const { data } = await api.get(`externos?type=${action}`);

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
