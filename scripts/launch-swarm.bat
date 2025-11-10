@echo off
REM 🚀 Lancement Swarm d'Agents Claude Code - Version Windows
REM Ce script est compatible Windows 10/11 et Windows Server

setlocal enabledelayedexpansion

echo.
echo 🚀 Initialisation du Swarm d'Agents Claude Code...
echo.

REM Vérification des prérequis
where claude >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Claude Code CLI non installé !
    echo.
    echo 📥 Installation requise :
    echo    npm install -g @anthropic/claude-code
    echo.
    pause
    exit /b 1
)

where jq >nul 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  jq non trouvé. Installation recommandée pour JSON parsing
    echo    Téléchargez: https://stedolan.github.io/jq/download/
    echo.
)

REM Configuration par défaut
set "AGENTS_FILE=claude-agents.json"
set "MODE=parallel"
set "MONITORING=--monitoring"

REM Gestion des arguments
if not "%1"=="" set "MODE=%1"
if not "%2"=="" set "MONITORING=%2"

REM Création de l'arborescence
echo 📁 Création de l'arborescence...
if not exist ".claude" mkdir ".claude"
if not exist ".claude\agents" mkdir ".claude\agents"
if not exist "logs" mkdir "logs"
if not exist "temp" mkdir "temp"

REM Vérification des fichiers de configuration
if not exist "%AGENTS_FILE%" (
    echo ❌ Fichier %AGENTS_FILE% introuvable !
    echo.
    echo 💡 Création d'un fichier de configuration par défaut...

    REM Création du fichier JSON par défaut
    echo {> "%AGENTS_FILE%"
    echo   "swarm_name": "Windows_Swarm_2030",>> "%AGENTS_FILE%"
    echo   "version": "1.0",>> "%AGENTS_FILE%"
    echo   "agents": [>> "%AGENTS_FILE%"
    echo     {>> "%AGENTS_FILE%"
    echo       "id": "frontend-guru",>> "%AGENTS_FILE%"
    echo       "name": "Frontend Master",>> "%AGENTS_FILE%"
    echo       "role": "React/Vue/Angular Expert",>> "%AGENTS_FILE%"
    echo       "priority": "high",>> "%AGENTS_FILE%"
    echo       "resources": {>> "%AGENTS_FILE%"
    echo         "cpu": "2 cores",>> "%AGENTS_FILE%"
    echo         "memory": "4GB",>> "%AGENTS_FILE%"
    echo         "timeout": 300>> "%AGENTS_FILE%"
    echo       }>> "%AGENTS_FILE%"
    echo     },>> "%AGENTS_FILE%"
    echo     {>> "%AGENTS_FILE%"
    echo       "id": "backend-wizard",>> "%AGENTS_FILE%"
    echo       "name": "Backend Architect",>> "%AGENTS_FILE%"
    echo       "role": "API/Database Expert",>> "%AGENTS_FILE%"
    echo       "priority": "high",>> "%AGENTS_FILE%"
    echo       "resources": {>> "%AGENTS_FILE%"
    echo         "cpu": "2 cores",>> "%AGENTS_FILE%"
    echo         "memory": "4GB",>> "%AGENTS_FILE%"
    echo         "timeout": 300>> "%AGENTS_FILE%"
    echo       }>> "%AGENTS_FILE%"
    echo     },>> "%AGENTS_FILE%"
    echo     {>> "%AGENTS_FILE%"
    echo       "id": "security-guardian",>> "%AGENTS_FILE%"
    echo       "name": "Security Shield",>> "%AGENTS_FILE%"
    echo       "role": "Cybersecurity Expert",>> "%AGENTS_FILE%"
    echo       "priority": "critical",>> "%AGENTS_FILE%"
    echo       "resources": {>> "%AGENTS_FILE%"
    echo         "cpu": "1 core",>> "%AGENTS_FILE%"
    echo         "memory": "2GB",>> "%AGENTS_FILE%"
    echo         "timeout": 180>> "%AGENTS_FILE%"
    echo       }>> "%AGENTS_FILE%"
    echo     },>> "%AGENTS_FILE%"
    echo     {>> "%AGENTS_FILE%"
    echo       "id": "devops-commander",>> "%AGENTS_FILE%"
    echo       "name": "DevOps Captain",>> "%AGENTS_FILE%"
    echo       "role": "CI/CD ^& Infrastructure",>> "%AGENTS_FILE%"
    echo       "priority": "medium",>> "%AGENTS_FILE%"
    echo       "resources": {>> "%AGENTS_FILE%"
    echo         "cpu": "1 core",>> "%AGENTS_FILE%"
    echo         "memory": "2GB",>> "%AGENTS_FILE%"
    echo         "timeout": 240>> "%AGENTS_FILE%"
    echo       }>> "%AGENTS_FILE%"
    echo     },>> "%AGENTS_FILE%"
    echo     {>> "%AGENTS_FILE%"
    echo       "id": "data-analyst",>> "%AGENTS_FILE%"
    echo       "name": "Data Scientist",>> "%AGENTS_FILE%"
    echo       "role": "Analytics ^& ML Expert",>> "%AGENTS_FILE%"
    echo       "priority": "medium",>> "%AGENTS_FILE%"
    echo       "resources": {>> "%AGENTS_FILE%"
    echo         "cpu": "2 cores",>> "%AGENTS_FILE%"
    echo         "memory": "4GB",>> "%AGENTS_FILE%"
    echo         "timeout": 300>> "%AGENTS_FILE%"
    echo       }>> "%AGENTS_FILE%"
    echo     }>> "%AGENTS_FILE%"
    echo   ],>> "%AGENTS_FILE%"
    echo   "orchestration": {>> "%AGENTS_FILE%"
    echo     "mode": "parallel",>> "%AGENTS_FILE%"
    echo     "max_concurrent": 10,>> "%AGENTS_FILE%"
    echo     "retry_policy": {>> "%AGENTS_FILE%"
    echo       "max_retries": 3,>> "%AGENTS_FILE%"
    echo       "backoff": "exponential">> "%AGENTS_FILE%"
    echo     },>> "%AGENTS_FILE%"
    echo     "monitoring": {>> "%AGENTS_FILE%"
    echo       "enabled": true,>> "%AGENTS_FILE%"
    echo       "interval": 30>> "%AGENTS_FILE%"
    echo     }>> "%AGENTS_FILE%"
    echo   }>> "%AGENTS_FILE%"
    echo }>> "%AGENTS_FILE%"

    echo ✅ Fichier %AGENTS_FILE% créé avec succès
)

