import test from '@playwright/test'
test('Learn Alert', async({page})=>{
page.goto('https://www.leafground.com/alert.xhtml ')
page.on('dialog',async(alert)=>{
const alertType = alert.type()
console.log(alertType)
if(alertType === 'prompt'){
 await alert.accept("Playwright")
}else{
    await alert.dismiss()
}
})
await page.locator('(//span[text()="Show"])[5]').click()
console.log("Alert Handled")
})
//this is failed in the previous execution















