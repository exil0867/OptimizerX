require('dotenv').config();
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const macFilter = async (boolean) => {
  let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
  try {
    await driver.get(`http://${process.env.ROUTER_USERNAME}:${process.env.ROUTER_PASSWORD}@${process.env.ROUTER_IP}/wlmacflt.cmd?action=view`);
    if (boolean) {
      await driver.findElement(webdriver.By.css('td:nth-child(4) > input')).click();
    } else {
      await driver.findElement(webdriver.By.css('tr:nth-child(1) > td:nth-child(2) > input')).click();
    }
  } catch (e) {
    console.error(e);
  } finally {
    await driver.quit();
  }
}

module.exports = macFilter;
