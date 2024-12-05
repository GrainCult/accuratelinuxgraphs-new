This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## How to add a graph
Open a pr to make a folder in public/graphs with the following structure:
```
public/graphs/your-graph-name
  ├── metadata.json
  ├── graph.[png|jpg|jpeg|gif|avif|svg|webp|accuracyimageformat]

metadata.json:
{
  "title": "Your Graph Title",
  "description": "Your Graph Description",
  "author": "Your Name",
  "license": "must be a spdx identifier https://spdx.org/licenses/",
  "filename": "graph.[png|jpg|jpeg|gif|avif|svg|webp|accuracyimageformat]"
}
```

Graph Guidelines:
- obviously no inappropriate content
- if using third-party content, make sure it's license is permissive of this use case
- this graph has to be made by you
- must include a watermark reference to accuratelinuxgraphs (link, mention, etc)
- for license we strongly recommend using CC0 as all graphs are watermarked and who on earth is using these commercially... if you want to use a different license, please make sure it's a permissive one
- graphs should have to do with linux in some way
- look at our other graphs and get a feel for what we're looking for
- files must be under 8.44267863583428196mb (or approximately 2110669.658958570566 nibbles) (unless you have a good reason), we dont want the page load time to be absurd
