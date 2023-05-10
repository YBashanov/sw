export type StateType<RecordType> = Record<string, string> &
    Record<string, RecordType[]> & {
        pagination?: unknown;
        filters?: unknown;
        search?: string;
    };
