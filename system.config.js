System.config({
  "defaultJSExtensions": true,
  "transpiler": "traceur",
  "paths": {
    "github:*": "jspm_packages/github/*"
  },
  "packages": {
    "app": {
      "map": {
        "./template.html": "./../override/override.html"
      }
    }
  }
});

System.config({
  "map": {
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.90",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90"
  }
});

