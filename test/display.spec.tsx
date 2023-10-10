import { test, expect } from './fixtures/fixtures';
import { Display } from './../src/Display';

test.beforeEach(async ({ displayPage }) => {
  await displayPage.mount(<Display text="Hello" />);
})

test('should work', async ({ displayPage }) => {
  await displayPage.hasText("Hello")
});