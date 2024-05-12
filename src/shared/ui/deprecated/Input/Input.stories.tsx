import type { Meta, StoryObj } from '@storybook/react';
// import { Theme } from 'app/providers/ThemeProvider';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    argTypes: {
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};
