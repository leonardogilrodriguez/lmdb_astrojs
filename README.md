# LMDB AstroJS Project

Web application to explore movies/TV shows, developed with Astro and React.

## Main Features
- Multimedia content search
- Details for movies, TV shows, and people
- Responsive design with CSS modules
- Dynamic routing for detail pages
- Integration with external API (implied by code structure)

## 🚀 Installation and usage

1. Clone repository
```bash
git clone https://github.com/leonardogilrodriguez/lmdb_astrojs.git
```

2. Install dependencies
```bash
npm install
```

3. Create configuration file
```bash
cp .env.example .env
``` 

Must contain TMDB API KEY (https://www.themoviedb.org/)

````
TMDB_API_KEY=your_api_key_here
````

4. Start development server
```bash
npm run dev
```

## Main technologies
- Astro (v5.1.1)
- React (v19)
- CSS modules
- Dynamic routing
- Typescript (v5.6.3)

## Key structure
```
/src
├── components/     # Reusable components
├── pages/          # Automatic routing
├── API/            # Service logic
├── reactjs/        # Specific React components
└── layouts/        # Page templates
└── utils/          # Utility functions
```

## Future improvements
- Implement API caching system
- Add testing with Playwright
- Internationalization (i18n)
- Optimize image loading (source sets)
- CSS improvements with Tailwind
- List virtualization
- SEO enhancements (figure...)
- More "islands"

📌 **Note:** Requires environment variables for API configuration (see .env.example)

## Shameless Plug

I created an MCP (Model Context Protocol) that uses the same API to perform smart searches with Claude AI using TMDB's API.

https://github.com/leonardogilrodriguez/mcp-tmdb?tab=readme-ov-file

BONUS: The same development but using NextJS instead of AstroJS:
https://github.com/leonardogilrodriguez/lmdb_nextjs