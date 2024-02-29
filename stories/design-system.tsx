export const DesignSystem = () => {
  return (
    <div className="space-y-3 p-4">
      <h1 className="font-h1">Colors</h1>
      <h2 className="font-h2 !mb-4">Font</h2>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-font" />
        <p>font</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-font-subtle" />
        <p>font-subtle</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-font-contrast" />
        <p>font-contrast</p>
      </div>
      <h2 className="font-h2 !mb-4 !mt-8">Elevation</h2>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-elevation-surface" />
        <p>elevation-surface</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-elevation-overlay" />
        <p>elevation-overlay</p>
      </div>
      <h2 className="font-h2 !mb-4 !mt-8">Background</h2>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-background-neutral" />
        <p>background-neutral</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-background-neutral-hovered" />
        <p>background-neutral-hovered</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-background-neutral-pressed" />
        <p>background-neutral-pressed</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-background-interaction" />
        <p>background-interaction</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-background-interaction-hovered" />
        <p>background-interaction-hovered</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-background-interaction-pressed" />
        <p>background-interaction-pressed</p>
      </div>
      <h2 className="font-h2 !mb-4 !mt-8">Border</h2>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-border" />
        <p>border</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-white h-12 w-16 rounded-lg border-2 bg-border-subtle" />
        <p>border-subtle</p>
      </div>
      <h1 className="font-h1 !mt-8">Fonts</h1>
      <h1 className="font-h1 !mb-2">Heading 1</h1>
      <h2 className="font-h2">Heading 2</h2>
      <p className="font-primary">Primary</p>
      <p className="font-bold">Bold</p>
    </div>
  );
};
