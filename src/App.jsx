import './App.css';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import Layout from '../src/components/Common/Layout'
import GlobalStyle from './styles/GlobalStyle';



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>
      <Layout/>
    </QueryClientProvider>
  );
}

export default App;
