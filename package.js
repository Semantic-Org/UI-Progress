var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-progress',
  summary : 'Semantic UI - Progress (official): Single component release of progress',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Progress.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
