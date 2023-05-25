import Discentes from '@/screens/discentes';
import DefaultLayout from '@/layouts/Default';
import { getAPIClient } from '@/services/axios';

export default function DiscentesPage({ data }) {
  return (
    <DefaultLayout>
      <Discentes data={data} />
    </DefaultLayout>
  );
}

export const getServerSideProps = async (ctx) => {
  const api = getAPIClient(ctx);

  const { data } = await api.get('discentes');

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
