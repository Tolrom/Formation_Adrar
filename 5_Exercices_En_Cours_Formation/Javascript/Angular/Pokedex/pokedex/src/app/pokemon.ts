export interface Pokemon {
    pokedex_id: number,
    generation: number,
    category: string,
    name: {
        fr: string,
        en: string,
        jp: string,
    },
    sprites: {
        regular: string,
        shiny: string | null,
        gmax: string | null
    },
    types: Array<
        {
            name: string,
            image: string,
        }
    > | null,
    talents: [
        {
            name: string,
            tc: boolean
        }
    ] | null,
    stats: {
        hp: number,
        atk: number,
        def: number,
        spe_atk: number,
        spe_def: number,
        vit: number
    } | null,
    resistances: [
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        },
        {
            name: string,
            multiplier: number
        }
    ] | null,
    evolution: {
        pre: Array<
            {
                pokedex_id: number,
                name: string,
                condition: string
            }
        > | null,
        next: Array<
            {
                pokedex_id: number,
                name: string,
                condition: string
            }
        > | null,
        mega: Array<
            {
                orbe: string,
                sprites: {
                    regular: string,
                    shiny: string
                }
            }
        > | null
    } | null,
    height: string |null,
    weight: string | null,
    egg_groups: Array<string> | null,
    sexe: string | null,
    catch_rate: number | null,
    level_100: number | null,
    formes: Array<
        {
            region: string,
            name: {
                fr: string,
                en: string,
                jp: string
            }
        }> | null
}
