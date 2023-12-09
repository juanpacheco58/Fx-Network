import {BasePage} from './basePage'
import {By, WebElement, WebElementCondition} from 'selenium-webdriver'


export class fx extends BasePage {
  [x: string]: any;
    clear(searchBar: By) {
        throw new Error("Method not implemented.");
    }
    rightArrow: By = By.xpath('(//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium fx-1cafpa8"])[14]')
    rightArrow1: By = By.xpath('(//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium fx-1cafpa8"])[18]')
    rightArrow2: By = By.xpath('(//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium fx-1cafpa8"])[22]')
    rightArrow3: By = By.xpath('(//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium fx-1cafpa8"])[22]')
    rightArrow11: By = By.xpath('(//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium fx-1cafpa8"])[20]')
   
    //Interacting with shows
   
   
   showsBtn: By = By.xpath('(//a[@class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone styled-link fx-1yeqr7"])[1]')
   originalsTxt: By = By.xpath('//h2[@class="MuiTypography-root MuiTypography-h3 MuiTypography-alignLeft   fx-gqoe9b"]')
   onlyHuluTxt: By = By.xpath('//h2[@class="MuiTypography-root MuiTypography-h3 MuiTypography-alignLeft   fx-3x8zab"]')
   archerExplore: By = By.xpath('(//div[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium fx-1g51mqp"])[6]')
   lockScreen: By = By.xpath('//span[text()="EXPLORE LOCK SCREENS"]')
   coolLockScreen: By = By.xpath('(//li[@class="PhoneLockscreenImageContainer fx-1dva4fa"])[8]')

   //Watching a trailer
   oT2: By = By.xpath('(//p[@class="MuiTypography-root MuiTypography-eyebrow MuiTypography-alignLeft  fx-1ezn41"])[1]')
   playButton: By = By.xpath('(//div[@class="fx-10wz8vo"])[1]')
   muteButton: By = By.xpath('//button[@class="amp-mute amp-component amp-icon amp-control "]')
   fowardButton: By = By.xpath('//button[@class="amp-jump-forward amp-component amp-icon amp-control"]')
   closedCaption: By = By.xpath('//button[@class="amp-component amp-icon amp-control amp-cc"]')
   fullScreenButton: By = By.xpath('//button[@class="amp-fullscreen amp-component amp-icon amp-control"]')
   div: By = By.xpath('//div[@class="amp-interactive"]')
    
   // SHows Watch and clcik on a show
    watchTab: By = By.xpath('(//a[@class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone styled-link fx-1yeqr7"])[2]')
    fxHulu: By = By.xpath('//div[@class="fx-16pp6iq"]')
    showAtlanta: By = By.xpath('(//p[@class="MuiTypography-root MuiTypography-body1 fx-dn3zi4"])[7]')

   
   
   
   constructor() {
        super({url: 'https://www.fxnetworks.com/' })
    }
    /*async getResults() {
        return this.getText(this.)
    }*/
  
    }