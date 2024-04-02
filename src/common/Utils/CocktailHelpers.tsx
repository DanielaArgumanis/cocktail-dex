// @Components
import Base64ToSVG from "@commonComponents/Base64ToSVG";

// @Types
import { Cocktail, CocktailResponse } from "types/Cocktail.types";

export const formatCocktailList = (responseData: CocktailResponse): Cocktail[] => {
    return Object.values(responseData).map((value)=> ({
        name: value.name,
        svgIcon: <Base64ToSVG base64Data={value.svgIcon}/> as JSX.Element,
        ingredients: Object.values(value.ingredients),
        recipe: value.recipe,
        liquorList: Object.values(value.liquorList)
    }))
}

