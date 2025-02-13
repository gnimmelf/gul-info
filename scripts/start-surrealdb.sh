#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Path to .build-assets relative to the script directory
CERT_DIR="$SCRIPT_DIR/../.dev-certs"

# Paths to the certificate and key files
TLS_CERT="$CERT_DIR/server.cert"
TLS_KEY="$CERT_DIR/server.key"

# Check if useTls argument is provided
USE_TLS=false
if [[ "$1" == "useTls" ]]; then
  USE_TLS=true
fi

# If useTls is true, ensure the certificate and key files exist
if $USE_TLS; then
  if [[ ! -f "$TLS_CERT" || ! -f "$TLS_KEY" ]]; then
    echo "Error: TLS certificate or key file not found in $CERT_DIR"
    exit 1
  fi
fi

# Start SurrealDB command
COMMAND="
surreal start surrealkv://.dev-data \
  --strict \
  --deny-all \
  --allow-scripting \
  --allow-guests \
  --allow-funcs \
  --allow-net intergate.eu.auth0.com \
  --user r00t \
  --pass r00t \
  --bind 127.0.0.1:7999 \
  --log debug \
"

# Append TLS arguments if useTls is true
if $USE_TLS; then
  COMMAND+=" --web-crt \"$TLS_CERT\" --web-key \"$TLS_KEY\""
fi

echo $COMMAND

# Execute the command
eval $COMMAND
