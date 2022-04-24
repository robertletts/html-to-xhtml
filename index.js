#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import process from 'process';
import * as cheerio from 'cheerio';
import * as xmlserializer from 'xmlserializer';
import * as parse5 from 'parse5';

const [INPUT_PATH, OUTPUT_PATH] = process.argv.slice(2);

// Uses cherio to set the `xmlns` attribute on the root element
const $ = cheerio.load(readFileSync(INPUT_PATH, 'utf-8'));
$('html').attr('xmlns', 'http://www.w3.org/1999/xhtml');

// Uses parse5 to serialize the document to XML
const dom = parse5.parse($.html());
let result = xmlserializer.default.serializeToString(dom);

// If -x flag is provided, clean the broken &gt; in the XML
if (process.argv.includes('-x')) {
	result = result.replace(new RegExp('&gt;', 'g'), '>');
}

//  If no output is specified as a command line argument, defaults to overwrite input file
writeFileSync(OUTPUT_PATH ? OUTPUT_PATH : INPUT_PATH, result);
