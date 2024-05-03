import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page data-testid="MainPage">
            <div>
                {t('Главная страница')}
            </div>
        </Page>
    );
};

export default MainPage;
