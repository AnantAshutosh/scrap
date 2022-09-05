const puppeteer = require("puppeteer");
const fs = require("fs");
const { get } = require("http");

(async function scrape() {

    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto(
      "https://www.msmemart.com/msme/listings/company-list/advertising-materials/90/1297/Supplier"
    );

   
  async function getText2(i){
  await   page.click(`[data-ci-pagination-page="${i+1}"]`,{delay : 1000});
       
  }
  async function getText(i){
    await   page.click(`[data-ci-pagination-page="${i+1}"]`,{delay : 5000});
    }


  for(let i=0;i<8;i++){

    if(i>0 && i!=7){
      await getText2(i);
      await getText(i+1);
    }
    if(i==7){
      await getText2(7);
      await getText(7);
    }


  var grabAllNames2 = await page.evaluate(() => {
        
    var headName = document.querySelectorAll(".upl_left");
    var nameData = Array.from(headName).map((x) => x.innerText.split("\n").filter(e => String(e).trim()));

    var obb = Object.assign({}, nameData);
    
    return obb;
  });

  fs.writeFileSync(`MSME${i+1}.json`, JSON.stringify(grabAllNames2));

  }

await browser.close();


})();