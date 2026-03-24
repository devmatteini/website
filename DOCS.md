# DOCS

## Netlify

### Setup

1. Run `pnpm install`
2. Login with `pnpm netlify login`
3. Create new empty project with `pnpm netlify sites:create --name <name>`
4. Add `.netlify` to `.gitignore`
5. Inside `.netlify/state.json` you can find siteId
6. Create access token: Netlify dashboard → User settings → Personal access tokens
7. Add Secrets to Github Repository `NETLIFY_SITE_ID`, `NETLIFY_AUTH_TOKEN`
