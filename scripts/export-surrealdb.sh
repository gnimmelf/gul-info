#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

DEST_DIR="$SCRIPT_DIR/../scripts/surql"

# Export the database from the running HTTP-server (NOT https)
COMMAND="
surreal export \
  --endpoint http://127.0.0.1:7999
  --user r00t \
  --pass r00t \
  --ns intergate
  --db gul-info
  db-export.surql
"

echo $COMMAND

# Execute the command
eval $COMMAND
