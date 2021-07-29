# Astro with Tailwind on Github Pages

1. In Github go to Settings > Developer settings > Personal Access tokens. Generate a new token with *Repo* permissions.
2. In the astro project repo, go to Settings > Secrets and add your new personal access token with the name API_TOKEN_GITHUB.
3. Set Github Pages to branch `gh-pages`
4. Change `buildOptions.site` to your Github Pages URL 

    in `astro.config.mjs`
    ```js
    export default {
    buildOptions: {
      site: 'https://mulaidev.github.io/components',
    ```
5. Reference `buildOptions.site` with `Astro.site`

    in [/src/pages/index.astro](https://github.com/mulaidev/components/blob/b43c4c1d716064951767a4561b50a971c949f103/src/pages/index.astro#L8) (line 8)
    ```js
    ---
    const Css = Astro.site + "/global.css";
    ---
    ```
    in [/src/pages/index.astro](https://github.com/mulaidev/components/blob/b43c4c1d716064951767a4561b50a971c949f103/src/pages/index.astro#L19) (line 19)
    ```html
    <link rel="stylesheet" type="text/css" href={Css} />
    ```
6. Add scripts in `package.json` to generate TailwindCSS and reference it after build time

    in [package.json](https://github.com/mulaidev/components/blob/b43c4c1d716064951767a4561b50a971c949f103/package.json#L8)
    ```js
    "scripts": {
      "start": "astro dev",
      "build": "astro build",
      "css": "npx tailwindcss -o dist/global.css"
    },
    ```

    in [.github/workflows/deploy.yml](https://github.com/mulaidev/components/blob/b43c4c1d716064951767a4561b50a971c949f103/.github/workflows/deploy.yml#L40)
    ```yml
    - name: Build
          run: |
            npm run build
            touch ./dist/.nojekyll
            npm run css
    ```
