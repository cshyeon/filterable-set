[filterable-set - v0.1.5](../README.md) › [Globals](../globals.md) › [FilterableSet](filterableset.md)

# Class: FilterableSet ‹**T, T, T**›

## Type parameters

▪ **T**

▪ **T**

▪ **T**

## Hierarchy

* [Set](filterableset.md#static-set)

  ↳ **FilterableSet**

## Index

### Constructors

* [constructor](filterableset.md#constructor)

### Properties

* [[Symbol.toStringTag]](filterableset.md#readonly-[symbol.tostringtag])
* [size](filterableset.md#readonly-size)
* [Set](filterableset.md#static-set)

### Methods

* [[Symbol.iterator]](filterableset.md#[symbol.iterator])
* [add](filterableset.md#add)
* [addAddFilter](filterableset.md#addaddfilter)
* [addDeleteFilter](filterableset.md#adddeletefilter)
* [addForce](filterableset.md#addforce)
* [clear](filterableset.md#clear)
* [delete](filterableset.md#delete)
* [deleteAddFilter](filterableset.md#deleteaddfilter)
* [deleteDeleteFilter](filterableset.md#deletedeletefilter)
* [deleteForce](filterableset.md#deleteforce)
* [entries](filterableset.md#entries)
* [forEach](filterableset.md#foreach)
* [has](filterableset.md#has)
* [isAddLocked](filterableset.md#isaddlocked)
* [isAllLocked](filterableset.md#isalllocked)
* [isDeleteLocked](filterableset.md#isdeletelocked)
* [keys](filterableset.md#keys)
* [lockAdd](filterableset.md#lockadd)
* [lockAll](filterableset.md#lockall)
* [lockDelete](filterableset.md#lockdelete)
* [resetAddFilters](filterableset.md#resetaddfilters)
* [resetDeleteFilters](filterableset.md#resetdeletefilters)
* [resetFilters](filterableset.md#resetfilters)
* [unlockAdd](filterableset.md#unlockadd)
* [unlockAll](filterableset.md#unlockall)
* [unlockDelete](filterableset.md#unlockdelete)
* [values](filterableset.md#values)

## Constructors

###  constructor

\+ **new FilterableSet**(`initialValues?`: any): *[FilterableSet](filterableset.md)*

*Defined in [src/FilterableSet.ts:5](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L5)*

Create FilterableSet instance like Set

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`initialValues?` | any | Added all iterable element to FilterableSet  |

**Returns:** *[FilterableSet](filterableset.md)*

## Properties

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [FilterableSet](filterableset.md).[[Symbol.toStringTag]](filterableset.md#readonly-[symbol.tostringtag])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

### `Readonly` size

• **size**: *number*

*Inherited from [FilterableSet](filterableset.md).[size](filterableset.md#readonly-size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

___

### `Static` Set

▪ **Set**: *SetConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:71

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹T›*

*Inherited from [FilterableSet](filterableset.md).[[Symbol.iterator]](filterableset.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *IterableIterator‹T›*

___

###  add

▸ **add**(`value`: any): *this*

*Overrides void*

*Defined in [src/FilterableSet.ts:166](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

___

###  addAddFilter

▸ **addAddFilter**(...`fns`: function[]): *void*

*Defined in [src/FilterableSet.ts:25](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L25)*

Add addFilters you want to, The registered filter is used as a verification function
when call the filterableSet.add() or relative method to determine whether to add data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...fns` | function[] | addFilters you want to add  |

**Returns:** *void*

___

###  addDeleteFilter

▸ **addDeleteFilter**(...`fns`: function[]): *void*

*Defined in [src/FilterableSet.ts:45](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L45)*

Add deleteFilters you want to, The registered filter is used as a verification function
when call the filterableSet.delete() or relative method to determine whether to delete data.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...fns` | function[] | deleteFilters you want to add  |

**Returns:** *void*

___

###  addForce

▸ **addForce**(`value`: any): *this*

*Defined in [src/FilterableSet.ts:87](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L87)*

Addition always succeeds regardless of the add filters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | value you want to add. |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from [FilterableSet](filterableset.md).[clear](filterableset.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: any): *boolean*

*Overrides void*

*Defined in [src/FilterableSet.ts:181](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  deleteAddFilter

▸ **deleteAddFilter**(`fn`: Function): *boolean*

*Defined in [src/FilterableSet.ts:36](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L36)*

Delete addFilters you want to

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | Function | function you want to delete |

**Returns:** *boolean*

- if delete success return true else return false

___

###  deleteDeleteFilter

▸ **deleteDeleteFilter**(`fn`: Function): *boolean*

*Defined in [src/FilterableSet.ts:56](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L56)*

Delete deleteFilters you want to

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | Function | function you want to delete |

**Returns:** *boolean*

- if delete success return true else return false

___

###  deleteForce

▸ **deleteForce**(`value`: any): *boolean*

*Defined in [src/FilterableSet.ts:96](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L96)*

Deletion always succeeds regardless of the delete filters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | value you want to delete.  |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[T, T]›*

*Inherited from [FilterableSet](filterableset.md).[entries](filterableset.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[T, T]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [FilterableSet](filterableset.md).[forEach](filterableset.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: T, `value2`: T, `set`: [Set](filterableset.md#static-set)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`value2` | T |
`set` | [Set](filterableset.md#static-set)‹T› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: T): *boolean*

*Inherited from [FilterableSet](filterableset.md).[has](filterableset.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*

___

###  isAddLocked

▸ **isAddLocked**(): *boolean*

*Defined in [src/FilterableSet.ts:103](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L103)*

Return value is add-lock lock status, true is locked

**Returns:** *boolean*

___

###  isAllLocked

▸ **isAllLocked**(): *boolean*

*Defined in [src/FilterableSet.ts:117](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L117)*

Return true if add-lock and delete-lock are locked all

**Returns:** *boolean*

___

###  isDeleteLocked

▸ **isDeleteLocked**(): *boolean*

*Defined in [src/FilterableSet.ts:110](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L110)*

Return value is delete-lock lock status, true is locked

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹T›*

*Inherited from [FilterableSet](filterableset.md).[keys](filterableset.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹T›*

___

###  lockAdd

▸ **lockAdd**(): *void*

*Defined in [src/FilterableSet.ts:124](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L124)*

It is never added regardless of the add filters.

**Returns:** *void*

___

###  lockAll

▸ **lockAll**(): *void*

*Defined in [src/FilterableSet.ts:152](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L152)*

It is same with lockAdd() and lockDelete()

**Returns:** *void*

___

###  lockDelete

▸ **lockDelete**(): *void*

*Defined in [src/FilterableSet.ts:138](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L138)*

It is never deleted regardless of the delete filters.

**Returns:** *void*

___

###  resetAddFilters

▸ **resetAddFilters**(): *void*

*Defined in [src/FilterableSet.ts:63](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L63)*

Reset added addFilters

**Returns:** *void*

___

###  resetDeleteFilters

▸ **resetDeleteFilters**(): *void*

*Defined in [src/FilterableSet.ts:70](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L70)*

Reset added deleteFilters

**Returns:** *void*

___

###  resetFilters

▸ **resetFilters**(): *void*

*Defined in [src/FilterableSet.ts:77](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L77)*

Reset added both addFilters and deleteFilters

**Returns:** *void*

___

###  unlockAdd

▸ **unlockAdd**(): *void*

*Defined in [src/FilterableSet.ts:131](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L131)*

Unlock the add-lock, now addFilters are applied.

**Returns:** *void*

___

###  unlockAll

▸ **unlockAll**(): *void*

*Defined in [src/FilterableSet.ts:160](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L160)*

It is same with unlockAdd() and unlockDelete()

**Returns:** *void*

___

###  unlockDelete

▸ **unlockDelete**(): *void*

*Defined in [src/FilterableSet.ts:145](https://github.com/cshyeon/filterable-set/blob/2396825/src/FilterableSet.ts#L145)*

Unlock the delete-lock, now deleteFilters are applied.

**Returns:** *void*

___

###  values

▸ **values**(): *IterableIterator‹T›*

*Inherited from [FilterableSet](filterableset.md).[values](filterableset.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹T›*
