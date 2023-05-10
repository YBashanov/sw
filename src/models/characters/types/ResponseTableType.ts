import { Types } from '../';

export type ResponseTableType = {
    results?: Types.RecordType[];
    count?: number;
    next?: string;
    previous?: string;
};
