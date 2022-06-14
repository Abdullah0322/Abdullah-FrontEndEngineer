export interface IAutocompleteProps {
    id: string;
    options: Array<string>;
    onChange?: (value?: string) => void;
}