const fs = require('fs');
const path = require('path');
const joke = "I'm reading a book about anti-gravity. I can't put it down!";
const outDir = path.join(process.cwd(), 'output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'entry.txt'), joke);
console.log(joke);
