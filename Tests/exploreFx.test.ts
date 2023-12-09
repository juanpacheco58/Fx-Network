
import {Key, until} from 'selenium-webdriver';
import { Driver } from 'selenium-webdriver/chrome';
import { fx } from "../Pages/fxNewPage";

const fxn = new fx()

describe("Fx network test plan", () => {

  beforeEach(async () => {
    await fxn.navigate()
  });
  afterAll(async () => {
    await fxn.driver.quit()
  });

  /*test("Right click on homepage", async() =>{
    await fxn.driver.manage().window().maximize();
    await fxn.driver.sleep(3000);
    await fxn.scrollToElement(fxn.rightArrow);
    await fxn.click(fxn.rightArrow);
    await fxn.driver.sleep(1000);
    await fxn.click(fxn.rightArrow1);
    await fxn.driver.sleep(1000);
    await fxn.click(fxn.rightArrow11);
    await fxn.driver.sleep(1000);
    await fxn.click(fxn.rightArrow2);
    await fxn.driver.sleep(1000);
    await fxn.click(fxn.rightArrow3);
    await fxn.driver.sleep(1000);
  });
  test('Clicking on shows function and interacting with shows', async() =>{
    await fxn.driver.manage().window().maximize();
    await fxn.click(fxn.showsBtn);
    await fxn.driver.sleep(3000);
    await fxn.scrollToElement(fxn.originalsTxt);
    await fxn.driver.sleep(4000);
    await fxn.scrollToElement(fxn.onlyHuluTxt);
    await fxn.driver.sleep(4000);
    await fxn.scrollToElement(fxn.archerExplore);
    await fxn.click(fxn.archerExplore);
    await fxn.driver.sleep(4000);
    await fxn.scrollToElement(fxn.lockScreen);
    await fxn.driver.sleep(4000);
    await fxn.click(fxn.lockScreen);
    await fxn.driver.sleep(4000);
    const hoverable = fxn.driver.findElement(fxn.coolLockScreen);
    const actions = fxn.driver.actions({async: true});
    await actions.move({origin: hoverable}).perform();
    await fxn.driver.sleep(4000);

  });
  test("mini player", async () => {
    await fxn.driver.manage().window().maximize();
    await fxn.driver.sleep(3000);
  
    await fxn.scrollToElement(fxn.oT2);
    await fxn.driver.sleep(3000);
    await fxn.click(fxn.playButton);
    await fxn.driver.sleep(7000);
  
    const hoverable = fxn.driver.findElement(fxn.muteButton);
    const actions = fxn.driver.actions({ async: true });
    await actions.move({ origin: hoverable }).perform();
    await fxn.click(fxn.muteButton);
    await fxn.driver.sleep(2000);
  
    await fxn.click(fxn.fowardButton);
    await fxn.driver.sleep(2000);
    await fxn.click(fxn.fowardButton);
    await fxn.driver.sleep(1500);
  
    await fxn.click(fxn.closedCaption);
    await fxn.driver.sleep(1500);
  
    await fxn.click(fxn.fullScreenButton);
    await fxn.driver.sleep(6500);
    await fxn.driver.close();
    await fxn.driver.sleep(3500);
  
  });*/
  test("Clicking on a show", async()=> {
    await fxn.driver.manage().window().maximize();
    await fxn.driver.sleep(1500);
    await fxn.click(fxn.watchTab);
    await fxn.driver.sleep(1500);
    //await fxn.scrollToElement(fxn.fxHulu);
    await fxn.click(fxn.showAtlanta);
    await fxn.driver.sleep(4000);
  });
  

});