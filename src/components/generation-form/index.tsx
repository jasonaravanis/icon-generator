import { useState, type FormEvent } from "react";

const models = ["dalle-2", "dalle-3"] as const;

type Model = (typeof models)[number];

const renderStyles = [
  "cartoonish",
  "chalkboard",
  "clay",
  "doodle",
  "flat",
  "gradient",
  "grunge",
  "hand-drawn",
  "illustrated",
  "isometric",
  "line-art",
  "metallic",
  "minimalistic",
  "mosaic",
  "neon",
  "origami",
  "pixelated",
  "polygon",
  "pop-art",
  "realistic",
  "sticker",
  "watercolor",
  "woodcut",
  "3D",
] as const;

type RenderStyle = (typeof renderStyles)[number];

type FormState = {
  prompt: string;
  model: Model;
  renderStyle: RenderStyle | null;
  quantity: number;
};

export const GenerationForm = () => {
  const [form, setForm] = useState<FormState>({
    prompt: "",
    model: "dalle-3",
    renderStyle: null,
    quantity: 1,
  });
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("FORM", form);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Describe your design
        <input
          type="text"
          name="prompt"
          value={form.prompt}
          onChange={(e) => setForm({ ...form, prompt: e.target.value })}
          required
        />
      </label>
      <fieldset>
        <legend>Select your model</legend>
        {models.map((model) => (
          <label key={model}>
            {model.toUpperCase()}
            <input
              required
              type="radio"
              name="model"
              value={model}
              checked={form.model === model}
              onChange={(e) =>
                setForm({ ...form, model: e.target.value as Model })
              }
            />
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Select your style</legend>
        {renderStyles.map((renderStyle) => (
          <label key={renderStyle}>
            {renderStyle}
            <input
              required
              type="radio"
              name="style"
              value={renderStyle}
              checked={form.renderStyle === renderStyle}
              onChange={(e) =>
                setForm({ ...form, renderStyle: e.target.value as RenderStyle })
              }
            />
          </label>
        ))}
      </fieldset>
      <label>
        How many designs would you like to create?
        <input
          required
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: e.target.valueAsNumber })
          }
        />
      </label>
      <button type="submit">Generate</button>
    </form>
  );
};
