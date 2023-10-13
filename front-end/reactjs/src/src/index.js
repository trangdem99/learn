import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));
const LazyApp = React.lazy(() => import('./app'));

root.render(
  <>
    <React.Suspense fallback={<LoadingSpinner />}>
      <LazyApp />
    </React.Suspense>
  </>
);
