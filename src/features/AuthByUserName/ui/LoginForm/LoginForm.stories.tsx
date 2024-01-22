import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd',
        },
    })],
};

export const withError: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd',
            error: 'ERROR',
        },
    })],
};

export const Loading: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd',
            isLoading: true,
        },
    })],
};
