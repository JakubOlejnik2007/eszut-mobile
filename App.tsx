import { StatusBar, SafeAreaView } from 'react-native';
import Auth from './auth/Auth';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="dark-content" backgroundColor="#f1b3cc" />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f1b3cc" }}>
          <Auth />
        </SafeAreaView>
      </QueryClientProvider>
    </>
  );
}