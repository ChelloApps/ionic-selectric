export class OptionsConfiguration {
    public constructor(
        options: any[],
        value: any,
        propertyNameForValue: string,
        propertyNameForText: string,
        hasSearchbar: boolean,
        multiple: boolean
    ) {
        this.options = options;
        if (multiple) {
            this.value = Object.assign([], value);
        } else {
            this.value = value;
        }
        
        this.propertyNameForValue = propertyNameForValue;
        this.propertyNameForText = propertyNameForText;
        this.hasSearchbar = hasSearchbar;
        this.multiple = multiple;
    }

    public options: any[] = [];
    public value: any;
    public propertyNameForValue: string;
    public propertyNameForText: string;
    public hasSearchbar: boolean;
    public multiple: boolean;
}
