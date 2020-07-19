import { FilterableSet } from '../src/FilterableSet';

describe('FilterableSet to be compatible with Set', () => {
  let shouldBeAddedValues: any;
  let fSet: FilterableSet; // fSet == filterableSet
  beforeEach(() => {
    fSet = new FilterableSet();
    shouldBeAddedValues = [2, { obj: 1 }, 'string', ['array'], true, new Map()];
  });

  it('creation', () => {
    const filterableSet = new FilterableSet(shouldBeAddedValues);
    expect(filterableSet instanceof Set).toBe(true);
    expect(filterableSet instanceof FilterableSet).toBe(true);
    expect(filterableSet.size).toBe(shouldBeAddedValues.length);
  });

  it('add & values & size property', () => {
    shouldBeAddedValues.forEach((value: any) => {
      fSet.add(value);
    });

    const fSetValues = [...fSet.values()];
    expect(fSetValues).toEqual(shouldBeAddedValues);
    expect(fSet.size).toBe(shouldBeAddedValues.length);
  });

  it('delete & has', () => {
    const fSet2 = new FilterableSet(shouldBeAddedValues);

    shouldBeAddedValues.forEach((value: any) => {
      fSet2.delete(value);
      const hasValue = fSet2.has(value);
      expect(hasValue).toBe(false);
    });

    expect(fSet2.size).toBe(0);
  });

  it('clear', () => {
    const fSet2 = new FilterableSet(shouldBeAddedValues);

    expect(fSet2.size).toBe(shouldBeAddedValues.length);
    fSet2.clear();
    expect(fSet2.size).toBe(0);
    expect(fSet2.has(shouldBeAddedValues[0])).toBe(false);
  });

  it('entries', () => {
    const fSet2 = new FilterableSet(shouldBeAddedValues);

    let arrayIndex = 0;
    for (const [value, sameValue] of fSet2.entries()) {
      expect(value).toBe(shouldBeAddedValues[arrayIndex]);
      expect(sameValue).toBe(value);
      arrayIndex++;
    }
  });

  it('forEach', () => {
    const fSet2 = new FilterableSet(shouldBeAddedValues);

    let arrayIndex = 0;
    fSet2.forEach((value, sameValue, set) => {
      expect(value).toBe(shouldBeAddedValues[arrayIndex]);
      expect(sameValue).toBe(value);
      expect(set).toBe(fSet2);
      arrayIndex++;
    });
  });

  it('Symbol iterator', () => {
    const fSet2 = new FilterableSet(shouldBeAddedValues);

    const iterator = fSet2[Symbol.iterator]();

    let arrayIndex = 0;
    for (let i = 0; i < shouldBeAddedValues.length; i++) {
      const iterValue = iterator.next();
      expect(iterValue.value).toBe(shouldBeAddedValues[arrayIndex]);
      arrayIndex++;
    }
  });
});

