const puppeteer = require('puppeteer');

(async () => {
    try{
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Go to the website
  await page.goto('https://swap.defillama.com/?chain=arbitrum&from=0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f&to=0xaf88d065e77c8cc2239327c5edb3a432268e5831');
  await page.setViewport({ width: 1366, height: 768 });

  // Fill the form

  await page.type('input[id="react-select-2-input"]', 'Arbitrum One'); 
  await page.keyboard.press("Enter"); //Press the Enter key

  

  const inputFieldSelector = 'input[class="chakra-input css-lv0ed5"]'; 
  await page.focus(inputFieldSelector); // Ensure the input field has focus
  await page.keyboard.down('Control'); // Press the Control key
  await page.keyboard.press('KeyA'); // Press the 'A' key
  await page.keyboard.up('Control'); //Release the Control key
  await page.keyboard.press('Backspace'); // Press the Backspace key
  await page.type(inputFieldSelector, '12');

  setInterval(async () => {
    // Wait for the new section to be visible
    await page.waitForSelector("div.sc-bb167634-4 jrbYis");

    // Select the third element matching the CSS selector
    const elements = await page.$$("div.sc-bb167634-4 jrbYis");
    if (elements.length >= 4) {
      await elements[1].click();
    }
  }, 3000);
//------------------------------------------------------------------------------------------------------------------------------------------------------------ //
        
//  const dropdownButtonSelector = '#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button';
//   await page.click(dropdownButtonSelector);

//   const desiredOptionSelector = '///html/body/div[4]/div[3]/div/section/div[3]/div/div[3]/div';
//   await page.click(dropdownButtonSelector);


//   const dropdownButtonSelector1 = '#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button';
//   await page.click(dropdownButtonSelector1);

//   const desiredOptionSelector1 = '/html/body/div[7]/div[3]/div/section/div[3]/div/div[4]/div';
//   await page.click(dropdownButtonSelector1);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//


  // Wait for form submission or any other page navigation
  await page.waitForNavigation();

  await browser.close();
  // Perform further actions or assertions if needed
  }catch (error) {
    console.error('An error occurred:', error);
}
})
();

      
