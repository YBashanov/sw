import { PayloadAction } from '@reduxjs/toolkit';

type SerializedError = {
    name?: string;
    message?: string;
    stack?: string;
    code?: string;
};

export type ReduxActionType = PayloadAction<
    SerializedError,
    string,
    | ({
          arg: number;
          requestId: string;
          requestStatus: 'rejected';
          aborted: boolean;
          condition: boolean;
      } & {
          rejectedWithValue: boolean;
      })
    | Record<string, unknown>,
    SerializedError
>;
