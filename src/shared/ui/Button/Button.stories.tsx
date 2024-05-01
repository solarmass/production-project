import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'TEXT',
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'TEXT',
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'TEXT',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'TEXT',
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'TEXT',
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'TEXT',
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'TEXT',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'TEXT',
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'TEXT',
    },
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: '>',
        disabled: true,
    },
};
