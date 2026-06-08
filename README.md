# Next.js Rendering Strategies Benchmark

This repository demonstrates the practical differences between three foundational web rendering strategies: **Client-Side Rendering (CSR)**, **Server-Side Rendering (SSR)**, and **Static Site Generation (SSG)** using Next.js 14. 

**##Live Demos**

**csr** -```https://csr-roan.vercel.app/products ```

**ssg** -```https://ssg-nine-orpin.vercel.app/products```

**ssr** - ```https://ssr1-steel.vercel.app/products```


## Tech Stack
- **Framework:** Next.js (Pages Router)
- **Styling:** Tailwind CSS
- **Data Source:** DummyJSON API
- **Benchmarking:** Lighthouse CLI
- **Scripting:** Node.js (JavaScript)

## Project Structure

- `/csr`: Implements dynamic Client-Side Rendering with `useEffect`.
- `/ssr`: Analyzes Server-Side per-request computations via `getServerSideProps`.
- `/ssg`: Maximizes speeds with Static Site Generation and Incremental Static Regeneration (ISR) using `getStaticProps` and `getStaticPaths`.
- `/results`: Contains median Lighthouse performance audits in JSON format mapping each strategy against mobile and desktop form factors.
- `parse-results.js`: Node.js script used to extract and compile Core Web Vitals targets from the generated JSON reports into an actionable comparison table.
- `ANALYSIS.md`: Features the tabulated data alongside a decision-making chart for identifying optimal rendering topologies for common web applications.

## How to Run Locally

You can independently spin up any application backend. Switch into their specific directory, install standard dependencies, and boot the server:

```bash
cd csr/  # (or /ssr, or /ssg)
npm install
npm run dev
```

To emulate the closest possible production variables to gauge true latency and HTML layout:
```bash
npm run build
npm start
```

## Running the Benchmark Results parser

Ensure you are located at the root of the repository.

```bash
node parse-results.js
```

This returns a clear tabular interpretation detailing Time to First Byte (TTFB), Largest Contentful Paint (LCP), Total Blocking Time (TBT), and automated scoring profiles indicating the comparative advantages of Server-Side strategies versus Client-Side variants out-of-the-box.
