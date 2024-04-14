import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {

    },
};
