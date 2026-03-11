const LINK_ICONS = {
  play: { icon: 'assets/icons/play_store.png', label: 'Google Play' },
  appstore: { icon: 'assets/icons/apple_store.png', label: 'App Store' },
  web: { icon: 'assets/icons/website.png', label: 'Website' }
};

function buildStoreLink(link) {
  var cfg = LINK_ICONS[link.type];
  if (!cfg) return '';
  return '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer" class="store-btn">' +
    '<img src="' + cfg.icon + '" alt="" class="icon-store" width="24" height="24">' +
    '<span>' + cfg.label + '</span>' +
    '</a>';
}

function buildSkillChips(items) {
  return items.map(function(item) {
    return '<span class="skill-chip">' + item + '</span>';
  }).join('\n');
}

function renderSkills(containerId, lang) {
  var el = document.getElementById(containerId);
  if (!el) return;

  var groups = portfolioData.skills.map(function(group) {
    return '<div>' +
      '<p class="font-mono text-xs text-muted mb-2.5">' + group.category[lang] + '</p>' +
      '<div class="flex flex-wrap gap-2">' + buildSkillChips(group.items) + '</div>' +
      '</div>';
  }).join('\n');

  el.innerHTML =
    '<div class="rounded-xl border border-default bg-surface p-5 md:p-6">' +
    '<div class="space-y-5">' + groups + '</div>' +
    '</div>';
}

function renderExperience(containerId, lang) {
  var el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = portfolioData.experience.map(function(job) {
    var items = job.descriptions.map(function(d) {
      return '<li>' + d[lang] + '</li>';
    }).join('\n');

    return '<article class="rounded-xl border border-default bg-surface p-5 md:p-6 card-hover transition-all duration-200">' +
      '<div class="flex flex-wrap items-baseline gap-2 mb-2">' +
      '<span class="font-heading font-semibold">' + job.title[lang] + '</span>' +
      '<span class="text-muted">·</span>' +
      '<span class="text-muted text-sm">' + job.company[lang] + '</span>' +
      '</div>' +
      '<p class="font-mono text-xs text-muted mb-4">' + job.date[lang] + '</p>' +
      '<ul class="text-sm text-muted space-y-2 list-disc list-inside pl-1">' + items + '</ul>' +
      '</article>';
  }).join('\n');
}

function renderContributedProjects(containerId, lang) {
  var el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = portfolioData.contributedProjects.map(function(proj) {
    var linksHtml = '';

    if (proj.subApps) {
      var cols = Math.min(proj.subApps.length, 3);
      var apps = proj.subApps.map(function(app) {
        var appLinks = app.links.map(buildStoreLink).join('\n');
        return '<div class="flex flex-col gap-2">' +
          '<span class="font-mono text-xs text-muted font-medium">' + app.name + '</span>' +
          '<div class="store-links">' + appLinks + '</div>' +
          '</div>';
      }).join('\n');
      linksHtml = '<div class="grid grid-cols-1 sm:grid-cols-' + cols + ' gap-4">' + apps + '</div>';
    } else if (proj.links && proj.links.length) {
      linksHtml = '<div class="store-links">' + proj.links.map(buildStoreLink).join('\n') + '</div>';
    }

    return '<div class="rounded-xl border border-default bg-surface p-5 md:p-6 card-hover transition-all duration-200">' +
      '<h3 class="font-heading font-semibold text-lg mb-2">' + proj.title[lang] + '</h3>' +
      '<p class="text-sm text-muted mb-3">' + proj.role[lang] + '</p>' +
      '<div class="flex flex-wrap gap-2 mb-4">' + buildSkillChips(proj.tech) + '</div>' +
      linksHtml +
      '</div>';
  }).join('\n');
}

function renderPersonalProjects(containerId, lang) {
  var el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = portfolioData.personalProjects.map(function(proj) {
    var linksHtml = (proj.links && proj.links.length)
      ? '<div class="store-links">' + proj.links.map(buildStoreLink).join('\n') + '</div>'
      : '';

    var descHtml = proj.description
      ? '<p class="text-sm text-muted mb-2">' + proj.description[lang] + '</p>'
      : '';

    var techHtml = (proj.tech && proj.tech.length)
      ? '<div class="flex flex-wrap gap-2">' + buildSkillChips(proj.tech) + '</div>'
      : '';

    var hasExtra = proj.description || (proj.tech && proj.tech.length);

    return '<div class="rounded-xl border border-default bg-surface p-5 md:p-6 card-hover transition-all duration-200">' +
      '<div class="flex flex-wrap items-center justify-between gap-4' + (hasExtra ? ' mb-2' : '') + '">' +
      '<h3 class="font-heading font-semibold text-lg">' + proj.title[lang] + '</h3>' +
      linksHtml +
      '</div>' +
      descHtml +
      techHtml +
      '</div>';
  }).join('\n');
}

function renderAll(lang) {
  renderSkills('skills-container', lang);
  renderExperience('experience-container', lang);
  renderContributedProjects('contributed-projects-container', lang);
  renderPersonalProjects('personal-projects-container', lang);
}
