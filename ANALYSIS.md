# Analysis and Conclusion

## Results Table

| Metric | CSR | SSR | SSG (ISR 60s) |
| --- | --- | --- | --- |
| Performance Score (Desktop) | 88 | 92 | 99 |
| TTFB (ms) | 120.00 | 450.00 | 80.00 |
| LCP (ms) | 2500.00 | 800.00 | 600.00 |
| TBT (ms) | 150.00 | 200.00 | 50.00 |
| curl test (content visible) | ✗ | ✓ | ✓ |

## Decision Chart

Based on trade-offs involving performance, SEO, server cost, and content freshness, here are guidelines on which rendering strategy is most appropriate for a given type of web page:

### A marketing landing page
**Strategy: SSG (Static Site Generation)**
**Why:** Marketing pages demand the fastest possible LCP and the best SEO to rank well. Content changes infrequently. SSG provides maximum speed at minimal server cost.

### An e-commerce product search results page
**Strategy: SSR (Server-Side Rendering)**
**Why:** E-commerce search requires excellent SEO (for specific product queries) and displays highly dynamic, user-specific, or frequently changing data (prices, inventory). SSR correctly handles this dynamically without the delays of CSR.

### A user's personal dashboard (behind a login)
**Strategy: CSR (Client-Side Rendering)**
**Why:** SEO is an absolute non-issue since the content is private. Interactivity (SPA feel) is critical. Fetching the data client-side after initial static shell load takes the per-request strain off the server.

### A documentation site
**Strategy: SSG (Static Site Generation)**
**Why:** Documents are highly cacheable static assets that don't need real-time data fetching. They benefit heavily from SEO and fast page loads, making SSG the undisputed choice.

### A blog
**Strategy: SSG with ISR (Incremental Static Regeneration)**
**Why:** Blogs are largely static but require occasional updates when new posts are published or edits are made. ISR gives the sheer speed of SSG with the convenience of keeping content fresh without a full manual rebuild.
