import {
  elementContains
} from './dom';

const { expect } = chai;

let unattachedSvg = document.createElement('svg');
let unattachedDiv = document.createElement('div');
let parentDiv = document.createElement('div');
let childDiv = document.createElement('div');

parentDiv.appendChild(childDiv);

describe('elementContains', () => {
  it('can find a child', () => {
    expect(elementContains(parentDiv, childDiv)).equals(true);
  });

  it('can return false on an unattached child', () => {
    expect(elementContains(parentDiv, unattachedDiv)).equals(false);
  });

  it('can return false on a null child', () => {
    expect(elementContains(parentDiv, null)).equals(false);
  });

  it('can return false on a null parent', () => {
    expect(elementContains(null, null)).equals(false);
  });

  it ('can return false when parent is an svg', () => {
    expect(elementContains(unattachedSvg, unattachedDiv)).equals(false);
  });
});
