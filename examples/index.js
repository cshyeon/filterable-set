/* FilterableSet is compatible with Set */
const { FilterableSet } = require('../dist'); // es5


const fSet = new FilterableSet();

fSet.add(1);
// fSet: {1};
// fSet.has(1) == true, fSet.size == 1

// create my add filter
const addFilter = (value) => typeof value === 'string';
// add addfilter to fSet
fSet.addAddFilter(addFilter);
// Now string type values only can be added to fSet.

// can not add 2
fSet.add(2);
// fSet: {1};

fSet.add('string value');
// fSet: {1, 'string value'};

// but delete is available
fSet.delete(1);
// fSet: {'string value'};



/* Delete Filter */
const deleteFilter = (value) => typeof value !== 'string';
fSet.addDeleteFilter(deleteFilter);
// Now string value can not be deleted.

fSet.delete('string value');
// fSet: {'string value'};


/* Clear method is not affected by delete Filters. */
fSet.clear();
// fSet: {}

/* ignore added each filters */
fSet.addForce(1);
fSet.addForce('string value');
// fSet: {1, 'string value'};

fSet.deleteForce(1);
fSet.deleteForce('string value');
// fSet: {}


// clear add, delete filters same with
fSet.resetAddFilters();
fSet.resetDeleteFilters();
// Or 
fSet.resetFilters()



/* lock */
// lockAll: can not add or delete any values never
// similar with 
// fSet.addAddFilter((value) => false), fSet.addDeleteFilter((value) => false)
fSet.lockAll();

/* disable lock */
/* Now fSet is only affected by added add, delete filters */
fSet.unlockAll();