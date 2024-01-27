import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
