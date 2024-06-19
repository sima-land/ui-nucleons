export function toLocalURL(pathname: string): string {
  return new URL(pathname, new Request(import.meta.env.BASE_URL ?? '/').url).href;
}
