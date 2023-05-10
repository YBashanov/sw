import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render } from 'enzyme';
import CharactersPage from '@/app/pages/characters-page/CharactersPage';
import LanguageWrapper from '@/i18n/LanguageWrapper';
import RootStore from '@/models/RootStore';
import { Provider } from 'react-redux';

describe('testing: CharactersPage', function () {
    const JSX = (
        <Provider store={RootStore}>
            <LanguageWrapper>
                <CharactersPage />
            </LanguageWrapper>
        </Provider>
    );
    const Component = render(JSX);

    it('Snapshot correctly', function () {
        expect(Component).toMatchSnapshot();
    });

    it('Static HTML', function () {
        expect(Component.text()).toEqual(
            'ФильтрыСозданИмяГод рожденияЦвет глазЦвет волосЦвет кожиПолВысотаМассаФильмыNo dataДополнительноВыбор темыСтандартРозовыйЗеленыйВыбор языкаRUEN'
        );
    });
});
