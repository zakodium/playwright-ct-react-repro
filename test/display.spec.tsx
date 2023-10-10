import { test, expect } from '@playwright/experimental-ct-react';
import { Display } from './../src/Display';

test('should work', async ({ mount }) => {
  const component = await mount(<Display text="Hello" />);
  await expect(component).toContainText('Hello');
});