import AppRoutes from './routes';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchProvider>
      <AppRoutes />
    </SearchProvider>
    </div>
  );
}

export default App;
