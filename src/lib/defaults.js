import _ptrMarkup from './markup';
import _ptrStyles from './styles';

export default {
  distThreshold: 60,
  distMax: 80,
  distReload: 50,
  distIgnore: 0,
  mainElement: 'body',
  triggerElement: 'body',
  ptrElement: '.ptr',
  classPrefix: 'ptr--',
  cssProp: 'min-height',
  iconArrow: '&#8675;',
  iconRefreshing: '&hellip;',
  instructionsPullToRefresh: document.querySelector('meta[name="ptr-pull-down"]').content,
  instructionsReleaseToRefresh: document.querySelector('meta[name="ptr-release"]').content,
  instructionsRefreshing: document.querySelector('meta[name="ptr-refreshing"]').content,
  refreshTimeout: 500,
  getMarkup: () => _ptrMarkup,
  getStyles: () => _ptrStyles,
  onInit: () => {},
  onRefresh: () => location.reload(),
  resistanceFunction: t => Math.min(1, t / 2.5),
  shouldPullToRefresh: () => !window.scrollY,
};
