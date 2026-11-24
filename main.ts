import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const joke = "I'm reading a book about anti-gravity. I can't put it down!";
mkdirSync(join(process.cwd(), 'output'), { recursive: true });
writeFileSync(join(process.cwd(), 'output', 'entry.txt'), joke);
process.stdout.write(joke + '\n');
