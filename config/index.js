import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "babyhat",
  version,
  design: "DocSpencer77",
  code: "DocSpencer77",
  department: "accessories",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {
    fit: ["size"]
  },
  measurements: [],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["box"],
  options: {
    size: { pct: 50, min: 10, max: 100 }
  }
};
