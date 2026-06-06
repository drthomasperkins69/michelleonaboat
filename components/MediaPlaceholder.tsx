// A styled stand-in shown wherever a real photo or video has not been
// added yet. Swap in real media by setting the `src` on the listing data.

export default function MediaPlaceholder({
  label,
  kind = "photo",
  className = "",
}: {
  label: string;
  kind?: "photo" | "video";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-2 p-4 ${className}`}
      style={{
        backgroundColor: "var(--color-sand)",
        color: "var(--color-navy)",
      }}
    >
      <span className="text-3xl opacity-70" aria-hidden>
        {kind === "video" ? "▶" : "📷"}
      </span>
      <span className="text-sm font-semibold leading-tight">{label}</span>
      <span className="text-xs uppercase tracking-widest text-gray-500">
        {kind === "video" ? "Video coming soon" : "Photo coming soon"}
      </span>
    </div>
  );
}
