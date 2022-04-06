#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import process from "process";
import * as cheerio from "cheerio";
import * as xmlserializer from "xmlserializer";
import * as parse5 from "parse5";

const [ INPUT_PATH, OUTPUT_PATH ] = process.argv.slice(2);

const $ = cheerio.load(readFileSync(INPUT_PATH, 'utf-8'));
$('html').attr('xmlns', 'http://www.w3.org/1999/xhtml');

const dom = parse5.parse($.html());
const result = xmlserializer.default.serializeToString(dom);

writeFileSync(OUTPUT_PATH, result);
