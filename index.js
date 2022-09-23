console.log("hello world")
const {Builder, Browser, By, Key, until, WebDriver} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const { elementLocated, elementIsEnabled } = require('selenium-webdriver/lib/until');

async function example() {
    const options = new firefox.Options().headless();
    const service = new firefox.ServiceBuilder('/home/maxwillx/repo/subrobot-v2/geckodriver');
    const driver = new Builder().setFirefoxOptions(options).forBrowser('firefox').setFirefoxService(service).build();
    
    try {
        await subhd_process("权力的游戏", driver);
    } catch (e){
        console.log("test error", e)
    } finally {
        driver.quit();
    }
}

example()

async function subhd_process(queryString, driver) {
    // const searchStr = "https://subhd.tv/search/" + queryString;
    // await driver.get(searchStr);
    // const pageNumberXpath = "//*[contains(text(),'当前第')]";
    // driver.wait(until.elementLocated(By.xpath(pageNumberXpath)), 10000)
    // const pageElement = driver.findElement(By.xpath(pageNumberXpath));
    // console.log(await pageElement.getText());
    
    // // get home page of the show
    // const row = driver.findElement(By.className("shadow-sm"));
    // const element = row.findElement(By.xpath("//*[contains(@href,'/d/')]"));
    // console.log(await element.getAttribute("href"));
    
    await driver.get("file:///home/maxwillx/repo/subrobot-v2/example/34825964.html");
    const episodes = await driver.findElements(By.xpath("//*[contains(@class, 'px-3 py-1 f12 bg-light bg-gradient text-danger fw-bold')]"));
    for (const episode of episodes) {
        console.log(await episode.getText());
    }
}

function zimuku_process() {

}

/**
* Delay for a number of milliseconds
*/
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
