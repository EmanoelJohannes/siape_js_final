import Dashboard from '@/screens/dashboard';
import DefaultLayout from '@/layouts/Default';
import { getAPIClient } from '@/services/axios';

export default function DashboardPage() {
  return (
    <DefaultLayout>
      <h1>Dashboard</h1>
    </DefaultLayout>
  );
}

