import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Types } from '@/models/characters';
import { getNumberByLongString } from '@/helpers';
import { CHARACTER_REDIRECT } from '@/constants';
import { intl } from '@/i18n';

/**
 * Описание столбцов таблицы
 */
export const tableColumns = [
    {
        title: intl.source.formatMessage({ id: 'App.Character.Created' }),
        dataIndex: 'created',
        key: 'created',
        render: (value: string) => {
            return moment(value).format('YYYY-MM-DD');
        },
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.Name' }),
        dataIndex: 'name',
        key: 'name',
        render: (value: string, record: Types.RecordType) => {
            return <Link to={`${CHARACTER_REDIRECT}${getNumberByLongString(record.url)}`}>{value}</Link>;
        },
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.BirthYear' }),
        dataIndex: 'birth_year',
        key: 'birth_year',
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.EyeColor' }),
        dataIndex: 'eye_color',
        key: 'eye_color',
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.HairColor' }),
        dataIndex: 'hair_color',
        key: 'hair_color',
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.SkinColor' }),
        dataIndex: 'skin_color',
        key: 'skin_color',
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.Gender' }),
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.Height' }),
        dataIndex: 'height',
        key: 'height',
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.Mass' }),
        dataIndex: 'mass',
        key: 'mass',
    },
    {
        title: intl.source.formatMessage({ id: 'App.Character.Films' }),
        dataIndex: 'films',
        key: 'films',
        render: (value: string[]) => {
            let films = '';
            for (let i = 0; i < value.length; i++) {
                const number = getNumberByLongString(value[i]);
                if (number) {
                    films += number + ', ';
                }
            }
            if (films) {
                films = films.substring(0, films.length - 2);
            }
            return films;
        },
    },
];
