import React from 'react';
// import { ThemeContext } from './App';
import { ThemeContext } from './ThemeContext';

export class ClassContextComponent extends React.Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#CCC',
      color: dark ? '#CCC' : '#333',
      padding: '2rem',
      margin: '2rem',
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class The</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
