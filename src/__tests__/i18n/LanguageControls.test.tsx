import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render } from 'enzyme';
import LanguageControls from '@/i18n/LanguageControls';
import LanguageWrapper from '@/i18n/LanguageWrapper';

describe('testing: Separator', function () {
    const JSX = (
        <LanguageWrapper>
            <LanguageControls />
        </LanguageWrapper>
    );
    const Component = render(JSX);

    it('Snapshot correctly', function () {
        expect(Component).toMatchSnapshot();
    });

    it('Static HTML', function () {
        expect(Component.text()).toEqual('Выбор языкаRUEN');
    });

    it('Find all buttons', () => {
        expect(Component.find('button')).toHaveLength(2);
    });
});
