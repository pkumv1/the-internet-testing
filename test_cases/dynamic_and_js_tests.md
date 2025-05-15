# Dynamic Content Tests

## TC-DYN-001: Content Changes on Refresh
- **Description**: Verify that dynamic content changes when page is refreshed
- **Preconditions**: User navigates to dynamic content page
- **Test Steps**:
  1. Record initial content (text and images)
  2. Refresh the page
  3. Record new content
  4. Compare initial and new content
- **Expected Results**: Content changes after page refresh

## TC-DYN-002: Static Content Option
- **Description**: Verify that content remains static when static option is used
- **Preconditions**: None
- **Test Steps**:
  1. Navigate to dynamic content page with static parameter (/dynamic_content?with_content=static)
  2. Record initial content
  3. Refresh the page
  4. Record new content
  5. Compare initial and new content
- **Expected Results**: Content remains the same after page refresh

## TC-DYN-003: Content Structure Integrity
- **Description**: Verify that dynamic content maintains proper structure
- **Preconditions**: User navigates to dynamic content page
- **Test Steps**:
  1. Verify page contains 3 rows of content
  2. Verify each row contains an image and text
- **Expected Results**: Page structure remains consistent even as content changes

# JavaScript Alert Tests

## TC-JS-001: Basic JavaScript Alert
- **Description**: Verify that JavaScript alert works correctly
- **Preconditions**: User navigates to JavaScript Alerts page
- **Test Steps**:
  1. Click "Click for JS Alert" button
  2. Accept the alert
- **Expected Results**: 
  - Alert appears with text "I am a JS Alert"
  - Result text shows "You successfully clicked an alert"

## TC-JS-002: JavaScript Confirm - Accept
- **Description**: Verify JavaScript confirm dialog when accepted
- **Preconditions**: User navigates to JavaScript Alerts page
- **Test Steps**:
  1. Click "Click for JS Confirm" button
  2. Accept the confirm dialog
- **Expected Results**: 
  - Confirm dialog appears with text "I am a JS Confirm"
  - Result text shows "You clicked: Ok"

## TC-JS-003: JavaScript Confirm - Dismiss
- **Description**: Verify JavaScript confirm dialog when dismissed
- **Preconditions**: User navigates to JavaScript Alerts page
- **Test Steps**:
  1. Click "Click for JS Confirm" button
  2. Dismiss the confirm dialog
- **Expected Results**: 
  - Confirm dialog appears with text "I am a JS Confirm"
  - Result text shows "You clicked: Cancel"

## TC-JS-004: JavaScript Prompt - Enter Text
- **Description**: Verify JavaScript prompt with text input
- **Preconditions**: User navigates to JavaScript Alerts page
- **Test Steps**:
  1. Click "Click for JS Prompt" button
  2. Enter text "Test Input" in the prompt
  3. Accept the prompt
- **Expected Results**: 
  - Prompt appears with text "I am a JS prompt"
  - Result text shows "You entered: Test Input"

## TC-JS-005: JavaScript Prompt - Cancel
- **Description**: Verify JavaScript prompt when canceled
- **Preconditions**: User navigates to JavaScript Alerts page
- **Test Steps**:
  1. Click "Click for JS Prompt" button
  2. Dismiss the prompt without entering text
- **Expected Results**: 
  - Prompt appears with text "I am a JS prompt"
  - Result text shows "You entered: null"