#!/usr/bin/env bash

npx vercel pull --environment preview --token "$VERCEL_TOKEN"
npx vercel build --yes --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --token "$VERCEL_TOKEN"
