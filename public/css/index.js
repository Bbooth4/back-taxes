import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': 'white'
  },
  'posts': {
    'height': [{ 'unit': 'px', 'value': 400 }],
    'overflow': 'auto',
    'zIndex': '100'
  },
  'right': {
    'float': 'right'
  },
  'display': {
    'display': 'flex !important'
  },
  'nav': {
    'position': 'fixed',
    'zIndex': '100'
  },
  'nav brand-logo': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': 0.5 }],
    'transition': '300ms'
  },
  'nav nav-wrapper ul li dropdown-button': {
    // position: relative;
    'top': [{ 'unit': 'px', 'value': -10 }]
  },
  'iconRow': {
    'position': 'relative',
    'top': [{ 'unit': 'vh', 'value': 8 }]
  },
  'dropdown-content li > a': {
    'color': '#1565c0 !important'
  },
  'dropdown-content li > a:hover': {
    'backgroundColor': '#bbdefb !important'
  },
  'side-nav li > a:hover': {
    'backgroundColor': '#bbdefb !important'
  },
  'side-nav collapsible-header:hover': {
    'backgroundColor': '#bbdefb !important'
  },
  'add-new-article': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'logout': {
  },
  'nav div t1': {
    'visibility': 'visible',
    'transition': '300ms',
    '<w500': {
      'visibility': 'hidden',
      'transition': '300ms'
    }
  },
  'nav div t2': {
    'visibility': 'hidden',
    'transition': '300ms'
  },
  'sliderRow': {
    'position': 'relative',
    'top': [{ 'unit': 'em', 'value': 9 }],
    'transition': '300ms'
  },
  // @media (max-width: 768) {
  .sliderRow {
    top: 18vh;
    transition: 300ms;
  }
}
});
