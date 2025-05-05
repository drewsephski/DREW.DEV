# Documentation

This directory contains documentation for the UI component library.

## Knowledge Graph

The [component-knowledge-graph.md](./component-knowledge-graph.md) file serves as a living document that maps the structure, components, and relationships within the codebase. It provides a comprehensive overview of the system architecture.

### Purpose

- Document all components and their relationships
- Provide a reference for developers
- Track changes and evolution of the component library
- Facilitate onboarding of new team members

### Maintaining the Knowledge Graph

The knowledge graph should be updated whenever new components are added or existing components are modified. To help with this process, we've created a script that checks for undocumented components:

```bash
npm run docs:kg
```

This script will:
1. Scan the codebase for components
2. Compare them with the documented components
3. List any undocumented or obsolete components
4. Offer to open the knowledge graph document for editing

### Guidelines for Updating

When adding a new component or modifying an existing one, please update the knowledge graph document as follows:

1. **New Component**: 
   - Add it to the appropriate category table
   - Document its props and location
   - Add any relationships with other components

2. **Modified Component**:
   - Update its description, props, or location as needed
   - Update any relationships that have changed

3. **New Category**:
   - Add a new section for the category
   - Create a table for components in that category

4. **New Page**:
   - Add it to the Pages table
   - Document which components it uses

Remember that this document is a living knowledge graph that should evolve with the codebase.
