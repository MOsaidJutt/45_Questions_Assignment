
# TypeScript Automation Guide

This guide provides instructions on how to automate the creation of folders and the compilation and execution of TypeScript files within those folders.


## Automated Folder and File Creation Using PowerShell

To automatically create folders named from Q14 to Q45, each containing a file named `main.ts`, you can use a simple PowerShell script. This method is well-suited for Windows environments.

### Steps to Run the Script

1. **Open PowerShell**:
   - You can do this by searching for "PowerShell" in the start menu.

2. **Navigate to the Directory**:
   - Use the `cd` command to change your current directory to the one where you want to create the folders. For your case, use:
     ```bash
     cd D:\Governor_Sindh\45_Questions_Assignment
     ```

3. **Run the Script**:
   - You can copy and paste the following PowerShell script into your PowerShell window. This script will create the folders from Q1 to Q45 and place a `main.ts` file in each:
     ```powershell
     $start = 1
     $end = 45

     for ($i = $start; $i -le $end; $i++) {
         $folderName = "Q$i"
         New-Item -Path . -Name $folderName -Type Directory -Force
         New-Item -Path ".\$folderName\main.ts" -Type File -Force
     }
     ```

### Explanation of the Script

- **Loop**: It starts from Q14 and goes up to Q45.
- **Create Folder**: For each number, it creates a folder named `Q` followed by the number.
- **Create File**: It then creates a file named `main.ts` within each folder.

Run this script, and it should create the folders and files

## Setting Up Compilation and Execution Script

4. **Create the PowerShell Script for Compilation and Execution:**
   - This script will handle compiling and executing the TypeScript files automatically.

   ```powershell
   param ([string]$QuestionFolder)
   $path = Join-Path -Path "D:\Governor_Sindh%_Questions_Assignment" -ChildPath $QuestionFolder
   if (Test-Path $path) {
       Write-Host "Entering folder: $QuestionFolder" -ForegroundColor Cyan
       cd $path
       if (Test-Path "main.ts") {
           Write-Host "Compiling TypeScript file..." -ForegroundColor Green
           tsc main.ts
           if (Test-Path "main.js") {
               Write-Host "Running JavaScript file..." -ForegroundColor Green
               node main.js
           } else {
               Write-Host "JavaScript file not found after compilation." -ForegroundColor Red
           }
       } else {
           Write-Host "TypeScript file not found in $QuestionFolder." -ForegroundColor Yellow
       }
       cd D:\Governor_Sindh%_Questions_Assignment
   } else {
       Write-Host "Folder $QuestionFolder does not exist." -ForegroundColor Red
   }

   cd D:\Governor_Sindh\45_Questions_Assignment
   ```

## Usage

3. **Running the Scripts:**
   - To create folders, open PowerShell and navigate to your assignment directory using `cd`, then run the folder creation script.
   - To compile and run a specific TypeScript file, use the compilation script as follows:

   ```powershell
    un_assignment.ps1 -QuestionFolder "QX"
   ```
   Replace `"QX"` with the actual folder name you want to process, e.g., `"Q9"`.

## Conclusion

These scripts provide a streamlined workflow for managing multiple folders and TypeScript files, reducing the need for repetitive manual tasks and potential for error.
