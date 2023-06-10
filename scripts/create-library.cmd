@echo off

REM Check if exactly one argument is provided
if "%~1"=="" (
  echo Error: The first argument must be the name of the library.
  exit /b 1
)

REM Run the command with the argument
nx g @nx/react:lib %1 --bundler=vite --directory=lib/%1 --minimal=true --style=css --unitTestRunner=jest
