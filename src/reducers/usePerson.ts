import { useReducer } from 'react';

type Person = {
  firstName: string;
  lastName: string;
};

type Action = {
  type: 'CHANGE_FIRST_NAME' | 'CHANGE_LAST_NAME';
  value: string;
};

const reducer = (state: Person, action: Action): Person => {
  switch (action.type) {
    case 'CHANGE_FIRST_NAME': {
      return { ...state, firstName: action.value };
    }
    case 'CHANGE_LAST_NAME': {
      return { ...state, lastName: action.value };
    }

    default:
      return state;
  }
};

const initialState: Person = {
  firstName: '',
  lastName: '',
};

export const usePerson = () => useReducer(reducer, initialState);
