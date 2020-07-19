# filterable-set 
[![Build Status](https://travis-ci.org/cshyeon/filterable-set.svg?branch=master)](https://travis-ci.org/cshyeon/filterable-set)
[![codecov](https://codecov.io/gh/cshyeon/filterable-set/branch/master/graph/badge.svg)](https://codecov.io/gh/cshyeon/filterable-set)

> ***filterable-set*** is a Set that adds a filter function to entering and leaving to Set.


## How to use
```javascript
/* FilterableSet is compatible with 'Set' */
import { FilterableSet as FSet } from ('filterable-set'); // es6
// const { FilterableSet } = require('filterable-set'); // es5

const fSet = new FSet();
fSet.add(1);
// fSet: {1}, fSet.has(1) == true, fSet.size == 1

// Apply my filters can be added only string value
// Can be deleted only non-string value
const addFilter = (value) => typeof value === 'string';
const deleteFilter = (value) => typeof value !== 'string';

fSet.addAddFilter(addFilter);
fSet.addDeleteFilter(deleteFilter);

// can not add 2
fSet.add(2);
fSet.add('string value');
// fSet: {1, 'string value'};

fSet.delete(1);
fSet.delete('string value');
// fSet: {'string value'};

// Delete added add, delete filters all.
fSet.resetFilters();
```

### TODOS:
- [ ] examples
- [ ] documentation
- [ ] redesign docs
- [ ] travis
- [ ] codecov