
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/Caracters"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4887, hash: '1925516ab6cc639fa3737003bdca79efe8a5630a623ae73b9e633fbc1459c594', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1003, hash: '55a278851ce33b3676c53205f90376b00ccc86bc4b52026d32e745fd2ffb66cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10016, hash: 'ada7d74d26de0d74d903a74918f0ad221aea8115a1c4f7c368f933b84ae6cdb1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Caracters/index.html': {size: 6098, hash: '53b5c966162420f35fbfdfc8875bda4d160d1135c9116203194f34fa66aa8221', text: () => import('./assets-chunks/Caracters_index_html.mjs').then(m => m.default)},
    'styles-EEF5OI4X.css': {size: 231757, hash: 'LY6vUY1EkzQ', text: () => import('./assets-chunks/styles-EEF5OI4X_css.mjs').then(m => m.default)}
  },
};
