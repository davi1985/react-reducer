'use client';

import { usePerson } from '@/reducers/usePerson';
import { ChangeEvent } from 'react';

export const SimpleForm = () => {
  const [person, personDispatch] = usePerson();

  const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    personDispatch({
      type: 'CHANGE_FIRST_NAME',
      value: event.target.value,
    });
  };

  const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    personDispatch({
      type: 'CHANGE_LAST_NAME',
      value: event.target.value,
    });
  };

  return (
    <div className="w-full max-w-lg flex flex-col gap-5">
      <input
        type="text"
        value={person.firstName}
        onChange={handleChangeFirstName}
        placeholder="Your first name"
        className="w-full text-gray-900 p-3 rounded outline-none border-2 border-slate-200 focus:border-slate-600"
      />

      <input
        type="text"
        value={person.lastName}
        onChange={handleChangeLastName}
        placeholder="Your last name"
        className="w-full text-gray-900 p-3 rounded outline-none border-2 border-slate-200 focus:border-slate-600"
      />

      <p className="w-full text-center text-xl">Your fullname:</p>
      <p className="w-full text-center text-2xl">
        {person.firstName} {person.lastName}
      </p>
    </div>
  );
};
