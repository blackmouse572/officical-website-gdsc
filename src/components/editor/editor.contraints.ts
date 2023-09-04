const SAVE_OPTIONS = {
  save: {
    label: 'Save',
    description: 'Save the blog as a draft',
  },
  publish: {
    label: 'Publish',
    description: 'Save and publish the blog',
  },
  discard: {
    label: 'Discard',
    description: 'Discard all the changes',
  },
};
type SaveOption = keyof typeof SAVE_OPTIONS;

const SAVE_OPTIONS_KEYS = new Set(Object.keys(SAVE_OPTIONS));
const DEFAULT_SAVE_OPTION = SAVE_OPTIONS_KEYS.has('save') ? 'save' : SAVE_OPTIONS_KEYS.values().next().value;
const SAVE_OPTION_LABELS = Object.fromEntries(Object.entries(SAVE_OPTIONS).map(([key, value]) => [key, value.label]));
const SAVE_OPTION_DESCRIPTIONS = Object.fromEntries(
  Object.entries(SAVE_OPTIONS).map(([key, value]) => [key, value.description])
);
export {
  DEFAULT_SAVE_OPTION,
  SAVE_OPTIONS,
  SAVE_OPTIONS_KEYS,
  SAVE_OPTION_DESCRIPTIONS,
  SAVE_OPTION_LABELS,
  type SaveOption,
};
