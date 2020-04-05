const fs = require('fs');
const parse = require('csv-parse/lib/sync');

function loadData(file) {
  const data = fs.readFileSync(file, 'utf8');

  return parse(data, {
    columns: true,
    skip_empty_lines: true,
  });
}

function handleEscapedNulls(value) {
  if (value === '\\N' || value === '') return null;

  return value;
}

module.exports = { loadData, handleEscapedNulls };
