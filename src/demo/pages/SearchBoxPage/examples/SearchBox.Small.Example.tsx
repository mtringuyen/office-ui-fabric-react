import * as React from 'react';
import {
  SearchBox
} from '../../../../index';
import './SearchBox.Small.Example.scss';

export class SearchBoxSmallExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='ms-SearchBoxSmallExample'>
        <SearchBox onChange={
          (newValue) => {
            console.log('Search box value changed to: ' + newValue);
          }
        } />
      </div>
    );
  }

}
