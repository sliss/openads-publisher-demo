# openads-publisher-demo

## Setup

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## Development

Run the development server:

```bash
npm run dev
```

This will:

- Watch for changes in your HTML files
- Process the Tailwind directives in `src/input.css`
- Output the processed CSS to `public/tw.css`

## Production Build

To build the CSS for production:

```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy

The build and development commands are already configured in `vercel.json`.
