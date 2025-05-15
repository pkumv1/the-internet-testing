# Test Cases for Form Authentication

## TC-AUTH-001: Valid Login
- **Description**: Verify that a user can successfully log in with valid credentials
- **Preconditions**: User navigates to the login page
- **Test Steps**:
  1. Enter username: "tomsmith"
  2. Enter password: "SuperSecretPassword!"
  3. Click the Login button
- **Expected Results**: 
  - User is redirected to the secure area
  - Success message "You logged into a secure area!" is displayed
  - Logout button is available

## TC-AUTH-002: Invalid Username
- **Description**: Verify system behavior with invalid username
- **Preconditions**: User navigates to the login page
- **Test Steps**:
  1. Enter invalid username: "wronguser"
  2. Enter valid password: "SuperSecretPassword!"
  3. Click the Login button
- **Expected Results**:
  - User remains on login page
  - Error message "Your username is invalid!" is displayed

## TC-AUTH-003: Invalid Password
- **Description**: Verify system behavior with invalid password
- **Preconditions**: User navigates to the login page
- **Test Steps**:
  1. Enter valid username: "tomsmith"
  2. Enter invalid password: "wrongpassword"
  3. Click the Login button
- **Expected Results**:
  - User remains on login page
  - Error message "Your password is invalid!" is displayed

## TC-AUTH-004: Logout Functionality
- **Description**: Verify that a logged-in user can successfully log out
- **Preconditions**: User is logged in and on the secure area page
- **Test Steps**:
  1. Click the Logout button
- **Expected Results**:
  - User is redirected to the login page
  - Success message "You logged out of the secure area!" is displayed

## TC-AUTH-005: Secure Area Access Without Login
- **Description**: Verify that unauthenticated users cannot access the secure area
- **Preconditions**: User is not logged in
- **Test Steps**:
  1. Attempt to navigate directly to the secure area URL (/secure)
- **Expected Results**:
  - User is redirected to the login page
  - Error message "You must login to view the secure area!" is displayed
