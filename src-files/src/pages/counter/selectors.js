export const getCounter = state => state.counter.value;
export const getIsLoading = state => state.counter.isLoading;
export const getIsError = state => state.counter.isError;

export const getIsSaveLoading = state => state.counter.isSaveLoading;
export const getIsSaveSuccess = state => state.counter.isSaveSuccess;
export const getIsSaveError = state => state.counter.isSaveError;

export const getCounterStatusList = state => state.counter.statusList;
export const getArraySavedNambers = state => state.counter.arraySavedNumbers;