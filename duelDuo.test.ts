const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  await driver.get("https://assessment-6-pf3.herokuapp.com/");
});

afterAll(async () => {
  await driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  await driver.sleep(2000);
  const displayed = await title.isDisplayed();
  await driver.sleep(2000);
  expect(displayed).toBe(true);
});

test("Clicking the Draw button loads the cards to be drawn", async () => {
  const button = await driver.findElement(By.id("draw"));

  await driver.sleep(2000);
  await button.click();
  await driver.sleep(2000);
  const cards = await driver.findElement(By.id("choices"));
  const displayed = await cards.isDisplayed();
  await driver.sleep(2000);
  expect(displayed).toBeTruthy();
});

test("Clicking the Add to Duo button Adds the card to the player duo container", async () => {
  const button = await driver.findElement(By.id("draw"));

  await driver.sleep(2000);
  await button.click();
  await driver.sleep(2000);
  const addButton = await driver.findElement(By.xpath("//div/div/button"));
  await addButton.click();
  await driver.sleep(2000);
  const cards = await driver.findElement(By.id("player-duo"));
  const displayed = await cards.isDisplayed();
  expect(displayed).toBeTruthy();
});
