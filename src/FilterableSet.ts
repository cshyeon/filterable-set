export class FilterableSet extends Set {
  protected _isAddLocked: boolean;
  protected _isDeleteLocked: boolean;
  protected addFilters: Map<any, any>;
  protected deleteFilters: Map<any, any>;

  /**
   * Create FilterableSet instance like Set
   * @constructor
   * @param initialValues - Added all iterable element to FilterableSet
   */
  constructor(initialValues?: any) {
    super(initialValues);
    this._isAddLocked = false;
    this._isDeleteLocked = false;
    this.addFilters = new Map();
    this.deleteFilters = new Map();
  }

  /**
   * Add addFilters you want to, The registered filter is used as a verification function
   * when call the filterableSet.add() or relative method to determine whether to add data.
   * @param fns - addFilters you want to add
   */
  addAddFilter(...fns: ((value: any) => boolean)[]): void {
    fns.forEach((fn) => {
      this.addFilters.set(fn, fn);
    });
  }

  /**
   * Delete addFilters you want to
   * @param fn - function you want to delete
   * @returns - if delete success return true else return false
   */
  deleteAddFilter(fn: Function): boolean {
    return this.addFilters.delete(fn);
  }

  /**
   * Add deleteFilters you want to, The registered filter is used as a verification function
   * when call the filterableSet.delete() or relative method to determine whether to delete data.
   * @param fns - deleteFilters you want to add
   */
  addDeleteFilter(...fns: ((value: any) => boolean)[]): void {
    fns.forEach((fn) => {
      this.deleteFilters.set(fn, fn);
    });
  }

  /**
   * Delete deleteFilters you want to
   * @param fn - function you want to delete
   * @returns - if delete success return true else return false
   */
  deleteDeleteFilter(fn: Function): boolean {
    return this.deleteFilters.delete(fn);
  }

  /**
   * Reset added addFilters
   */
  resetAddFilters(): void {
    this.addFilters = new Map();
  }

  /**
   * Reset added deleteFilters
   */
  resetDeleteFilters(): void {
    this.deleteFilters = new Map();
  }

  /**
   * Reset added both addFilters and deleteFilters
   */
  resetFilters(): void {
    this.resetAddFilters();
    this.resetDeleteFilters();
  }


  addForce(value: any): this {
    super.add(value);
    return this;
  }

  deleteForce(value: any): boolean {
    return super.delete(value);
  }

  isAddLocked(): boolean {
    return this._isAddLocked;
  }

  isDeleteLocked(): boolean {
    return this._isDeleteLocked;
  }

  isAllLocked(): boolean {
    return this._isAddLocked && this._isDeleteLocked;
  }


  lockAdd(): void {
    this._isAddLocked = true;
  }

  unlockAdd(): void{
    this._isAddLocked = false;
  }

  lockDelete(): void {
    this._isDeleteLocked = true;
  }

  unlockDelete(): void{
    this._isDeleteLocked = false;
  }

  lockAll(): void{
    this._isAddLocked = true;
    this._isDeleteLocked = true;
  }

  unlockAll(): void{
    this._isAddLocked = false;
    this._isDeleteLocked = false;
  }

  /* Override methods */
  add(value: any): this {
    if (this.isAddLocked()) {
      return this;
    }

    const addFilters = this.addFilters && [...this.addFilters.values()];
    const isValid = addFilters ? addFilters.every((addFilter) => addFilter(value)) : true;

    if (isValid) {
      super.add(value);
    }

    return this;
  }

  delete(value: any): boolean {
    if (this.isDeleteLocked()) {
      return false;
    }

    const deleteFilters = this.deleteFilters && [...this.deleteFilters.values()];
    const isValid = deleteFilters ? deleteFilters.every((deleteFilter) => deleteFilter(value)) : true;

    if (isValid) {
      super.delete(value);
      return true;
    }
    return false;
  }
}
