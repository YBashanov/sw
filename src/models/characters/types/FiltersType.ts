export type FiltersType = {
    eye_color?: string;
    hair_color?: string;
    skin_color?: string;
    gender?: string;
    heightStart?: string;
    heightEnd?: string;
};

export type KeyofFiltersType = keyof FiltersType;
