# react-playground

> Common react components, start small and add progressions iteratively. Repeat
> 🔁 (write bad code -> refactor -> Add more functionality)

## Progressions (v1 -> v2 -> ....vn)

### v1

- Component composition at high level
- Component implementation with mock data
- Identify basic external API for the problem (What external APIs should be
  supported if others consume this component/feature)
- Add basic CSS support

### v2

- Refactoring previous versions
  - Better naming things
  - To support New functionalities (Ideally this should be incremental instead
    of rewriting entire components created in previous versions)
  - Identify if the problem could be solved using existing patterns
- Style components
- Support error states
- Think about performance and scaling up use-cases (How does components render
  in case of huge data or DOM ...)
- Think accessibility

. . .

### v(n)

- Add Type safety
- Integrate APIs from Backend if applicable
- Customizability (How can you accommodate with less changes if the consumers of
  this component require variations of this component)
- Follow accessibility practices https://www.w3.org/TR/wai-aria-practices/
- Add animations if required
- How do support analytics and metrics
  ***

## Components

1. Page Tree

2. Tabs
