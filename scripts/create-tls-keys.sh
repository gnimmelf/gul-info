#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Set the destination directory relative to the script's directory
DEST_DIR="$SCRIPT_DIR/../.dev-certs"

# Create a temporary directory
TEMP_DIR=$(mktemp -d)

# Ensure the temporary directory is cleaned up on script exit
trap "rm -rf $TEMP_DIR" EXIT

# Create the destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# 1. Create the CA's private key and self-signed certificate:
openssl req -nodes -new -x509 -keyout "$TEMP_DIR/ca.key" -out "$TEMP_DIR/ca.pem" -days 365 -subj "/CN=MyCA"

# 2. Create the server's private key and a Certificate Signing Request (CSR):
openssl req -nodes -new -keyout "$TEMP_DIR/server.key" -out "$TEMP_DIR/server.csr" -subj "/CN=localhost"

# 3. Use the CA to sign the server's CSR and generate the server certificate:
openssl x509 -req -in "$TEMP_DIR/server.csr" -CA "$TEMP_DIR/ca.pem" -CAkey "$TEMP_DIR/ca.key" \
  -CAcreateserial -out "$TEMP_DIR/server.cert" -days 365

# 4. Move files to the .build-assets directory
mv "$TEMP_DIR"/* "$DEST_DIR"

echo "Certificates and keys moved to $DEST_DIR"
