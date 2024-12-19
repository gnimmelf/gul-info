#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Path to .build-assets relative to the script directory
CERT_DIR="$SCRIPT_DIR/../.dev-certs"

# Paths to the certificate and key files
TLS_CERT="$CERT_DIR/server.cert"
TLS_KEY="$CERT_DIR/server.key"

# Ensure the certificate and key files exist
if [[ ! -f "$TLS_CERT" || ! -f "$TLS_KEY" ]]; then
  echo "Error: TLS certificate or key file not found in $CERT_DIR"
  exit 1
fi

# Start SurrealDB with TLS
surreal start surrealkv://.dev-data \
  --allow-all \
  --user r00t --pass r00t \
  --bind 127.0.0.1:7999 \
  --web-crt "$TLS_CERT" \
  --web-key "$TLS_KEY" \
 