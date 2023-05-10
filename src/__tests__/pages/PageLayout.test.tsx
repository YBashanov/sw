import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render } from 'enzyme';
import PageLayout from '@/app/pages/-page-layout/PageLayout';
import LanguageWrapper from '@/i18n/LanguageWrapper';

const TestPage = () => {
    return <div id="unique_key">TestPage</div>;
};

describe('testing: PageLayout', function () {
    const Wrapper = PageLayout(TestPage);
    const JSX = (
        <LanguageWrapper>
            <Wrapper />
        </LanguageWrapper>
    );
    const Component = render(JSX);

    it('Snapshot correctly', function () {
        expect(Component).toMatchSnapshot();
    });

    it('Static HTML', function () {
        expect(Component.text()).toEqual('TestPageДополнительноВыбор темыСтандартРозовыйЗеленыйВыбор языкаRUEN');
    });

    it('Checking the added content', function () {
        expect(Component.find('#unique_key')).toHaveLength(1);
    });
});
