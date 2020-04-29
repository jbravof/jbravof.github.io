@echo off

REM Next command creates a list of program files in the computer’s C:\ drive

START C:\"Program Files (x86)"\Google\Chrome\Application\chrome.exe --show-app-list="true" --profile-directory="Default"  --app="data:text/html;charset=ISO-8859-1,<html><head></head><body><script language=\"javascript\">window.open('http://perso.f-hauri.ch/~felix/svg/dustin_w_Clock_autonom.svg','clock','toolbar=0,location=0,status=0,menubar=0,scrollbars=1,'+'resizable=1,width=600,height=600,top=100,left=120');</script>"