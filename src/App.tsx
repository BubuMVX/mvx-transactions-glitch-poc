import { NotificationModal, SignTransactionsModals, TransactionsToastList } from '@multiversx/sdk-dapp/UI';
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { Home } from './pages/Home/Home.tsx';
import { PageNotFound } from './pages/PageNotFound/PageNotFound.tsx';
import { RouteNamesEnum } from './routes/routeNames.enum.tsx';
import { routes } from './routes/routes.tsx';

function App() {
    return (
        <AuthenticatedRoutesWrapper
            routes={routes}
            unlockRoute={RouteNamesEnum.login}
        >
            <Layout>
                <Routes>
                    <Route path={RouteNamesEnum.home} element={<Home />} />
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            key={`route-key-'${route.path}`}
                            element={<route.component />}
                        />
                    ))}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <TransactionsToastList />
                <NotificationModal />
                <SignTransactionsModals />
            </Layout>
        </AuthenticatedRoutesWrapper>
    );
}

export default App;
