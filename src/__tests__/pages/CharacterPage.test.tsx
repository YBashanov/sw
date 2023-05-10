import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render } from 'enzyme';
import CharacterPage from '@/app/pages/character-page/CharacterPage';
import LanguageWrapper from '@/i18n/LanguageWrapper';
import RootStore from '@/models/RootStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('testing: CharacterPage', function () {
    const JSX = (
        <Provider store={RootStore}>
            <LanguageWrapper>
                <BrowserRouter>
                    <CharacterPage />
                </BrowserRouter>
            </LanguageWrapper>
        </Provider>
    );
    const Component = render(JSX);

    it('Snapshot correctly', function () {
        expect(Component).toMatchSnapshot();
    });

    it('Static HTML', function () {
        expect(Component.text()).toEqual('ДополнительноВыбор темыСтандартРозовыйЗеленыйВыбор языкаRUEN');
    });
});
