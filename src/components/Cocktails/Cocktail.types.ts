export type CocktailCardProps = {
    name: string;
    liquorList: string[];
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    ingredients: string[];
    recipe: string;
}