import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render } from 'enzyme';
import Separator from '@/components/Separator/Separator';
import LanguageWrapper from '@/i18n/LanguageWrapper';

describe('testing: Separator (component)', function () {
    const JSX = (
        <LanguageWrapper>
            <Separator />
        </LanguageWrapper>
    );
    const Component = render(JSX);

    it('Snapshot correctly', function () {
        expect(Component).toMatchSnapshot();
    });

    it('Static HTML', function () {
        expect(Component.text()).toEqual('Дополнительно');
    });
});
