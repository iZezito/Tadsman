'use client';
import React from 'react';
import { Controller, Control, Path, FieldError, FieldValues } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TrashIcon } from './icons';

interface KeyValueInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  index: number;
  remove: (index: number) => void;
  error?: {
    key?: FieldError;
    value?: FieldError;
  };
}

const KeyValueInput = <T extends FieldValues>({
  control,
  name,
  index,
  remove,
  error,
}: KeyValueInputProps<T>) => (
  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
    <Controller
      name={`${name}.${index}.key` as Path<T>}
      control={control}
      render={({ field }) => (
        <>
          <Input
            {...field}
            type="text"
            placeholder="Key"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            onBlur={() => {
              const value = field.value;
              if (!isNaN(Number(value))) {
                field.onChange(Number(value));
              }
            }}
          />
          {error?.key && (
            <span className="text-red-600 text-sm">{error.key.message}</span>
          )}
        </>
      )}
    />
    <Controller
      name={`${name}.${index}.value` as Path<T>}
      control={control}
      render={({ field }) => (
        <>
          <Input
            {...field}
            type="text"
            placeholder="Value"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            onBlur={() => {
              const value = field.value;
              if (!isNaN(Number(value))) {
                field.onChange(Number(value));
              }
            }}
          />
          {error?.value && (
            <span className="text-red-600 text-sm">{error.value.message}</span>
          )}
        </>
      )}
    />
    <Button variant="ghost" size="icon" onClick={() => remove(index)}>
      <TrashIcon className="h-5 w-5" />
    </Button>
  </div>
);

export default KeyValueInput;
