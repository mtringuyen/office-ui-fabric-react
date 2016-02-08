import * as React from 'react';
import './Dropdown.scss';
import FocusZone from '../../utilities/focus/FocusZone';

export interface IDropdownOption {
  key: string;
  text: string;
  isSelected?: boolean;
}

export interface IDropdownProps {
  label: string;
  options: IDropdownOption[];
  onChange?: (option: IDropdownOption) => void;
}

export interface IDropdownState {
  isOpen: boolean;
  selectedIndex: number;
}

export default class Dropdown extends React.Component<IDropdownProps, any> {
  static defaultProps = {
    options: []
  }

  constructor(props?: IDropdownProps) {
    super(props);

    let selectedIndex = 0;

    for (let i = 0; i < props.options.length; i++) {
      if (props.options[i].isSelected) {
        selectedIndex = i;
        break;
      }
    }

    this.state = {
      isOpen: false,
      selectedIndex: selectedIndex
    };

    this._toggleOpen = this._toggleOpen.bind(this);
  }

  render() {
    let rootClass = 'ms-Dropdown';
    let { label, options } = this.props;
    let { isOpen, selectedIndex } = this.state;
    let selectedOption = options[selectedIndex];

    return (
      <div>
        <span className="ms-Label">{ label }</span>

        <div className={ 'ms-Dropdown' + (isOpen ? ' is-open ' : '') } tabIndex={ 0 } onClick={ this._toggleOpen }>
          <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--caretDown"></i>
          <span className="ms-Dropdown-title">{ selectedOption ? selectedOption.text : '' }</span>
          <FocusZone isEnabled={ isOpen } ref='dropdownZone'>
            <ul className="ms-Dropdown-items">
              { options.map(option => (
              <li className={ 'ms-Dropdown-item' + ((selectedOption === option) ? ' is-selected' : '') } data-is-focusable={ true }>{ option.text }</li>
              )) }
            </ul>
          </FocusZone>
        </div>

      </div>
    );
  }

  private _toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      let { options } = this.props;
      if (this.state.isOpen && options.length) {

        let selectedOption = options[this.state.selectedIndex];

        (this.refs as any).dropdownZone.focus();
      }
    });

  }
}