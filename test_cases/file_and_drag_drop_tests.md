# File Upload and Download Tests

## TC-FILE-001: Basic File Upload
- **Description**: Verify that a file can be successfully uploaded
- **Preconditions**: User navigates to the file upload page
- **Test Steps**:
  1. Click "Choose File" button
  2. Select a valid file (e.g., a small text file)
  3. Click Upload button
- **Expected Results**: 
  - Success page is displayed
  - Uploaded filename is displayed correctly

## TC-FILE-002: Upload Without Selecting File
- **Description**: Verify system behavior when uploading without selecting a file
- **Preconditions**: User navigates to the file upload page
- **Test Steps**:
  1. Click Upload button without selecting a file
- **Expected Results**: Error message is displayed

## TC-FILE-003: Upload Large File
- **Description**: Verify system behavior when uploading a large file
- **Preconditions**: User navigates to the file upload page
- **Test Steps**:
  1. Click "Choose File" button
  2. Select a large file (e.g., 10MB image)
  3. Click Upload button
- **Expected Results**: 
  - File is uploaded successfully
  - Success page is displayed

## TC-FILE-004: Basic File Download
- **Description**: Verify that a file can be successfully downloaded
- **Preconditions**: User navigates to the file download page
- **Test Steps**:
  1. Click on a file link to download
- **Expected Results**: File download starts

## TC-FILE-005: Secure File Download Authentication
- **Description**: Verify that secure file download requires authentication
- **Preconditions**: User is not authenticated
- **Test Steps**:
  1. Navigate to secure file download page
- **Expected Results**: 
  - Basic authentication dialog is displayed
  - Access is denied without valid credentials

# Drag and Drop Tests

## TC-DRAG-001: Basic Drag and Drop
- **Description**: Verify that drag and drop functionality works
- **Preconditions**: User navigates to the drag and drop page
- **Test Steps**:
  1. Identify the initial positions of elements A and B
  2. Drag element A and drop it onto element B
- **Expected Results**: 
  - Elements A and B swap positions
  - The application UI reflects the change correctly

## TC-DRAG-002: Multiple Drag and Drop Operations
- **Description**: Verify multiple drag and drop operations
- **Preconditions**: User navigates to the drag and drop page
- **Test Steps**:
  1. Drag element A and drop it onto element B
  2. Drag element A back to its original position
- **Expected Results**: 
  - Elements swap positions after first operation
  - Elements return to original positions after second operation