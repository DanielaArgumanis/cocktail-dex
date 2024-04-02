export type Cocktail = {
    name: string;
    liquorList: string[];
    svgIcon: JSX.Element;
    ingredients: string[];
    recipe: string;
}

export type CocktailResponse = {
    [key: string]: {
        name: string;
        svgIcon: string;
        recipe: string;
        ingredients: {
            [key: string]: string;
        }
        liquorList: {
            [key: string]: string;
        }
    }
}
