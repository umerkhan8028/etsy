import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'backgroundColor': 'rgb(243, 243, 243)'
  },
  'header': {
    'backgroundColor': 'rgb(255, 255, 255)',
    // position: fixed;
    'zIndex': '-100',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'box': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-evenly',
    'flexWrap': 'wrap',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'position': 'sticky',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'a': {
    'textDecoration': 'none',
    'color': 'rgba(0, 0, 0, 0.747)',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }]
  },
  'categaries': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexWrap': 'wrap'
  },
  'categaries search': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexWrap': 'wrap'
  },
  'search': {
    'width': [{ 'unit': 'vw', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '15px',
    'flexWrap': 'wrap'
  },
  'heart': {
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'nav': {
    'display': 'flex',
    'alignItems': 'center',
    'flexWrap': 'wrap'
  },
  'card': {
    'display': 'flex',
    'flexWrap': 'wrap'
  },
  'box1': {
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-evenly',
    'textDecoration': 'none',
    'color': 'rgba(0, 0, 0, 0.699)',
    'wordSpacing': '3px',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  // main
  'main-container': {
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'paddingRight': [{ 'unit': 'px', 'value': 20 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-around',
    'flexWrap': 'wrap'
  },
  'h1': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexWrap': 'wrap',
    'color': 'rgba(54, 52, 52, 0.945)',
    'fontWeight': '520'
  },
  'img1': {
    'marginTop': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 350 }],
    'height': [{ 'unit': 'px', 'value': 300 }]
  },
  'img2': {
    'width': [{ 'unit': 'px', 'value': 350 }],
    'height': [{ 'unit': 'px', 'value': 250 }]
  },
  'span': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'display': 'block'
  }
});
