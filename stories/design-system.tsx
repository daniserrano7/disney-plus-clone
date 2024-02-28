export const DesignSystem = () => {
  return (
    <div className="p-4 space-y-2">
      <h1 className="font-h1">Colors</h1>
      <h2>Font</h2>
      <div className="flex items-center gap-3">
        <div className="bg-font w-16 h-12 rounded-md border-2 border-white" />
        <p>font</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-font-subtle w-16 h-12 rounded-md border-2 border-white" />
        <p>font-subtle</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-font-contrast w-16 h-12 rounded-md border-2 border-white" />
        <p>font-contrast</p>
      </div>
      <h2>Elevation</h2>
      <div className="flex items-center gap-3">
        <div className="bg-elevation-surface w-16 h-12 rounded-md border-2 border-white" />
        <p>elevation-surface</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-elevation-overlay w-16 h-12 rounded-md border-2 border-white" />
        <p>elevation-overlay</p>
      </div>
      <h2>Background</h2>
      <div className="flex items-center gap-3">
        <div className="bg-background-neutral w-16 h-12 rounded-md border-2 border-white" />
        <p>background-neutral</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-background-neutral-hovered w-16 h-12 rounded-md border-2 border-white" />
        <p>background-neutral-hovered</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-background-neutral-pressed w-16 h-12 rounded-md border-2 border-white" />
        <p>background-neutral-pressed</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-background-interaction w-16 h-12 rounded-md border-2 border-white" />
        <p>background-interaction</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-background-interaction-hovered w-16 h-12 rounded-md border-2 border-white" />
        <p>background-interaction-hovered</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-background-interaction-pressed w-16 h-12 rounded-md border-2 border-white" />
        <p>background-interaction-pressed</p>
      </div>
      <h2>Border</h2>
      <div className="flex items-center gap-3">
        <div className="bg-border w-16 h-12 rounded-md border-2 border-white" />
        <p>border</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-border-subtle w-16 h-12 rounded-md border-2 border-white" />
        <p>border-subtle</p>
      </div>
    </div>
  );
};
