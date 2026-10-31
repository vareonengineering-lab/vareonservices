# Vareonservices

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vareonservices.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fb46ac3f-f79b-4e70-aa0c-35c64e76df8c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Static hosting build

```sh
npm run build
```

The homepage is prerendered and exported to **`dist/index.html`**, with its
JavaScript, CSS, images and public files alongside it. Serve over HTTP/HTTPS;
opening the file directly with `file://` is not supported.

For a static host, upload `dist/index.html`, `dist/assets/` and the other public
files at the root of `dist`. The `dist/client/`, `dist/server/` and
`dist/.lovable/` directories are framework deployment output and are not needed
by the static host. No application server is needed for the current website.

This remains a React 19 / TanStack Start project using Vite, as required by
Lovable; it is not a conversion to a plain React SPA. The static export provides
the conventional HTML-and-assets hosting output without changing the website.
If new pages are added, include their public paths in `vite.config.ts`'s `pages`
list. Features that require server endpoints will need a separately hosted
service and are not provided by this static export.
