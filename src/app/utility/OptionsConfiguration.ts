export class OptionsConfiguration {
    public constructor(
        options: any[],
        value: any,
        propertyNameForValue: string,
        propertyNameForText: string
    ) {
        this.options = options;
        this.value = value;
        this.propertyNameForValue = propertyNameForValue;
        this.propertyNameForText = propertyNameForText;
    }

    public options: any[] = [];
    public value: any;
    public height: number;
    public width: number;
    public propertyNameForValue: string;
    public propertyNameForText: string;
}
