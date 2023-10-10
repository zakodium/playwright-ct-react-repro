import { test as base } from '@playwright/experimental-ct-react';
import { DisplayPage } from "./DisplayPage";

interface Fixtures {
  displayPage: DisplayPage;
}

export const test = base.extend<Fixtures>({
  displayPage: async ({ mount }, use) => {
    const page = new DisplayPage(mount);
    await use(page);
  }
})

export { expect } from '@playwright/test'