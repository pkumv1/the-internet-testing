const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Drag and Drop Tests', function() {
  this.timeout(30000); // Set timeout to 30 seconds
  
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('http://the-internet.herokuapp.com/drag_and_drop');
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('TC-DRAG-001: Basic Drag and Drop', async function() {
    // Get initial text values of columns
    const columnAInitial = await driver.findElement(By.id('column-a')).getText();
    const columnBInitial = await driver.findElement(By.id('column-b')).getText();
    
    // Since Selenium's drag and drop API is often unreliable, we'll use JavaScript
    // to simulate the drag and drop action
    const dragAndDrop = `
      function simulateDragDrop(sourceNode, destinationNode) {
        var EVENT_TYPES = {
          DRAG_END: 'dragend',
          DRAG_START: 'dragstart',
          DROP: 'drop'
        }

        function createCustomEvent(type) {
          var event = new CustomEvent("CustomEvent")
          event.initCustomEvent(type, true, true, null)
          event.dataTransfer = {
            data: {
            },
            setData: function(type, val) {
              this.data[type] = val
            },
            getData: function(type) {
              return this.data[type]
            }
          }
          return event
        }

        function dispatchEvent(node, type, event) {
          if (node.dispatchEvent) {
            return node.dispatchEvent(event)
          }
          if (node.fireEvent) {
            return node.fireEvent("on" + type, event)
          }
        }

        var event = createCustomEvent(EVENT_TYPES.DRAG_START)
        dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event)

        var dropEvent = createCustomEvent(EVENT_TYPES.DROP)
        dropEvent.dataTransfer = event.dataTransfer
        dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent)

        var dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END)
        dragEndEvent.dataTransfer = event.dataTransfer
        dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent)
      }

      var columnA = document.getElementById('column-a');
      var columnB = document.getElementById('column-b');
      simulateDragDrop(columnA, columnB);
    `;
    
    await driver.executeScript(dragAndDrop);
    
    // Wait for the drag and drop effect to complete
    await driver.sleep(1000);
    
    // Get the text values after drag and drop
    const columnAAfter = await driver.findElement(By.id('column-a')).getText();
    const columnBAfter = await driver.findElement(By.id('column-b')).getText();
    
    // Verify that the columns have swapped
    assert.strictEqual(columnAAfter, columnBInitial);
    assert.strictEqual(columnBAfter, columnAInitial);
  });

  it('TC-DRAG-002: Multiple Drag and Drop Operations', async function() {
    // Get initial text values
    const columnAInitial = await driver.findElement(By.id('column-a')).getText();
    const columnBInitial = await driver.findElement(By.id('column-b')).getText();
    
    // Execute first drag and drop operation
    const dragAndDrop = `
      function simulateDragDrop(sourceNode, destinationNode) {
        var EVENT_TYPES = {
          DRAG_END: 'dragend',
          DRAG_START: 'dragstart',
          DROP: 'drop'
        }

        function createCustomEvent(type) {
          var event = new CustomEvent("CustomEvent")
          event.initCustomEvent(type, true, true, null)
          event.dataTransfer = {
            data: {
            },
            setData: function(type, val) {
              this.data[type] = val
            },
            getData: function(type) {
              return this.data[type]
            }
          }
          return event
        }

        function dispatchEvent(node, type, event) {
          if (node.dispatchEvent) {
            return node.dispatchEvent(event)
          }
          if (node.fireEvent) {
            return node.fireEvent("on" + type, event)
          }
        }

        var event = createCustomEvent(EVENT_TYPES.DRAG_START)
        dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event)

        var dropEvent = createCustomEvent(EVENT_TYPES.DROP)
        dropEvent.dataTransfer = event.dataTransfer
        dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent)

        var dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END)
        dragEndEvent.dataTransfer = event.dataTransfer
        dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent)
      }

      var columnA = document.getElementById('column-a');
      var columnB = document.getElementById('column-b');
      simulateDragDrop(columnA, columnB);
    `;
    
    await driver.executeScript(dragAndDrop);
    
    // Wait for the first drag and drop to complete
    await driver.sleep(1000);
    
    // Get text values after first drag and drop
    const columnAMiddle = await driver.findElement(By.id('column-a')).getText();
    const columnBMiddle = await driver.findElement(By.id('column-b')).getText();
    
    // Verify first drag and drop
    assert.strictEqual(columnAMiddle, columnBInitial);
    assert.strictEqual(columnBMiddle, columnAInitial);
    
    // Execute second drag and drop operation
    await driver.executeScript(dragAndDrop);
    
    // Wait for the second drag and drop to complete
    await driver.sleep(1000);
    
    // Get text values after second drag and drop
    const columnAFinal = await driver.findElement(By.id('column-a')).getText();
    const columnBFinal = await driver.findElement(By.id('column-b')).getText();
    
    // Verify second drag and drop (columns should be back to initial state)
    assert.strictEqual(columnAFinal, columnAInitial);
    assert.strictEqual(columnBFinal, columnBInitial);
  });
});
