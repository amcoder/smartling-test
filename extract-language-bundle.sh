#!/bin/bash

# extract messages from project
npx formatjs extract "src/**/*.{ts,tsx}" --out-file "src/lang/defaultMessages.json"

# compile messages into english bundle
npx formatjs compile "src/lang/defaultMessages.json" --out-file "src/lang/messages_en.json"

cp "src/lang/messages_en.json" "src/lang/messages.json"

# generate fake french bundle for testing
jq '. |= map_values(.+ " 🇫🇷")' "src/lang/messages_en.json" > src/lang/messages_fr.json
