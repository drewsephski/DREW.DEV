#!/usr/bin/env node

/**
 * This script helps maintain the component knowledge graph documentation.
 * It scans the codebase for components and compares them with the documented ones.
 * 
 * Usage:
 * node scripts/update-knowledge-graph.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DOCS_PATH = path.join(__dirname, '..', 'docs', 'component-knowledge-graph.md');
const COMPONENTS_PATH = path.join(__dirname, '..', 'src', 'components');
const UI_COMPONENTS_PATH = path.join(__dirname, '..', 'src', 'components', 'ui');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

/**
 * Main function
 */
async function main() {
  console.log(`${colors.bright}${colors.blue}Component Knowledge Graph Maintenance Tool${colors.reset}\n`);
  
  // Check if the knowledge graph document exists
  if (!fs.existsSync(DOCS_PATH)) {
    console.error(`${colors.red}Error: Knowledge graph document not found at ${DOCS_PATH}${colors.reset}`);
    process.exit(1);
  }
  
  // Read the knowledge graph document
  const docContent = fs.readFileSync(DOCS_PATH, 'utf8');
  
  // Extract documented components
  const documentedComponents = extractDocumentedComponents(docContent);
  console.log(`${colors.green}Found ${documentedComponents.size} documented components${colors.reset}`);
  
  // Scan the codebase for components
  const actualComponents = await scanForComponents();
  console.log(`${colors.green}Found ${actualComponents.size} components in the codebase${colors.reset}`);
  
  // Find undocumented components
  const undocumentedComponents = new Set(
    [...actualComponents].filter(component => !documentedComponents.has(component))
  );
  
  // Find documented components that no longer exist
  const obsoleteComponents = new Set(
    [...documentedComponents].filter(component => !actualComponents.has(component))
  );
  
  // Display results
  if (undocumentedComponents.size === 0 && obsoleteComponents.size === 0) {
    console.log(`${colors.green}✓ Knowledge graph is up to date!${colors.reset}`);
  } else {
    if (undocumentedComponents.size > 0) {
      console.log(`\n${colors.yellow}Undocumented components:${colors.reset}`);
      [...undocumentedComponents].sort().forEach(component => {
        console.log(`  - ${component}`);
      });
      console.log(`\nPlease add these components to the knowledge graph document at:\n${DOCS_PATH}`);
    }
    
    if (obsoleteComponents.size > 0) {
      console.log(`\n${colors.yellow}Obsolete components (documented but not found in codebase):${colors.reset}`);
      [...obsoleteComponents].sort().forEach(component => {
        console.log(`  - ${component}`);
      });
      console.log(`\nPlease remove these components from the knowledge graph document or update their paths.`);
    }
    
    // Prompt for update
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    const answer = await new Promise(resolve => {
      rl.question(`\n${colors.cyan}Would you like to open the knowledge graph document now? (y/n) ${colors.reset}`, resolve);
    });
    
    rl.close();
    
    if (answer.toLowerCase() === 'y') {
      const command = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
      require('child_process').exec(`${command} "${DOCS_PATH}"`);
    }
  }
}

/**
 * Extract documented components from the knowledge graph document
 */
function extractDocumentedComponents(docContent) {
  const componentRegex = /\| ([A-Za-z0-9]+) \| .* \| .* \| `(.*?)` \|/g;
  const components = new Set();
  
  let match;
  while ((match = componentRegex.exec(docContent)) !== null) {
    const componentName = match[1];
    components.add(componentName);
  }
  
  return components;
}

/**
 * Scan the codebase for components
 */
async function scanForComponents() {
  const components = new Set();
  
  // Helper function to scan a directory recursively
  async function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await scanDir(fullPath);
      } else if (entry.isFile() && /\.(tsx|jsx)$/.test(entry.name)) {
        // Read the file and look for component definitions
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Look for export declarations
        const exportRegex = /export\s+(const|function|default function|class)\s+([A-Za-z0-9]+)/g;
        let match;
        while ((match = exportRegex.exec(content)) !== null) {
          const componentName = match[2];
          components.add(componentName);
        }
        
        // Look for React.forwardRef components
        const forwardRefRegex = /export\s+const\s+([A-Za-z0-9]+)\s+=\s+React\.forwardRef/g;
        while ((match = forwardRefRegex.exec(content)) !== null) {
          const componentName = match[1];
          components.add(componentName);
        }
      }
    }
  }
  
  // Scan the components directories
  await scanDir(COMPONENTS_PATH);
  
  return components;
}

// Run the main function
main().catch(error => {
  console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
  process.exit(1);
});
