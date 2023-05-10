import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PREFIX_CLS } from '@/constants';
import { useIntl } from 'react-intl';
import { Button, Input, Space, Drawer, Select, InputNumber } from 'antd';
import { ActionsSync, Selectors, Initials } from '@/models/characters';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '@/helpers';

const { Search } = Input;
const mainClassName = `${PREFIX_CLS}-characters-page-filters`;

const CharactersFilters: React.FC = () => {
    const { formatMessage: f } = useIntl();
    const dispatch = useDispatch();
    const pageState = useSelector(Selectors.getState);
    const isFiltersEmpty = useSelector(Selectors.isFiltersEmpty);

    const [searchState, setSearchState] = useState(pageState.search);
    useEffect(() => {
        setSearchState(pageState.search);
    }, [pageState.search]);

    const [filterState, setFilterState] = useState(pageState.filters);
    useEffect(() => {
        setFilterState(pageState.filters);
    }, [pageState.filters]);

    const [isOpen, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const closeDrawer = () => {
        setOpen(false);
    };

    /**
     * Поиск по имени
     */
    const searchRequest = useCallback(
        (value: string) => {
            dispatch(
                ActionsSync.setPagination({
                    ...pageState.pagination,
                    current: 1,
                })
            );
            dispatch(ActionsSync.setFilters(Initials.initialFilters));
            dispatch(ActionsSync.setSearch({ value }));
        },
        [dispatch, pageState.pagination]
    );

    const debounceRequest = useMemo(() => debounce(searchRequest, 500), [searchRequest]);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setSearchState(() => {
                void debounceRequest(value);
                return value;
            });
        },
        [debounceRequest]
    );

    /**
     * Выбор характеристики персонажа (Select)
     */
    const handleChangeCharacteristics = useCallback(
        (characteristicName: string) => (value: string) => {
            dispatch(ActionsSync.setSearch({ value: '' }));
            dispatch(
                ActionsSync.setFilters({
                    ...pageState.filters,
                    [characteristicName]: value,
                })
            );
        },
        [dispatch, pageState.filters]
    );

    const handleCleanFilters = useCallback(() => {
        dispatch(ActionsSync.setFilters(Initials.initialFilters));
    }, [dispatch]);

    return (
        <div className={mainClassName}>
            <Space direction="horizontal">
                <Search
                    value={searchState}
                    placeholder={f({ id: 'App.Filter.NameSearch' })}
                    onChange={handleSearch}
                    enterButton
                />
                <Button type="primary" onClick={showDrawer}>
                    {f({ id: 'App.Control.Filters' })}
                </Button>
                {!isFiltersEmpty && (
                    <Button onClick={handleCleanFilters}>{f({ id: 'App.Control.CleanFilters' })}</Button>
                )}
                <Drawer title={f({ id: 'App.Control.Filters' })} placement="right" onClose={closeDrawer} open={isOpen}>
                    <Space direction="horizontal">
                        <span className={`${mainClassName}-select-label`}>{f({ id: 'App.Filter.EyeColor' })}</span>
                        <Select
                            className={`${mainClassName}-select`}
                            value={filterState.eye_color}
                            onChange={handleChangeCharacteristics('eye_color')}
                            options={Initials.StaticData.eyeColor}
                        />
                    </Space>
                    <Space direction="horizontal">
                        <span className={`${mainClassName}-select-label`}>{f({ id: 'App.Filter.HairColor' })}</span>
                        <Select
                            className={`${mainClassName}-select`}
                            value={filterState.hair_color}
                            onChange={handleChangeCharacteristics('hair_color')}
                            options={Initials.StaticData.hairColor}
                        />
                    </Space>
                    <Space direction="horizontal">
                        <span className={`${mainClassName}-select-label`}>{f({ id: 'App.Filter.SkinColor' })}</span>
                        <Select
                            className={`${mainClassName}-select`}
                            value={filterState.skin_color}
                            onChange={handleChangeCharacteristics('skin_color')}
                            options={Initials.StaticData.skinColor}
                        />
                    </Space>
                    <Space direction="horizontal">
                        <span className={`${mainClassName}-select-label`}>{f({ id: 'App.Filter.Gender' })}</span>
                        <Select
                            className={`${mainClassName}-select`}
                            value={filterState.gender}
                            onChange={handleChangeCharacteristics('gender')}
                            options={Initials.StaticData.gender}
                        />
                    </Space>
                    <Space direction="horizontal">
                        <span className={`${mainClassName}-select-label`}>
                            {f({ id: 'App.Filter.Height' })}: {f({ id: 'App.Filter.From' })}
                        </span>
                        <InputNumber
                            value={filterState.heightStart}
                            onChange={handleChangeCharacteristics('heightStart')}
                        />
                        <span>{f({ id: 'App.Filter.To' })}</span>
                        <InputNumber
                            value={filterState.heightEnd}
                            onChange={handleChangeCharacteristics('heightEnd')}
                        />
                    </Space>
                    {!isFiltersEmpty && (
                        <Space direction="horizontal">
                            <Button type="primary" onClick={handleCleanFilters}>
                                {f({ id: 'App.Control.CleanFilters' })}
                            </Button>
                        </Space>
                    )}
                </Drawer>
            </Space>
        </div>
    );
};

export default CharactersFilters;
