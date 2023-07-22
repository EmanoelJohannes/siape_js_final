import DefaultLayout from '@/layouts/Default';
import Dashboard from '@/screens/dashboard';
import { getAPIClient } from '@/services/axios';
import { parseCookies } from 'nookies';

export default function DashboardPage({ data }) {
  return (
    <DefaultLayout>
      <Dashboard data={data} />
    </DefaultLayout>
  );
}

export const getServerSideProps = async (ctx) => {
  const api = getAPIClient(ctx);
  const { '@siape:action': action } = parseCookies(ctx);

  const { data } = await api.get(`metrics-public?type=${action}`);

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
