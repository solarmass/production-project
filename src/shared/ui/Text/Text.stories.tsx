import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Description Description Description Description Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Description Description Description Description Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description Description',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description Description',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description Description',
        size: TextSize.S,
    },
};
