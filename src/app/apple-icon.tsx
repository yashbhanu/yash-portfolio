import { renderMark } from "@/lib/mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so the tile stays square.
export default function AppleIcon() {
  return renderMark(size.width, { rounded: false });
}
