/**
 * Checks if the role is 'developer'.
 *
 * @param {string | undefined} role - The user's role.
 * @returns {boolean} True if the role is 'developer'.
 */
export function isDeveloper(role?: string): boolean {
  return role?.toLowerCase() === "developer";
}

/**
 * Checks if the role is 'superadmin'.
 *
 * @param {string | undefined} role - The user's role.
 * @returns {boolean} True if the role is 'superadmin'.
 */
export function isSuperAdmin(role?: string): boolean {
  return role?.toLowerCase() === "superadmin";
}

/**
 * Checks if the role is 'admin'.
 *
 * @param {string | undefined} role - The user's role.
 * @returns {boolean} True if the role is 'admin'.
 */
export function isAdmin(role?: string): boolean {
  return role?.toLowerCase() === "admin";
}

/**
 * Checks if the role is 'editor'.
 *
 * @param {string | undefined} role - The user's role.
 * @returns {boolean} True if the role is 'editor'.
 */
export function isEditor(role?: string): boolean {
  return role?.toLowerCase() === "editor";
}

/**
 * Checks if the role is either 'admin' or 'developer'.
 *
 * @param {string | undefined} role - The user's role.
 * @returns {boolean} True if the role is 'admin' or 'developer'.
 */
export function isAdminOrDeveloper(role?: string): boolean {
  const lower = role?.toLowerCase();
  return lower === "admin" || lower === "developer";
}

/**
 * Checks if the user has a privileged role (admin, developer, or superadmin).
 *
 * @param {string | undefined} role - The user's role.
 * @returns {boolean} True if the role is 'admin', 'developer', or 'superadmin'.
 */
export function isPrivilegedUser(role?: string): boolean {
  const lower = role?.toLowerCase();
  return lower === "admin" || lower === "developer" || lower === "superadmin";
}

/**
 * Role hierarchy from highest (0) to lowest (3).
 */
const roleHierarchy: Record<string, number> = {
  superadmin: 0,
  developer: 1,
  admin: 2,
  editor: 3,
};

/**
 * Returns numeric level of the given role. Lower means higher privilege.
 *
 * @param {string | undefined} role - The user's role.
 * @returns {number} The role level, or Infinity if unknown.
 */
export function getRoleLevel(role?: string): number {
  return roleHierarchy[role?.toLowerCase() || ""] ?? Infinity;
}

/**
 * Determines if the current user is allowed to delete the target user.
 *
 * @param {string} currentEmail - Email of the user attempting to delete.
 * @param {string} currentRole - Role of the user attempting to delete.
 * @param {string} targetEmail - Email of the target user.
 * @param {string} targetRole - Role of the target user.
 * @returns {boolean} True if deletion is allowed.
 */
export function canDeleteUser(
  currentEmail: string,
  currentRole: string,
  targetEmail: string,
  targetRole: string
): boolean {
  if (currentEmail === targetEmail) return false; // Cannot delete self

  const currentLevel = getRoleLevel(currentRole);
  const targetLevel = getRoleLevel(targetRole);

  return currentLevel < targetLevel; // Only if current is higher in hierarchy
}

/**
 * Checks if the given target email belongs to the current user.
 *
 * @param {string} currentEmail - The logged-in user's email.
 * @param {string} targetEmail - The target email to compare.
 * @returns {boolean} True if both emails match (case-insensitive).
 */
export function isYourself(currentEmail: string, targetEmail: string): boolean {
  return currentEmail.toLowerCase() === targetEmail.toLowerCase();
}
