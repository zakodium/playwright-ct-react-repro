import { test as base } from '@playwright/experimental-ct-react';
import { DisplayPage } from "./DisplayPage";
import {Display} from "../../src/Display";

interface Fixtures {
  displayPage: DisplayPage;
}

export const test = base.extend<Fixtures>({
  displayPage: async ({ mount }, use) => {
    const page = new DisplayPage(await mount(<Display text="Hello" />));
    await use(page);
  }
})

export { expect } from '@playwright/test'