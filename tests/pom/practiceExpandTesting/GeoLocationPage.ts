import { Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class GeoLocationPage extends BasePage {
  private whereButton: Locator;
  private latValue: Locator;
  private longValue: Locator;

  public static readonly latitude = 48.8566;
  public static readonly longitude = 2.3522;
  public static readonly accuracy = 100;

  constructor(page) {
    super(page);
    this.url = "https://practice.expandtesting.com/geolocation";
    this.whereButton = this.page.getByRole("button", { name: "Where am I?" });
    this.latValue = this.page.locator("#lat-value");
    this.longValue = this.page.locator("#long-value");
  }

  async getLatvalue(): Promise<string | null> {
    return await this.latValue.textContent();
  }

  async getLongvalue(): Promise<string | null> {
    return await this.longValue.textContent();
  }

  async clickWhereButton(): Promise<void> {
    return await this.whereButton.click();
  }

  async emulateGeolocation(): Promise<void> {
    await this.page.context().grantPermissions(["geolocation"]);
    await this.page.context().setGeolocation({
      latitude: GeoLocationPage.latitude,
      longitude: GeoLocationPage.longitude,
      accuracy: GeoLocationPage.accuracy,
    });
  }
}
