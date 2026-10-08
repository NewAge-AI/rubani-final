# Brand art

Source for the 3D graphics in `public/landing/art/`. Each scene in `scene.html` is a Three.js composition in the brand palette (glass and satin forms, studio lighting, coral emissive accents) designed to depict the subject of the page it appears on.

```sh
cd scripts/brand-art
npm install
npm run dots    # builds africa-dots.json from Natural Earth country shapes
CHROMIUM_PATH=/path/to/chromium npm run render
```

Add a scene by writing a function in the `SCENES` object in `scene.html` and a row in `JOBS` in `render.mjs`. Heroes use the `&hero=1` framing (ultra-wide, subject in the right third).
