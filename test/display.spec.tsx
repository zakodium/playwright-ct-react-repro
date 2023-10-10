import { test, expect } from './fixtures/fixtures';

test('should work', async ({ displayPage }) => {
  await displayPage.hasText("Hello")
});