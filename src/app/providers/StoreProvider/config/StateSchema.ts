import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    EnhancedStore, ReducersMapObject, AnyAction, Reducer, CombinedState,
} from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редюсеры
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce:(state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key:StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: ReducerManager;
}
