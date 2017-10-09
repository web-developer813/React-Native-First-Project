import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default class PopMenu extends Component {
  static propTypes = {
    onFirstSelect: PropTypes.func,
  }

  static defaultProps = {
    onFirstSelect: null,
  }

  render() {
    return (
      <Menu name="menu1">
        <MenuTrigger />
        <MenuOptions>
          <MenuOption onSelect={ () => this.props.onFirstSelect('SecondSelect')}  text="Section 2" />
          <MenuOption onSelect={ () => this.props.onFirstSelect('ThirdSelect')} text="Section 3" />
          <MenuOption onSelect={() => this.props.onFirstSelect('FourthSelect')}   text="Section 4" />
          <MenuOption onSelect={() => this.props.onFirstSelect('FifthSelect') } text="Section 5" />
          <MenuOption onSelect={() => this.props.onFirstSelect('SixthSelect') } text="Section 6" />
          <MenuOption onSelect={() => this.props.onFirstSelect('SeventhSelect') } text="Section 7" />
          <MenuOption onSelect={() => this.props.onFirstSelect('EighthSelect') } text="Section 8" />
          <MenuOption onSelect={() => this.props.onFirstSelect('NinthSelect') } text="Section 9" />
          <MenuOption onSelect={() => this.props.onFirstSelect('TenthSelect') } text="Section 10" />
          <MenuOption onSelect={() => this.props.onFirstSelect('EleventhSelect') } text="Section 11" />
          <MenuOption onSelect={() => this.props.onFirstSelect('TwelfthSelect') } text="Section 12" />
          <MenuOption onSelect={() => this.props.onFirstSelect('ReportProblem') } text="Report Problem" />
        </MenuOptions>
      </Menu>
    );
  }
}
