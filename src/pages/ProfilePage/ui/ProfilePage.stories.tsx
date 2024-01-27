import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {

    },
    args: {

    },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
