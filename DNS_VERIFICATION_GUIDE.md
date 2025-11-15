# DNS Verification Guide for Google Search Console

## Domain: rajan.codes
## Verification Record Type: TXT

### Step-by-Step Instructions

#### 1. **Access Your Domain Provider**
   - Log in to your domain name provider (e.g., GoDaddy, Namecheap, Cloudflare, Google Domains, etc.)
   - Navigate to DNS Management or DNS Settings

#### 2. **Add TXT Record**
   You need to add a **TXT record** with the following details:

   **Record Type:** `TXT`
   
   **Name/Host:** `@` (or leave blank, or use `rajan.codes`)
   - Some providers use `@` for root domain
   - Some use blank/empty
   - Some require the full domain name
   
   **Value/Content:** 
   ```
   google-site-verification=H_nn4uAIeilUBeD2TToIySDDIkcLOiK-djRj3fHy1TA
   ```
   
   **TTL:** `3600` (or default, usually 1 hour)

#### 3. **Provider-Specific Instructions**

   **GoDaddy:**
   - Go to DNS Management
   - Click "Add" to create a new record
   - Type: TXT
   - Name: @
   - Value: `google-site-verification=H_nn4uAIeilUBeD2TToIySDDIkcLOiK-djRj3fHy1TA`
   - TTL: 1 Hour
   - Click "Save"

   **Namecheap:**
   - Go to Domain List → Manage → Advanced DNS
   - Click "Add New Record"
   - Type: TXT Record
   - Host: @
   - Value: `google-site-verification=H_nn4uAIeilUBeD2TToIySDDIkcLOiK-djRj3fHy1TA`
   - TTL: Automatic
   - Click Save

   **Cloudflare:**
   - Go to DNS → Records
   - Click "Add record"
   - Type: TXT
   - Name: @ (or rajan.codes)
   - Content: `google-site-verification=H_nn4uAIeilUBeD2TToIySDDIkcLOiK-djRj3fHy1TA`
   - Proxy status: DNS only (gray cloud)
   - TTL: Auto
   - Click Save

   **Google Domains:**
   - Go to DNS → Custom records
   - Click "Add custom record"
   - Resource record type: TXT
   - Name: @
   - Data: `google-site-verification=H_nn4uAIeilUBeD2TToIySDDIkcLOiK-djRj3fHy1TA`
   - TTL: 3600
   - Click Add

#### 4. **Verify DNS Propagation**
   After adding the record, wait a few minutes and verify it's live:
   
   **Using Command Line (Windows PowerShell):**
   ```powershell
   nslookup -type=TXT rajan.codes
   ```
   
   **Using Online Tools:**
   - https://mxtoolbox.com/TXTLookup.aspx
   - https://www.whatsmydns.net/#TXT/rajan.codes
   - Enter `rajan.codes` and look for the TXT record

#### 5. **Verify in Google Search Console**
   - Go back to Google Search Console
   - Click "Verify" button
   - If it doesn't work immediately, wait 24-48 hours for DNS propagation
   - DNS changes can take up to 48 hours to fully propagate globally

### Troubleshooting

**If verification fails:**
1. ✅ Double-check the TXT record value (must match exactly)
2. ✅ Ensure no extra spaces or quotes
3. ✅ Wait 24-48 hours for DNS propagation
4. ✅ Verify using nslookup or online DNS checker
5. ✅ Make sure you're adding TXT record, not CNAME or A record
6. ✅ Check if your domain provider has any DNS caching

**Common Mistakes:**
- ❌ Adding quotes around the value
- ❌ Extra spaces before/after the value
- ❌ Wrong record type (using CNAME instead of TXT)
- ❌ Wrong hostname (@ vs blank vs full domain)

### After Verification

Once verified, you'll be able to:
- Submit your sitemap: `https://rajan.codes/sitemap.xml`
- Monitor search performance
- Track keyword rankings
- Fix crawl errors
- View search analytics

---

**Verification Code:** `H_nn4uAIeilUBeD2TToIySDDIkcLOiK-djRj3fHy1TA`
**Domain:** rajan.codes
**Record Type:** TXT

