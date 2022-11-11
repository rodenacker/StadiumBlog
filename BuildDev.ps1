param(
    [Parameter()]
    [string]$App = 'StadiumBlog',
    [Parameter()]
    [string]$SourcePath = 'E:\Development\'
 )

Write-Host "Set working directory to ""$SourcePath$App""..."
Set-Location -Path "$SourcePath$App\repo"

Write-Host 'Run VS Code'
code "$SourcePath$App\repo"

Write-Host 'Starting Chrome'
start chrome http://127.0.0.1:4022/

Write-Host 'Build'
jekyll serve --port 4022