Simple CLI tool to make a HTML file XHTML compliant.
Closes void elements, adds a root XML namespace and formats markup.
Defaults to write mode on input file.

Install:

    npm install html-to-xhtml

Run:

    npx html-to-xhtml INPUT_PATH

Flags:

    -x: parses the document to substite "&gt;" entities for plain ">" characters.
