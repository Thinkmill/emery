type MaybeClassname = string | false | null | undefined;
export function joinClasses(classes: MaybeClassname[]) {
  return classes.filter(Boolean).join(' ');
}
