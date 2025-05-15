const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('JavaScript Alert Tests', function() {
  this.timeout(30000); // Set timeout to 30 seconds
  
  let browser;
  let page;

  beforeEach(async function() {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });
    page = await browser.newPage();
    
    // Navigate to JavaScript Alerts page
    await page.goto('http://the-internet.herokuapp.com/javascript_alerts');
  });

  afterEach(async function() {
    await browser.close();
  });

  it('TC-JS-001: Basic JavaScript Alert', async function() {
    // Setup dialog handler
    page.on('dialog', async dialog => {
      expect(dialog.type()).to.equal('alert');
      expect(dialog.message()).to.equal('I am a JS Alert');
      await dialog.accept();
    });

    // Click the button to trigger alert
    await page.click('button:nth-of-type(1)');
    
    // Verify result text
    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).to.equal('You successfully clicked an alert');
  });

  it('TC-JS-002: JavaScript Confirm - Accept', async function() {
    // Setup dialog handler
    page.on('dialog', async dialog => {
      expect(dialog.type()).to.equal('confirm');
      expect(dialog.message()).to.equal('I am a JS Confirm');
      await dialog.accept();
    });

    // Click the button to trigger confirm dialog
    await page.click('button:nth-of-type(2)');
    
    // Verify result text
    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).to.equal('You clicked: Ok');
  });

  it('TC-JS-003: JavaScript Confirm - Dismiss', async function() {
    // Setup dialog handler
    page.on('dialog', async dialog => {
      expect(dialog.type()).to.equal('confirm');
      expect(dialog.message()).to.equal('I am a JS Confirm');
      await dialog.dismiss();
    });

    // Click the button to trigger confirm dialog
    await page.click('button:nth-of-type(2)');
    
    // Verify result text
    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).to.equal('You clicked: Cancel');
  });

  it('TC-JS-004: JavaScript Prompt - Enter Text', async function() {
    // Setup dialog handler
    page.on('dialog', async dialog => {
      expect(dialog.type()).to.equal('prompt');
      expect(dialog.message()).to.equal('I am a JS prompt');
      await dialog.accept('Test Input');
    });

    // Click the button to trigger prompt
    await page.click('button:nth-of-type(3)');
    
    // Verify result text
    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).to.equal('You entered: Test Input');
  });

  it('TC-JS-005: JavaScript Prompt - Cancel', async function() {
    // Setup dialog handler
    page.on('dialog', async dialog => {
      expect(dialog.type()).to.equal('prompt');
      expect(dialog.message()).to.equal('I am a JS prompt');
      await dialog.dismiss();
    });

    // Click the button to trigger prompt
    await page.click('button:nth-of-type(3)');
    
    // Verify result text
    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).to.equal('You entered: null');
  });
});
