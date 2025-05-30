#!/usr/bin/env bash

# Strip ANSI escape codes from a file
# Usage: ./strip-ansi.sh <file>
# This is used for stripping ANSI codes from the terminal output when reporting the github action status.
sed -r "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[mGK]//g" "$1"
