export class OptionsConfiguration {
    public constructor(options: any[], value: any) {
        this.options = options;
        this.value = value;
    }

    public options: any[] = [];
    public value: any;
    public height: number;
    public width: number;
}
