
Package.describe({
  name    : 'semantic:ui-progress',
  summary : 'Semantic UI - Progress: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Progress.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'progress.css',
    'progress.js'
  ], 'client');
});
