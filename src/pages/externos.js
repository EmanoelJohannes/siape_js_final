import Externos from '@/screens/externos';
import DefaultLayout from '@/layouts/Default';
import { getAPIClient } from '@/services/axios';

export default function ExternosPage({ data }) {
  return (
    <DefaultLayout>
      <Externos data={data} />
    </DefaultLayout>
  );
}

export const getStaticProps = async (ctx) => {
  const api = getAPIClient(ctx);

  const { data } = await api.get('externos');

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
