import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';

// Компонент для тестирования ErrorBoudary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError((prev) => !prev);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        // eslint-disable-next-line i18next/no-literal-string
        >
            throw error
        </Button>
    );
};
