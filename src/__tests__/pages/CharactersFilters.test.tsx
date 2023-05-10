import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render } from 'enzyme';
import CharactersFilters from '@/app/pages/characters-page/CharactersFilters';
import LanguageWrapper from '@/i18n/LanguageWrapper';
import RootStore from '@/models/RootStore';
import { Provider } from 'react-redux';

describe('testing: CharactersFilters', function () {
    const JSX = (
        <Provider store={RootStore}>
            <LanguageWrapper>
                <CharactersFilters />
            </LanguageWrapper>
        </Provider>
    );
    const Component = render(JSX);

    it('Snapshot correctly', function () {
        expect(Component).toMatchSnapshot();
    });

    it('Static HTML', function () {
        expect(Component.text()).toEqual('Фильтры');
    });

    it('Number of buttons are 2', function () {
        const button = Component.find('button');
        expect(button.length).toBe(2);
    });
});
