import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { OptionsConfiguration } from "../../utility/OptionsConfiguration";
import { SelectricDefaults } from "../../utility/SelectricDefaults";
import { SelectionResult } from "src/app/utility/SelectionResult";
import { SelectionAction } from "src/app/utility/SelectionAction";

@Component({
    selector: "app-ionic-selectric-options",
    templateUrl: "./ionic-selectric-options.component.html",
    styleUrls: ["./ionic-selectric-options.component.scss"]
})
export class IonicSelectricOptionsComponent implements OnInit {
    constructor(
        public navParams: NavParams,
        private modalController: ModalController
    ) {}

    public configuration: OptionsConfiguration;
    public value: any;
    public text: string;
    public hasSearchbar: boolean;

    private get valueAsArray(): Array<any> {
        return (this.value || [])  as Array<any>
    }

    public get nameForValue(): string {
        return (
            this.configuration.propertyNameForValue ||
            SelectricDefaults.PropertyNameForValue
        );
    }

    public get nameForText(): string {
        return (
            this.configuration.propertyNameForText ||
            SelectricDefaults.PropertyNameForText
        );
    }

    ngOnInit() {
        this.configuration = this.navParams.data as OptionsConfiguration;
        this.value = this.configuration.value;
        this.hasSearchbar = this.configuration.hasSearchbar;
    }

    public isSelected(value: any): boolean {
        if (this.configuration.multiple) {
            return this.valueAsArray.indexOf(value) > -1;
        }
        return value === this.value;
    }

    public hasSelection(): boolean {
        return !!this.value;
    }

    public selectOption(option: any): void {
        if (this.configuration.multiple) {
            this._selectMultiple(option[this.nameForValue]);
        } else {
            this.value = option[this.nameForValue];
        }
    }

    public cancel() {
        this._performButtonClick(SelectionAction.Cancel);
    }

    public ok() {
        this._performButtonClick(SelectionAction.Ok);
    }

    public clear() {
        this.value = null;
        this.text = null;
        this._performButtonClick(SelectionAction.Clear);
    }

    public add() {
        this._performButtonClick(SelectionAction.Add);
    }

    private _performButtonClick(action: SelectionAction) {
        const result = new SelectionResult();
        result.action = action;
        result.value = this.value;
        result.text = this.text;
        this.modalController.dismiss(result);
    }

    private _selectMultiple(value: any): void {
        const index: number = this.valueAsArray.indexOf(value);
        if (index > -1) {
            this.valueAsArray.splice(index, 1);
        } else {
            this.valueAsArray.push(value);
        }
    }
}
