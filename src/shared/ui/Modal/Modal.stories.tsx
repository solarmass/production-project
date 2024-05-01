import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Eu ipsum esse non enim eiusmod veniam laborum adipisicing esse magna. Exercitation adipisicing adipisicing quis exercitation officia cupidatat. Ullamco aliqua anim eiusmod velit veniam est nostrud aliqua. Id deserunt elit dolore enim officia eu consequat esse incididunt et ea aute. Esse ad culpa eu qui enim voluptate quis cillum non laboris. Ad id commodo exercitation voluptate minim. Esse velit amet officia labore qui proident eu consectetur ipsum est ex officia sint.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Eu ipsum esse non enim eiusmod veniam laborum adipisicing esse magna. Exercitation adipisicing adipisicing quis exercitation officia cupidatat. Ullamco aliqua anim eiusmod velit veniam est nostrud aliqua. Id deserunt elit dolore enim officia eu consequat esse incididunt et ea aute. Esse ad culpa eu qui enim voluptate quis cillum non laboris. Ad id commodo exercitation voluptate minim. Esse velit amet officia labore qui proident eu consectetur ipsum est ex officia sint.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