REM Comptage des agents (si jq disponible)
where jq >nul 2>nul
if %errorlevel% equ 0 (
    for /f "delims=" %%i in ('jq ".agents | length" "%AGENTS_FILE%"') do set AGENT_COUNT=%%i
    echo 🤖 !AGENT_COUNT! agents détectés
) else (
    echo 🤖 Fichier de configuration trouvé
)

REM Lancement du swarm
echo.
echo 🎯 Lancement du swarm en mode %MODE%...
echo.

REM Enregistrement du temps de début
for /f "delims=" %%i in ('powershell -command "Get-Date -UFormat %%s"') do set START_TIME=%%i

REM Commande de lancement
claude --agents "@%AGENTS_FILE%" --swarm-mode %MODE% %MONITORING%

REM Enregistrement du temps de fin
for /f "delims=" %%i in ('powershell -command "Get-Date -UFormat %%s"') do set END_TIME=%%i

REM Calcul de la durée
set /a DURATION=%END_TIME% - %START_TIME%

echo.
echo ✅ Swarm démarré en %DURATION% secondes
echo 📊 Consultez logs\swarm.log pour les détails
echo.

REM Menu de suivi
:menu
echo Que souhaitez-vous faire ?
echo.
echo 1. Vérifier le statut du swarm
echo 2. Voir les logs en temps réel
echo 3. Arrêter le swarm
echo 4. Quitter
echo.
set /p choice="Votre choix (1-4): "

if "%choice%"=="1" (
    echo.
    echo 📊 Statut du swarm:
    claude --agents "@%AGENTS_FILE%" --status
    echo.
    goto menu
)
if "%choice%"=="2" (
    echo.
    echo 📋 Logs en temps réel (Ctrl+C pour arrêter):
    if exist "logs\swarm.log" (
        tail -f logs\swarm.log 2>nul || type logs\swarm.log
    ) else (
        echo ⚠️  Aucun fichier de log trouvé
    )
    echo.
    goto menu
)
if "%choice%"=="3" (
    echo.
    echo 🛑 Arrêt du swarm...
    claude --agents "@%AGENTS_FILE%" --stop
    echo ✅ Swarm arrêté
    goto menu
)
if "%choice%"=="4" (
    echo.
    echo 👋 Au revoir !
    exit /b 0
)

echo.
echo ⚠️  Choix invalide
goto menu

endlocal