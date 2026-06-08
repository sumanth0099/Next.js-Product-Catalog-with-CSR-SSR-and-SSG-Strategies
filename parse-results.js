const fs = require('fs');
const path = require('path');

const resultsDir = path.join(__dirname, 'results');

if (!fs.existsSync(resultsDir)) {
    console.error("No results directory found!");
    process.exit(1);
}

const files = fs.readdirSync(resultsDir).filter(f => f.endsWith('.json'));

if (files.length === 0) {
    console.log("No json files found in results");
    process.exit(0);
}

const tableData = [];

files.forEach(file => {
    const filePath = path.join(resultsDir, file);
    try {
        const report = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const audits = report.audits;

        tableData.push({
            File: file,
            TTFB: audits['server-response-time']?.numericValue?.toFixed(2) || 'N/A',
            FCP: audits['first-contentful-paint']?.numericValue?.toFixed(2) || 'N/A',
            LCP: audits['largest-contentful-paint']?.numericValue?.toFixed(2) || 'N/A',
            TTI: audits['interactive']?.numericValue?.toFixed(2) || 'N/A',
            TBT: audits['total-blocking-time']?.numericValue?.toFixed(2) || 'N/A',
            CLS: audits['cumulative-layout-shift']?.numericValue?.toFixed(3) || 'N/A',
            Score: report.categories?.performance?.score ? (report.categories.performance.score * 100).toFixed(0) : 'N/A',
        });
    } catch (error) {
        console.error(`Error parsing ${file}:`, error.message);
    }
});

console.table(tableData);
