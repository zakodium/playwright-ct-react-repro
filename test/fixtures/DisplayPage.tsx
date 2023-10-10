import {ComponentFixtures, expect} from "@playwright/experimental-ct-react";
import {Locator, Page} from '@playwright/test'
import {ReactNode} from "react";

type MountType = ComponentFixtures['mount'];

interface MountResult extends Locator {
  unmount: () => Promise<void>;
  update: (component: ReactNode) => Promise<void>
}

export class DisplayPage {

  private component?: MountResult;

  public constructor(private mountParent: MountType) {}

  public async mount(element: Element) {
    this.component = await this.mountParent(element);
  }

  public async hasText(text: string) {
    if (!this.component) throw new Error("Call this.mount before");
    await expect(this.component).toHaveText(text);
  }

}