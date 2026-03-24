#!/usr/bin/env bash

pnpm exec vercel pull --environment preview --token "$VERCEL_TOKEN"
pnpm run build
pnpm exec vercel deploy --prebuilt --token "$VERCEL_TOKEN"
