# DOCS

## Next.js and MDX

-   https://mdxjs.com/docs/getting-started/#nextjs
-   https://nextjs.org/docs/advanced-features/using-mdx

## Vercel

### Setup

1. Install [vercel cli](https://vercel.com/docs/cli#installing-vercel-cli)
2. Login with `vercel login`
3. Create new project with `vercel link` 
4. Add `.vercel/` to `.gitignore`
5. Inside `.vercel/project.json` you can find projectId and orgId
6. Create [access token](https://vercel.com/guides/how-do-i-use-a-vercel-api-access-token#creating-an-access-token)
7. Add Secrets to Github Repository `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `VERCEL_TOKEN`

### Deploy

https://vercel.com/guides/how-can-i-use-github-actions-with-vercel
