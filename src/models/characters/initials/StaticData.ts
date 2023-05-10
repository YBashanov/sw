import { Types as CommonTypes } from '@/models/common';
import { intl } from '@/i18n';

export const eyeColor: CommonTypes.SelectType[] = [
    {
        value: '',
        label: intl.source.formatMessage({ id: 'App.StaticData.NotSelected' }),
    },
    {
        value: 'blue',
        label: intl.source.formatMessage({ id: 'App.StaticData.Blue' }),
    },
    {
        value: 'yellow',
        label: intl.source.formatMessage({ id: 'App.StaticData.Yellow' }),
    },
    {
        value: 'red',
        label: intl.source.formatMessage({ id: 'App.StaticData.Red' }),
    },
    {
        value: 'brown',
        label: intl.source.formatMessage({ id: 'App.StaticData.Brown' }),
    },
    {
        value: 'orange',
        label: intl.source.formatMessage({ id: 'App.StaticData.Orange' }),
    },
];

export const hairColor: CommonTypes.SelectType[] = [
    {
        value: '',
        label: intl.source.formatMessage({ id: 'App.StaticData.NotSelected' }),
    },
    {
        value: 'n/a',
        label: intl.source.formatMessage({ id: 'App.StaticData.NoData' }),
    },
    {
        value: 'blond',
        label: intl.source.formatMessage({ id: 'App.StaticData.Blond' }),
    },
    {
        value: 'brown',
        label: intl.source.formatMessage({ id: 'App.StaticData.Brown' }),
    },
    {
        value: 'black',
        label: intl.source.formatMessage({ id: 'App.StaticData.Black' }),
    },
    {
        value: 'grey',
        label: intl.source.formatMessage({ id: 'App.StaticData.Grey' }),
    },
    {
        value: 'white',
        label: intl.source.formatMessage({ id: 'App.StaticData.White' }),
    },
    {
        value: 'auburn',
        label: intl.source.formatMessage({ id: 'App.StaticData.Auburn' }),
    },
];

export const skinColor: CommonTypes.SelectType[] = [
    {
        value: '',
        label: intl.source.formatMessage({ id: 'App.StaticData.NotSelected' }),
    },
    {
        value: 'n/a',
        label: intl.source.formatMessage({ id: 'App.StaticData.NoData' }),
    },
    {
        value: 'fair',
        label: intl.source.formatMessage({ id: 'App.StaticData.Fair' }),
    },
    {
        value: 'gold',
        label: intl.source.formatMessage({ id: 'App.StaticData.Gold' }),
    },
    {
        value: 'white',
        label: intl.source.formatMessage({ id: 'App.StaticData.White' }),
    },
    {
        value: 'light',
        label: intl.source.formatMessage({ id: 'App.StaticData.Light' }),
    },
    {
        value: 'blond',
        label: intl.source.formatMessage({ id: 'App.StaticData.Blond' }),
    },
    {
        value: 'orange',
        label: intl.source.formatMessage({ id: 'App.StaticData.Orange' }),
    },
    {
        value: 'grey',
        label: intl.source.formatMessage({ id: 'App.StaticData.Grey' }),
    },
    {
        value: 'green',
        label: intl.source.formatMessage({ id: 'App.StaticData.Green' }),
    },
    {
        value: 'brown',
        label: intl.source.formatMessage({ id: 'App.StaticData.Brown' }),
    },
];

export const gender: CommonTypes.SelectType[] = [
    {
        value: '',
        label: intl.source.formatMessage({ id: 'App.StaticData.NotSelected' }),
    },
    {
        value: 'n/a',
        label: intl.source.formatMessage({ id: 'App.StaticData.NoData' }),
    },
    {
        value: 'male',
        label: intl.source.formatMessage({ id: 'App.StaticData.Male' }),
    },
    {
        value: 'female',
        label: intl.source.formatMessage({ id: 'App.StaticData.Female' }),
    },
    {
        value: 'hermaphrodite',
        label: intl.source.formatMessage({ id: 'App.StaticData.Hermaphrodite' }),
    },
];
