const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking Draw button displayes choices", async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.id('choices'))
  });
  test('clicking Add to Duo displays player-duo', async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.findElement(By.id('your-duo-header'))
  })
});