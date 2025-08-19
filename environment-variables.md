# Environment Variables

This project uses the following environment variables. Create a `.env.local` file in the root directory and add these variables with your actual values.

## Required Environment Variables

### Contentstack Configuration

```bash
# Contentstack API host (default: api.contentstack.io)
CONTENTSTACK_API_HOST=api.contentstack.io

# Contentstack CDN host for content delivery
CONTENTSTACK_CDN=cdn.contentstack.com/v3

# Your Contentstack stack API key
CONTENTSTACK_API_KEY=[your-api-key]

# Delivery token for accessing published content
CONTENTSTACK_DELIVERY_TOKEN=[your-delivery-token]

# Management token for content management operations (REQUIRED by init script)
# This token is used to create content types and entries automatically
CONTENTSTACK_MANAGEMENT_TOKEN=[your-management-token]

# Environment name for content delivery
CONTENTSTACK_ENVIRONMENT=production
```

## Usage

1. Copy the environment variables above to a new file called `.env.local` in the project root
2. Replace the placeholder values with your actual Contentstack credentials
3. The init script (`scripts/init-contentstack.js`) will automatically load these variables when run during the build process

### Running the Setup Script

The init script will create a complete conference site structure in your Contentstack stack:

```bash
npm run build
```

This will create:
- **4 Content Types**: Conference Details, Speakers, Sessions, Accommodations
- **Sample Content**: 1 conference page, 4 speakers, 4 sessions, 3 accommodations

### What Gets Created

1. **Conference Details Content Type**: Event info, dates, location, registration
2. **Speakers Content Type**: Names, bios, companies, social links, keynote status
3. **Sessions Content Type**: Schedule, descriptions, speakers, tracks, rooms
4. **Accommodations Content Type**: Hotels, pricing, amenities, booking info

## Migration from Previous Variables

This project has been updated to use standardized Contentstack environment variable names. If you were previously using:

- `CS_API_KEY` → now use `CONTENTSTACK_API_KEY`
- `CS_MANAGEMENT_TOKEN` → now use `CONTENTSTACK_MANAGEMENT_TOKEN`  
- `CS_REGION` → now use `CONTENTSTACK_API_HOST` (specify the full host, e.g., `api.contentstack.io`)