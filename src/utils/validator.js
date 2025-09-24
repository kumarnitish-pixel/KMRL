const validator =require("validator");

const validateRegister = (data) => {
  const errors = [];

  // Validate uniqueId
  if (!data.uniqueId || typeof data.uniqueId !== "string") {
    errors.push("Unique ID is required and must be a string");
  } else if (!/^[a-zA-Z0-9]+$/.test(data.uniqueId)) {
    errors.push("Unique ID must be alphanumeric");
  } else if (data.uniqueId.length < 4) {
    errors.push("Unique ID must be at least 4 characters");
  }

  // Validate password
  if (!data.password || typeof data.password !== "string") {
    errors.push("Password is required and must be a string");
  } else if (data.password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  // Validate role
  const roles = ["head", "dept1", "dept2", "dept3", "dept4"];
  if (!data.role || !roles.includes(data.role)) {
    errors.push("Role is required and must be one of: " + roles.join(", "));
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

module.exports = validateRegister;
