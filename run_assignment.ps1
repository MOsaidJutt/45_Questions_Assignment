param (
    [string]$QuestionFolder
)

$path = Join-Path -Path "D:\Governor_Sindh\45_Questions_Assignment" -ChildPath $QuestionFolder

if (Test-Path $path) {
    Write-Host 'Entering folder: $QuestionFolder' -ForegroundColor Cyan
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
} else {
    Write-Host "Folder $QuestionFolder does not exist." -ForegroundColor Red
}

cd D:\Governor_Sindh\45_Questions_Assignment
