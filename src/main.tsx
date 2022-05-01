import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element, verify main.tsx file');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);