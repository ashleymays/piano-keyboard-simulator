/**
 * Converts a value to a JSON-compatible object.
 *
 * @param {Map} value
 * @returns {object}
 */
export function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries())
    };
  }
  return value;
}
