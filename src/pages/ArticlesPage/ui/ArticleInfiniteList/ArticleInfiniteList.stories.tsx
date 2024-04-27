import type { Meta, StoryObj } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta = {
    title: 'shared/ArticleInfiniteList',
    component: ArticleInfiniteList,
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {

    },
};
