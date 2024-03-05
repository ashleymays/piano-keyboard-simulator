/**
 * Converts a stringified value to its original format.
 *
 * @param {*} key
 * @param {*} value
 * @returns {*}
 */
export function reviver(key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}
