function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};

  if (!manifest || !manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!manifest || !manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!manifest || !manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!manifest || !manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!manifest || !manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  const isValid = Object.keys(errors).length === 0;

  if (isValid) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest ? manifest.containerId : undefined}`);
    console.log(errors);
  }
}