const puppeteer = require("puppeteer");
const fs = require("fs");
const { get } = require("http");
const url = 'https://www.msmemart.com/msme/listings/company-list/advertising-materials/90/1297/Supplier';



(async function scrape() {


    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto(
      "https://www.msmemart.com/msme/listings/company-list/advertising-materials/90/1297/Supplier"
    );


    var grabAllNames = await page.evaluate(() => {
        
        var headName = document.querySelectorAll(".upl_left");
        var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));
    
        var obb = Object.assign({}, nameData);
        
        return obb;
      });

   //  console.log(grabAllNames)
     fs.writeFileSync(`MSME1.json`, JSON.stringify(grabAllNames));
   //  fs.writeFileSync(`MSME1.csv`, JSON.stringify(grabAllNames));

 
     
  async function getText2(i){
  await   page.click(`[data-ci-pagination-page="${i+1}"]`,{delay : 1000});
       //   console.log(i);
  }
  async function getText(i){
    await   page.click(`[data-ci-pagination-page="${i+1}"]`,{delay : 5000});
         //   console.log(i);
    }

  await getText2(1);

  await getText(2);

  var grabAllNames2 = await page.evaluate(() => {
        
    var headName = document.querySelectorAll(".upl_left");
    var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));

    var obb = Object.assign({}, nameData);
    
    return obb;
  });


//  console.log(grabAllNames2)
  fs.writeFileSync(`MSME2.json`, JSON.stringify(grabAllNames2));
//  fs.writeFileSync(`MSME2.csv`, JSON.stringify(grabAllNames2));




  await getText2(2);

  await getText(3);

  var grabAllNames3 = await page.evaluate(() => {
        
    var headName = document.querySelectorAll(".upl_left");
    var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));

    var obb = Object.assign({}, nameData);
    
    return obb;
  });


 // console.log(grabAllNames3)
  fs.writeFileSync(`MSME3.json`, JSON.stringify(grabAllNames3));
//  fs.writeFileSync(`MSME3.csv`, JSON.stringify(grabAllNames3));






  await getText2(3);

  await getText(4);

  var grabAllNames4 = await page.evaluate(() => {
        
    var headName = document.querySelectorAll(".upl_left");
    var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));

    var obb = Object.assign({}, nameData);
    
    return obb;
  });


 // console.log(grabAllNames4)
  fs.writeFileSync(`MSME4.json`, JSON.stringify(grabAllNames4));
//  fs.writeFileSync(`MSME4.csv`, JSON.stringify(grabAllNames4));





  await getText2(4);

  await getText(5);

  var grabAllNames5 = await page.evaluate(() => {
        
    var headName = document.querySelectorAll(".upl_left");
    var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));

    var obb = Object.assign({}, nameData);
    
    return obb;
  });


//  console.log(grabAllNames5)
  fs.writeFileSync(`MSME5.json`, JSON.stringify(grabAllNames5));
//  fs.writeFileSync(`MSME5.csv`, JSON.stringify(grabAllNames5));






  await getText2(6);

  await getText(7);

  var grabAllNames6 = await page.evaluate(() => {
        
    var headName = document.querySelectorAll(".upl_left");
    var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));

    var obb = Object.assign({}, nameData);
    
    return obb;
  });


//  console.log(grabAllNames6)
  fs.writeFileSync(`MSME6.json`, JSON.stringify(grabAllNames6));
//  fs.writeFileSync(`MSME6.csv`, JSON.stringify(grabAllNames6));





  await getText2(7);

  await getText(7);

  var grabAllNames7 = await page.evaluate(() => {
        
    var headName = document.querySelectorAll(".upl_left");
    var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));

    var obb = Object.assign({}, nameData);
    
    return obb;
  });


//  console.log(grabAllNames7)
  fs.writeFileSync(`MSME7.json`, JSON.stringify(grabAllNames7));
//  fs.writeFileSync(`MSME7.csv`, JSON.stringify(grabAllNames7));

await browser.close();

})();













//const headName = document.querySelectorAll(".upl_list li div div h4 a")
        //const content = document.querySelectorAll(".upl_list li div div p")
