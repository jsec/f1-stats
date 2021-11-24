import { createReadStream } from 'fs';
import { parse } from 'csv-parse';
import { finished } from 'stream/promises';
import { resolve } from 'path';

export async function loadData(
  filename: string,
  callback: (records: any[]) => any[]
): Promise<any[]> {
  const processFile = async () => {
    const records = [];
    const path = resolve('../../data', filename);

    const parser = createReadStream(path).pipe(
      parse({
        columns: true
      })
    );

    parser.on('readable', () => {
      let record: any;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
    });

    await finished(parser);
    return callback(records);
  };

  const records = await processFile();
  return records;
}

// CSV files that serve as the data source include '\\N', for null values.
// This function turns them back into nulls.
export function handleEscapedNulls(
  value: string,
  isNumber: boolean
): string | number {
  const parsedValue = !value || value === '\\N' ? null : value;

  if (isNumber) return parsedValue ? parseInt(parsedValue, 10) : null;

  return parsedValue;
}
