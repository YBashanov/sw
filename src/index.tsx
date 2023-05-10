import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';

const Root: React.FC = () => {
    return <App />;
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Root />);
