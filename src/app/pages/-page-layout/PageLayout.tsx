import React from 'react';
import { PREFIX_CLS } from '@/constants';
import Separator from '@/components/Separator';
import ThemeControls from '@/themes/ThemeControls';
import LanguageControls from '@/i18n/LanguageControls';

import './index.less';

const mainClassName = `${PREFIX_CLS}-page-layout`;

const PageLayout = (Page: React.ElementType) => {
    return function WrappedPage(): React.ReactElement {
        return (
            <div className={`${mainClassName}`}>
                <div className={`${mainClassName}-content`}>
                    <div className={`${mainClassName}-content-page`}>
                        <Page />
                    </div>
                </div>
                <div className={`${mainClassName}-footer`}>
                    <Separator />
                    <ThemeControls />
                    <LanguageControls />
                </div>
            </div>
        );
    };
};

export default PageLayout;
