const src =
  'data:image/png;base64,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';
export default src;
