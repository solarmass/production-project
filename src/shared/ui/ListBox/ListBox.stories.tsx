import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {
        value: '123',
        items: [
            {
                content: 'ajsdfasdf', value: '123',
            },
            {
                content: 'bvbvasdfgfdsa', value: '1232',
            },
        ],
    },
};

export const topLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            {
                content: 'ajsdfasdf', value: '123',
            },
            {
                content: 'bvbvasdfgfdsa', value: '1232',
            },
        ],
    },
};

export const topRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            {
                content: 'ajsdfasdf', value: '123',
            },
            {
                content: 'bvbvasdfgfdsa', value: '1232',
            },
        ],
    },
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            {
                content: 'ajsdfasdf', value: '123',
            },
            {
                content: 'bvbvasdfgfdsa', value: '1232',
            },
        ],
    },
};

export const bottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            {
                content: 'ajsdfasdf', value: '123',
            },
            {
                content: 'bvbvasdfgfdsa', value: '1232',
            },
        ],
    },
};
