import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Row: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};
export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};
export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};
export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>),
    },
};
