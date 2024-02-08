import React, { Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (!isAuth && route.authOnly) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Routes>
            {
                routes.map((
                    { element, path, ...otherProps },
                ) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        )}
                        {...otherProps}
                    />
                ))
            }
        </Routes>
    );
};

export default memo(AppRouter);
