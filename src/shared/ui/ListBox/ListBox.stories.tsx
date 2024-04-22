import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {

    },
};
