// VALIDATORS MUST HANDLE UNDEFINED

export const required = value => (value ? undefined : "Required");
export const nonEmpty = value =>
  value && value.trim() ? undefined : "Cannot be empty";

export const isTrimmed = value =>
  !value || value.trim() === value
    ? undefined
    : "Cannot start or end with whitespace";

export const length = length => value => {
  value = value || "";
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};
export const matches = field => (value, allValues) =>
  field in allValues && (value || "").trim() === allValues[field].trim()
    ? undefined
    : "Does not match";

// look up default value pattern

// function(x) {
//   console.log("foo")
//   return 2
// }

// x => 2

// x => {
//   console.log("foo")
//   return 2

// }
