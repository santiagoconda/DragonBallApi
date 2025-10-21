
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
    'index.csr.html': {size: 4887, hash: '310b01d019813d96150c2a73a26d6f0939545361f42bec890cf5702be972fe18', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1003, hash: '26fea80337e1fa0d4a2436606dd741c9ef2281f3168461961a6a8bf45c2c4669', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10016, hash: 'a8abb42afa6077a016fa4896359db1ce58cdc2d85541578fdf5a2702108528d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Caracters/index.html': {size: 6162, hash: 'bf35fec93afbb1b2e48011b01a947d7e961e17040617f31e1b7eb1513cad0a88', text: () => import('./assets-chunks/Caracters_index_html.mjs').then(m => m.default)},
    'styles-EEF5OI4X.css': {size: 231757, hash: 'LY6vUY1EkzQ', text: () => import('./assets-chunks/styles-EEF5OI4X_css.mjs').then(m => m.default)}
  },
};
