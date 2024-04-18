import { Mods, classNames } from 'shared/lib/classNames/classNames';

import {
    ChangeEvent,
    useCallback,
    useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string ;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const mods: Mods = {};
    const optionsList = useMemo(() => options?.map(({ value, content }) => (
        <option value={value} key={value} className={cls.option}>{content}</option>
    )), [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label} >`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