describe('FilterableSet feature', () => {
  let fSet: FilterableSet; // fSet == filterableSet
  beforeEach(() => {
    fSet = new FilterableSet();
  });

  it('lockAdd & isAddLocked & unlockAdd', async () => {
    expect(fSet.isAddLocked()).toBe(false);
    fSet.lockAdd();
    expect(fSet.isAddLocked()).toBe(true);
    fSet.add(1);
    // can not add value in fSet
    expect(fSet.size).toBe(0);

    fSet.unlockAdd();
    expect(fSet.isAddLocked()).toBe(false);
    fSet.add(1);
    expect(fSet.has(1)).toBe(true);
  });

  it('lockDelete & isDeleteLocked & unlockDelete', () => {
    const sampleValue = 1;
    // initialize set
    fSet.add(sampleValue);
    expect(fSet.has(sampleValue)).toBe(true);

    // lock delete and check
    expect(fSet.isDeleteLocked()).toBe(false);
    fSet.lockDelete();
    expect(fSet.isDeleteLocked()).toBe(true);

    // test delete failure
    fSet.delete(sampleValue);
    expect(fSet.has(sampleValue)).toBe(true);

    // unlock delete and check
    fSet.unlockDelete();
    expect(fSet.isDeleteLocked()).toBe(false);

    // test delete success
    fSet.delete(sampleValue);
    // Delete success
    expect(fSet.has(sampleValue)).toBe(false);
  });

  it('lockAll & unlockAll & isAllLocked', () => {
    const existValue = 'exists value';
    fSet.add(existValue);
    expect(fSet.has(existValue)).toBe(true);

    fSet.lockAll();
    expect(fSet.isAllLocked()).toBe(true);

    const sampleValue = 1;
    fSet.add(sampleValue);
    expect(fSet.has(sampleValue)).toBe(false);

    expect(fSet.delete(existValue)).toBe(false);
    expect(fSet.has(existValue)).toBe(true);

    fSet.unlockAll();

    fSet.add(sampleValue);
    expect(fSet.has(sampleValue)).toBe(true);
    expect(fSet.delete(existValue)).toBe(true);
    expect(fSet.has(existValue)).toBe(false);
  });

  it('addAddFilter & resetAddFilters & add & clear', () => {
    const addFilter = (value: any) => typeof value === 'number';

    const stringValue = 'string value';
    const numberValue = 100;
    fSet.addAddFilter(addFilter);
    fSet.add(stringValue);
    fSet.add(numberValue);

    expect(fSet.has(stringValue)).toBe(false);
    expect(fSet.has(numberValue)).toBe(true);

    fSet.clear();
    fSet.resetAddFilters();

    const bigNumberValue = 2020;
    const addFilters = [
      (value: any) => typeof value === 'number',
      (value: any) => value >= bigNumberValue
    ];
    fSet.addAddFilter(...addFilters);
    fSet.add(stringValue);
    fSet.add(numberValue);
    fSet.add(bigNumberValue);

    expect(fSet.has(stringValue)).toBe(false);
    expect(fSet.has(numberValue)).toBe(false);
    expect(fSet.has(bigNumberValue)).toBe(true);
  });

  it('deleteAddFilter', () => {
    const addFilter1 = (value: any) => typeof value === 'number';
    const bigNumberValue = 2020;
    const addFilter2 = (value: any) => value >= bigNumberValue;

    const testValue = 1010;

    fSet.addAddFilter(addFilter1, addFilter2);
    fSet.add(testValue);
    expect(fSet.has(testValue)).toBe(false);

    fSet.deleteAddFilter(addFilter2);
    fSet.add(testValue);
    expect(fSet.has(testValue)).toBe(true);
  });

  it('addDeleteFilter & resetDeleteFilters & add & clear', () => {
    const numberValue = 1;
    const stringValue = 'iam string';


    fSet.add(numberValue);
    fSet.add(stringValue);
    expect(fSet.size).toBe(2);

    const deleteFilter = (value: any) => typeof value === 'number';

    fSet.addDeleteFilter(deleteFilter);
    fSet.delete(stringValue);
    fSet.delete(numberValue);

    expect(fSet.has(stringValue)).toBe(true);
    expect(fSet.has(numberValue)).toBe(false);

    fSet.clear();
    fSet.resetDeleteFilters();
    expect(fSet.size).toBe(0);

    const bigNumberValue = 2020;
    fSet.add(numberValue);
    fSet.add(stringValue);
    fSet.add(bigNumberValue);
    expect(fSet.size).toBe(3);

    const deleteFilters = [
      (value: any) => typeof value === 'number',
      (value: any) => value >= bigNumberValue
    ];
    fSet.addDeleteFilter(...deleteFilters);
    fSet.delete(stringValue);
    fSet.delete(numberValue);
    fSet.delete(bigNumberValue);

    expect(fSet.has(stringValue)).toBe(true);
    expect(fSet.has(numberValue)).toBe(true);
    expect(fSet.has(bigNumberValue)).toBe(false);
  });

  it('deleteDeleteFilter', () => {
    const existValue = 1010;
    fSet.add(existValue);
    expect(fSet.has(existValue)).toBe(true);


    const deleteFilter1 = (value: any) => typeof value === 'number';
    const bigNumberValue = 2020;
    const deleteFilter2 = (value: any) => value >= bigNumberValue;


    fSet.addDeleteFilter(deleteFilter1, deleteFilter2);
    fSet.delete(existValue);
    expect(fSet.has(existValue)).toBe(true);

    fSet.deleteDeleteFilter(deleteFilter2);
    fSet.delete(existValue);
    expect(fSet.has(existValue)).toBe(false);
  });

  it('addForce & deleteForce', () => {
    const existsValue = 100;
    fSet.add(existsValue);
    expect(fSet.has(existsValue)).toBe(true);

    const addFilter = (value: any) => typeof value !== 'number';
    const deleteFilter = (value: any) => typeof value !== 'number';

    fSet.addAddFilter(addFilter);
    fSet.addDeleteFilter(deleteFilter);

    const testValue = 3030;
    fSet.add(testValue);
    expect(fSet.has(testValue)).toBe(false);
    fSet.delete(existsValue);
    expect(fSet.has(existsValue)).toBe(true);

    fSet.addForce(testValue);
    expect(fSet.has(testValue)).toBe(true);
    fSet.deleteForce(existsValue);
    expect(fSet.has(existsValue)).toBe(false);
  });

  it('resetFilters', () => {
    const existsStringValue = 'already exists string';
    fSet.add(existsStringValue);
    expect(fSet.size).toBe(1);

    fSet.addAddFilter((value: any) => typeof value === 'number');
    fSet.addDeleteFilter((value: any) => typeof value === 'number');


    const numberValue = 2020;
    const stringValue = 'any string';
    fSet.add(numberValue);
    fSet.add(stringValue);
    expect(fSet.has(existsStringValue)).toBe(true);
    expect(fSet.has(numberValue)).toBe(true);
    expect(fSet.has(stringValue)).toBe(false);

    // reset addFilters and deleteFilters all.
    fSet.resetFilters();
    fSet.add(stringValue);
    expect(fSet.has(stringValue)).toBe(true);
    fSet.delete(stringValue);
    expect(fSet.has(stringValue)).toBe(false);
  });
});
