import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
    title: 'shared/CommentList',
    component: CommentList,
    argTypes: {
    },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {

    },
};
