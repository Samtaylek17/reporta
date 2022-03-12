import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

const HomePage = lazy(() => import('./pages/Home'));

const styles = {
  margin: '20px 0',
  marginBottom: '20px',
  height: '100vh',
  padding: '20% 50%',
  TextAlign: 'center',
  borderRadius: '4px',
};

const Spinner = () => (
  <div style={styles}>
    <Spin size="large" />
  </div>
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
