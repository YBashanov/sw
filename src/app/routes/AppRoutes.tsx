import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { CharactersPage, CharacterPage } from '@/app/pages';

const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/character/:id" element={<CharacterPage />} />
                <Route path="*" element={<Navigate to="/characters" replace />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
