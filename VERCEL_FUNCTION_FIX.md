# Vercel Function Configuration Fix

## Issue
Functions are not showing up in Vercel because the rewrite rules were catching all routes including `/api/*`.

## Solution Applied
Updated `vercel.json` to:
1. Exclude `/api/*` routes from the rewrite to `index.html`
2. Explicitly define the function runtime
3. Ensure API routes are handled correctly

## What Changed
- Added explicit function configuration
- Updated rewrites to exclude `/api` routes
- Functions will now be detected automatically

## After Deploying
1. The function should appear in Vercel Dashboard → Functions tab
2. You can test it at: `https://www.chernelangphysio.co.za/api/send-email`
3. Add environment variables as documented in `VERCEL_ENV_SETUP.md`

