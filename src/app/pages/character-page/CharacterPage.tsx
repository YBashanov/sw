import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { PREFIX_CLS } from '@/constants';
import PageLayout from '@/app/pages/-page-layout';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsSync, Selectors } from '@/models/characters';
import { useLocation, useNavigate } from 'react-router-dom';
import { getNumberByLongString } from '@/helpers';
import { Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { CHARACTER_URL, CHARACTERS_REDIRECT } from '@/constants';

import './index.less';

const mainClassName = `${PREFIX_CLS}-character-page`;

const { Title, Text } = Typography;

/**
 * Страница одного персонажа
 */
const CharacterPage: React.FC = () => {
    const { formatMessage: f } = useIntl();
    const dispatch = useDispatch();
    const pageState = useSelector(Selectors.getState);
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        try {
            dispatch(
                ActionsSync.getCharacter({
                    url: `${CHARACTER_URL}${String(getNumberByLongString(location.pathname))}/`,
                })
            );
        } catch (e) {
            window.location.pathname = CHARACTERS_REDIRECT;
        }
    }, [dispatch, location, pageState.tableData]);

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    /**
     * Изменение характеристики у персонажа
     */
    const handleChange = useCallback(
        (fieldName: string) => (value: string) => {
            dispatch(
                ActionsSync.setRecord({
                    rowKey: 'url',
                    valueKey: pageState.character.url,
                    dataKey: 'tableData',
                    dataIndex: fieldName,
                    value,
                })
            );
            dispatch(
                ActionsSync.updateMemory({
                    url: pageState.character.url,
                    dataIndex: fieldName,
                    value,
                })
            );
        },
        [dispatch, pageState.character]
    );

    /**
     * Настройки параметров редактирования характеристик персонажа
     */
    const editableParams = useCallback(
        (fieldName: string) => {
            return {
                onChange: handleChange(fieldName),
                tooltip: f({ id: 'App.Control.Edit' }),
            };
        },
        [f, handleChange]
    );

    if (pageState.character) {
        return (
            <div className={mainClassName}>
                <Helmet>
                    <title>
                        {f({ id: 'App.Title.Character' })}: {pageState.character.name}
                    </title>
                </Helmet>
                <div className={`${mainClassName}-back`} onClick={goBack}>
                    <ArrowLeftOutlined /> {f({ id: 'App.Control.Back' })}
                </div>
                <div className={`${mainClassName}-content`}>
                    <div className={`${mainClassName}-header`}>
                        <Title level={4} className={`${mainClassName}-header-label`}>
                            {f({ id: 'App.Character.CharacterPage' })}:
                        </Title>
                        <Title level={4} className={`${mainClassName}-header-value`}>
                            {pageState.character.name}
                        </Title>
                    </div>
                    <div className={`${mainClassName}-body`}>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.Name' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('name')}>
                                {pageState.character.name}
                            </Text>
                        </div>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.BirthYear' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('birth_year')}>
                                {pageState.character.birth_year}
                            </Text>
                        </div>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.EyeColor' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('eye_color')}>
                                {pageState.character.eye_color}
                            </Text>
                        </div>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.HairColor' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('hair_color')}>
                                {pageState.character.hair_color}
                            </Text>
                        </div>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.SkinColor' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('skin_color')}>
                                {pageState.character.skin_color}
                            </Text>
                        </div>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.Gender' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('gender')}>
                                {pageState.character.gender}
                            </Text>
                        </div>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.Height' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('height')}>
                                {pageState.character.height}
                            </Text>
                        </div>
                        <div className={`${mainClassName}-body-block`}>
                            <Text className={`${mainClassName}-label`}>{f({ id: 'App.Character.Mass' })}</Text>
                            <Text className={`${mainClassName}-value`} editable={editableParams('mass')}>
                                {pageState.character.mass}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default PageLayout(CharacterPage);
