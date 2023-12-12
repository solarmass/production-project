import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
            {
                Object.values(routeConfig).map((
                    { element, path, ...otherProps },
                ) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                        {...otherProps}
                    />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
