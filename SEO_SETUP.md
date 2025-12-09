# SEO Setup Documentation

This document outlines the comprehensive SEO implementation for Braintree Brewhouse website.

## ✅ Implemented Features

### 1. **Metadata & Open Graph Tags**
- Complete metadata configuration in `app/layout.tsx`
- Open Graph tags for social media sharing (Facebook, LinkedIn, etc.)
- Twitter Card tags for Twitter sharing
- Dynamic title templates
- Comprehensive keyword optimization
- Canonical URLs

### 2. **Structured Data (JSON-LD)**
- Schema.org Restaurant markup
- Includes business information:
  - Name, address, phone number
  - Opening hours
  - Cuisine type
  - Price range
  - Amenities (Full Bar, Sports Viewing, Live Music)
  - Social media links

### 3. **Dynamic OG Image**
- Route: `/app/og-image/route.tsx`
- Generates a 1200x630px Open Graph image dynamically
- Includes:
  - Business name
  - Tagline (Craft Beer • Bar Pizza • Sports Bar)
  - Address and phone
  - Hours of operation
- Accessible at: `https://yourdomain.com/og-image`

### 4. **Sitemap**
- Automatic sitemap generation at `/sitemap.xml`
- Includes all main pages with priorities and change frequencies
- Configured in `app/sitemap.ts`

### 5. **Robots.txt**
- Automatic robots.txt generation at `/robots.txt`
- Allows all crawlers
- Disallows `/api/` and `/_next/` directories
- Points to sitemap location

### 6. **Page-Specific SEO**
- Home page has specific metadata
- Template system for consistent titles across pages

## 🔧 Configuration

### Environment Variables

Add to your `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://braintreebrewhouse.com
```

This is used for:
- Generating absolute URLs for OG images
- Canonical URLs
- Structured data
- Sitemap URLs

### Verification Codes

To add search engine verification codes, update `app/layout.tsx`:

```typescript
verification: {
  google: "your-google-verification-code",
  bing: "your-bing-verification-code",
},
```

## 📊 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] OG Image generation
- [x] Canonical URLs
- [x] Keywords optimization
- [x] Mobile-friendly viewport
- [ ] Google Search Console setup (manual)
- [ ] Google Analytics setup (manual)
- [ ] Facebook Pixel setup (manual)

## 🧪 Testing

### Test OG Image
Visit: `http://localhost:3000/og-image` (or your production URL)

### Test Sitemap
Visit: `http://localhost:3000/sitemap.xml`

### Test Robots.txt
Visit: `http://localhost:3000/robots.txt`

### Validate Structured Data
Use Google's Rich Results Test: https://search.google.com/test/rich-results

### Test Social Sharing
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## 📝 Next Steps

1. **Set up Google Search Console**
   - Add property for your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Verify ownership

2. **Set up Google Analytics**
   - Add tracking code to layout
   - Set up conversion tracking

3. **Monitor Performance**
   - Track keyword rankings
   - Monitor organic traffic
   - Review search console reports

4. **Content Optimization**
   - Add alt text to all images
   - Optimize page load speeds
   - Ensure mobile responsiveness

## 🔗 Resources

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Restaurant](https://schema.org/Restaurant)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)





