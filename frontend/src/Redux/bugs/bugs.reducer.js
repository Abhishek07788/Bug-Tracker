import {
  loading,
  dataLoading,
  failed,
  bugs_add,
  bugs_get,
  bugs_delete,
  bugs_update,
} from "./bugs.type";

const initialState = {
  bugsData: [],
  loading: false,
  error: false,
};

export const bugsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loading: {
      return { ...state, loading: true, error: false };
    }

    case dataLoading: {
      return { ...state, loading: false, error: false };
    }

    case failed: {
      return { ...state, loading: false, error: true, dataLoading: false };
    }

    case bugs_get: {
      return { ...state, loading: false, error: false, bugsData: payload };
    }
    case bugs_add: {
      return { ...state, loading: false, error: false };
    }

    case bugs_delete: {
      return { ...state, loading: false, error: false };
    }

    case bugs_update: {
      return { ...state, loading: false, error: false };
    }

    default:
      return state;
  }
};
