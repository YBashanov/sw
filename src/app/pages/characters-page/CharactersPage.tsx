import React from 'react';
import { Helmet } from 'react-helmet';
import { PREFIX_CLS } from '@/constants';
import { AnyAction } from '@reduxjs/toolkit';
import PageLayout from '@/app/pages/-page-layout';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spin } from 'antd';
import { PaginationProps } from 'antd/lib/pagination';
import { tableColumns } from './tableColumns';
import { Actions, ActionsSync, Selectors, Convertors } from '@/models/characters';
import { useIntl } from 'react-intl';
import { CharactersFilters } from '@/app/pages/characters-page';

import './index.less';

const mainClassName = `${PREFIX_CLS}-characters-page`;

/**
 * Список всех персонажей
 */
const CharactersPage: React.FC = () => {
    const { formatMessage: f } = useIntl();
    const dispatch = useDispatch();
    const pageState = useSelector(Selectors.getState);

    React.useEffect(() => {
        const request = Convertors.requestGetTable(pageState);
        const result = dispatch(
            ActionsSync.getTableData({
                ...request,
                hasLocal: '',
            })
        );

        if (result.payload.hasLocal === '0') {
            dispatch(Actions.getTableData(request) as unknown as AnyAction);
        }
    }, [dispatch, pageState.pagination.current, pageState.search, pageState.filters]);

    /**
     * Переход по страницам (пагинация)
     */
    const onChange = (pagination: PaginationProps) => {
        dispatch(
            ActionsSync.setPagination({
                ...pageState.pagination,
                current: pagination.current,
            })
        );
    };

    return (
        <div className={mainClassName}>
            <Helmet>
                <title>{f({ id: 'App.Title.Characters' })}</title>
            </Helmet>
            <CharactersFilters />
            <Table
                dataSource={pageState.tableData}
                rowKey="url"
                columns={tableColumns}
                pagination={pageState.pagination}
                onChange={onChange}
                loading={{ indicator: <Spin />, spinning: !pageState.isLoad }}
            />
        </div>
    );
};

export default PageLayout(CharactersPage);
