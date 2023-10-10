import {ComponentFixtures, expect} from "@playwright/experimental-ct-react";
import {Locator, Page} from '@playwright/test'
import {ReactNode} from "react";

type MountType = ComponentFixtures['mount'];

interface MountResult extends Locator {
  unmount: () => Promise<void>;
  update: (component: ReactNode) => Promise<void>
}

export class DisplayPage {

  public constructor(private component: MountResult) {}

  public async hasText(text: string) {
    await expect(this.component).toHaveText(text);
  }

}