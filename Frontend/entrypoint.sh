#!/bin/sh

set -e

if [ ! -d "node_modules" ]; then
    echo "==> Installation des dépendances npm (frontend)..."
    npm ci
fi

echo "==> Lancement du serveur Vite"

exec "$@"