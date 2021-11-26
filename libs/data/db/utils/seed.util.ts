import { createReadStream } from 'fs';
import { parse } from 'csv-parse';
import { finished } from 'stream/promises';
import { resolve } from 'path';

/* eslint-disable  @typescript-eslint/no-explicit-any */
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

      // eslint-disable-next-line  no-cond-assign
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
function getEscapedValue(value: string): string {
  return !value || value === '\\N' ? null : value;
}

export function escapeNullInt(value: string): number {
  const parsedValue = getEscapedValue(value);

  return parsedValue ? parseInt(parsedValue, 10) : null;
}

export function escapeNullFloat(value: string): number {
  const parsedValue = getEscapedValue(value);

  return parsedValue ? parseFloat(parsedValue) : null;
}

export function escapeNullString(value: string): string {
  return getEscapedValue(value) ?? null;
}
