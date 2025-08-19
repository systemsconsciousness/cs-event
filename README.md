# AI DXP Island Conference 2028

A stunning, modern conference microsite for the AI DXP Island Conference 2028, powered by [Next.js](https://nextjs.org) and [Contentstack](https://contentstack.com). This project automatically sets up a complete conference content management system with fictional speakers, agenda, and accommodations.

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd cs-event
npm install
```

### 2. Set Up Contentstack

1. Create a Contentstack account and stack at [contentstack.com](https://contentstack.com)
2. Get your API credentials:
   - Stack API Key
   - Management Token (required for setup)
   - Delivery Token
3. Copy `.env.local` from the environment variables documentation:

```bash
# Copy environment variables from environment-variables.md
cp environment-variables.md .env.local.example
```

### 3. Configure Environment Variables

Create `.env.local` in the project root with your Contentstack credentials:

```bash
CONTENTSTACK_API_HOST=api.contentstack.io
CONTENTSTACK_CDN=cdn.contentstack.com/v3
CONTENTSTACK_API_KEY=your-api-key
CONTENTSTACK_DELIVERY_TOKEN=your-delivery-token
CONTENTSTACK_MANAGEMENT_TOKEN=your-management-token
CONTENTSTACK_ENVIRONMENT=production
```

### 4. Initialize Conference Content

Run the build command to automatically create content models and sample data:

```bash
npm run build
# The postbuild script automatically sets up the conference content
```

This creates:
- ✅ **4 Content Types**: Conference Details, Speakers, Sessions, Accommodations  
- ✅ **Sample Content**: 1 conference page, 4 speakers, 4 sessions, 3 accommodations

### 5. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your AI DXP Island Conference 2028 site!

## 🏝️ What Gets Created

The initialization script sets up a complete conference site structure:

### Content Types
1. **Conference Details** - Event info, dates, location, description, registration
2. **Speakers** - Names, bios, companies, social links, keynote status
3. **Sessions** - Schedule, descriptions, speakers, tracks, rooms
4. **Accommodations** - Hotels, pricing, amenities, booking info

### Sample Content
- Conference details with event information and registration
- 4 fictional speakers including keynote speakers with realistic AI/DXP backgrounds
- 4 sessions covering AI, DXP, and related technologies
- 3 accommodation options from luxury resort to eco-friendly lodge

## 🛠 Customization

### Editing Content
1. Log into your [Contentstack dashboard](https://app.contentstack.com)
2. Navigate to your stack
3. Edit the sample content or create new entries
4. Publish entries to make them available via the API

### Modifying Conference Content
- Edit `scripts/init-contentstack.js` to customize speakers, sessions, or accommodations
- Add new content types or modify existing schemas
- Re-run `npm run build` to apply changes

### Frontend Development
- Edit `src/app/page.tsx` to customize the conference homepage
- Create new pages for speakers, agenda, accommodations
- Use the Contentstack Delivery API to fetch and display conference content

## 📚 Documentation

- [Environment Variables Guide](./environment-variables.md) - Complete setup instructions
- [Contentstack Documentation](https://www.contentstack.com/docs/) - Official API docs
- [Next.js Documentation](https://nextjs.org/docs) - Frontend framework docs

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes Contentstack setup)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Environment Variables for Production
Make sure to set all required environment variables in your deployment platform:
- `CONTENTSTACK_API_HOST`
- `CONTENTSTACK_CDN`  
- `CONTENTSTACK_API_KEY`
- `CONTENTSTACK_DELIVERY_TOKEN`
- `CONTENTSTACK_ENVIRONMENT`

Note: `CONTENTSTACK_MANAGEMENT_TOKEN` is only needed for the initial setup, not for production runtime.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 🏝️ for AI DXP Island Conference 2028 using [Next.js](https://nextjs.org) and [Contentstack](https://contentstack.com)