import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRoutes } from './routes';
import ThemeWrapper from '@/themes/ThemeWrapper';
import LanguageWrapper from '@/i18n/LanguageWrapper';
import RootStore from '@/models/RootStore';

import '../themes/index.less';
import './index.less';

const App: React.FC = () => {
    return (
        <Provider store={RootStore}>
            <div className="app">
                <ThemeWrapper>
                    <LanguageWrapper>
                        <BrowserRouter>
                            <AppRoutes />
                        </BrowserRouter>
                    </LanguageWrapper>
                </ThemeWrapper>
            </div>
        </Provider>
    );
};

export default App;
