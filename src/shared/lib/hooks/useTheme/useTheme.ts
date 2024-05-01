import { useContext } from 'react';
import {
    ThemeContext,
} from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme: () => UseThemeResult = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme: () => {
            let newTheme:Theme;

            switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
            }
            setTheme?.(newTheme);
            document.body.className = newTheme;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        },
    };
};
