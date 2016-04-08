# docs-platform

## Ideas

**Static Site Generator**
- basic doc site layout templates and theme

**Pattern Lib Module**
- configurable templates
- menu generated from folder structure
- dep. on theme module

**Component Lib Module**
- framework specific
- provides mechanism to load in working modules/components
- ngDocs/Typescript/flow etc

**Styles Module**
- configure global theme
- css modules?

**Protractor Testing Module**
- Test config modules
- can we reuse component tests or is this a brand new suite?

**Static Pages Module**
- Arbitrary docs

**Ideas**
- components, themes etc could be loaded in as npm dep
- accessibility grading
- versioning of components and themes

**PoC**
- Node static site generator
- Pattern Lib
- Angular components

// Build static component partials into components folder
// Create static site that loads templates
// Dynamically require component modules


1. Build component partials
2. Build static site boilerplate capable of loading partials and creating menu