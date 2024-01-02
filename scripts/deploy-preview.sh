#!/usr/bin/env bash

npx vercel pull --environment preview --token "$VERCEL_TOKEN"
npm run build
npx vercel deploy --prebuilt --token "$VERCEL_TOKEN"
