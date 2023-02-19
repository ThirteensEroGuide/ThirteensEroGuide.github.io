export const genre = ['RPG', 'VN', 'Adventure', 'Time Limit', 'Management', 'Battle-Fuck', 'Simulation', 'Side-Scroller', 'Gacha'] as const;
export const art = ['Pixel Art', 'Static CG', 'Animated CG', '3D CG'] as const;
export const setting = ['Fantasy', 'Urban', 'Slice of Life', 'School'] as const;
export const misc = ['Male Protagonist', 'Female Protagonist', 'Monster Girls', 'Loli', 'Shota', 'Incest', 'Thicc', 'Maids', 'Romance', 'Rape', 'Corruption', 'Prostitution', 'Futanari'] as const;
export const engine = ['Unity', 'RPGM', 'WolfRPG'] as const;
export type Tag = (typeof genre | typeof art | typeof setting | typeof misc | typeof engine)[number];

export type SpecialTag = 'Approved' | 'Extreme' | 'Beginner';

export type Status = 'Completed' | 'In Development' | 'Paused' | 'Abandoned';

export type Language = 'English' | 'English (MTL)' | 'Japanese';

export type Info = {
    name: string,
    url: string,
}

export type CensorOptions = {
    status: boolean,
    patch: boolean
}

export type LangOptions = {
    status: Language,
    patch: boolean
}

export type Game = {
    id: string,
    name: string,
    url: string,
    images: string[],
    date: string,
    censored: CensorOptions,
    lang: LangOptions,
    status?: Status,
    dev: Info[],
    tags: Tag[],
    stags?: SpecialTag[],
    dl: Info[],
    description?: string
}

export type GameWrapper = {
    default: Game;
}