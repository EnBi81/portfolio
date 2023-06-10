// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { App } from './App';

const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const Primary: Story = {
  render: () => <App />,
};
