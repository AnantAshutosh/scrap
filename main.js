const puppeteer = require("puppeteer");
const fs = require("fs");
const url = 'https://www.msmemart.com/msme/listings/company-list/advertising-materials/90/1297/Supplier';


(async function scrape() {
  const browser = await puppeteer.launch({ headless: false});
  // scraping logic comes here…

  const page = await browser.newPage();
  await page.goto(
    "https://www.msmemart.com/msme/listings/company-list/advertising-materials/90/1297/Supplier"
  );


  var grabAllNames = await page.evaluate(() => {
    //const headName = document.querySelectorAll(".upl_list li div div h4 a")
    //const content = document.querySelectorAll(".upl_list li div div p")
    var headName = document.querySelectorAll(".upl_left");

    var nameData = Array.from(headName).map((x) => x.innerText.split("\n"));

    nameData.forEach((element) => {
      element = element.filter((e) => {
        return e != null;
      });
    });

    var obb = Object.assign({}, nameData);
    nameData=[]
    return obb;
  });
  var ob;
  var runFun=(i)=>{
    return new Promise((resolve,reject)=>{
        ob=grabAllNames;
       // console.log(ob);
        fs.writeFileSync(`page${i}.json`, JSON.stringify(ob));
        fs.writeFileSync(`page${i}.csv`, JSON.stringify(ob)); 
        resolve('resolved')
    })
  }


    async function runbad(){ 
        for(i=1;i<8;i++){
         // console.log(i)
            await runFun(i);
           // console.log(grabAllNames);
           await Promise.all([
           await  page.click(`[data-ci-pagination-page="${i+1}"]`,{delay : 3000}),
           await page.goto(url, { waitUntil: "domcontentloaded" })
          ]);
 

        }

        
            
    }

    runbad()
    
    

    
  
  // await page.click('[data-ci-pagination-page="2"]',{delay : 0});

  //await browser.close();
})();
