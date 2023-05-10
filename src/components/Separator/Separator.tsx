import React from 'react';
import { useIntl } from 'react-intl';

import './index.less';

type SeparatorType = {
    label?: React.ReactNode;
};

/**
 * Разделитель
 */
const Separator: React.FC<SeparatorType> = props => {
    const { formatMessage: f } = useIntl();
    const { label = f({ id: 'App.Separator.DefaultLabel' }) } = props;

    return (
        <div className="separator">
            <div className="label">{label}</div>
        </div>
    );
};

export default Separator;
