module.exports = (schema, obj) => {
  // Checks if all the fields from the schema are present
  const allFieldsPresent = Object.keys(schema).every((key, index) =>
    Object.prototype.hasOwnProperty.call(obj, Object.keys(schema)[index]),
  );

  // Checks if all the fields have the correct type
  const hasCorrectTypes = Object.keys(obj).every((key) => {
    // If type definition is array or object validate type with constructor name
    // typeof array & object is both 'object'
    if (schema[key] === 'array' || 'object') {
      return schema[key] === obj[key].constructor.name.toLowerCase();
    }
    return typeof obj[key] === schema[key];
  });

  // If both checks succeded return true
  return allFieldsPresent && hasCorrectTypes;
};
