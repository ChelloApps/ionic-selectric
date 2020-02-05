import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { OptionsConfiguration } from "../../utility/OptionsConfiguration";
import { SelectricDefaults } from '../../utility/SelectricDefaults';
import { SelectionResult } from 'src/app/utility/SelectionResult';
import { SelectionAction } from 'src/app/utility/SelectionAction';

@Component({
    selector: "app-ionic-selectric-options",
    templateUrl: "./ionic-selectric-options.component.html",
    styleUrls: ["./ionic-selectric-options.component.scss"]
})
export class IonicSelectricOptionsComponent implements OnInit {
    constructor(public navParams: NavParams, private modalController: ModalController) {}

    public configuration: OptionsConfiguration;
    public value: any;
    public text: string;
    public hasSearchbar: boolean;

    public get nameForValue(): string {
        return this.configuration.propertyNameForValue || SelectricDefaults.PropertyNameForValue;
    }

    public get nameForText(): string {
        return this.configuration.propertyNameForText || SelectricDefaults.PropertyNameForText;
    }

    ngOnInit() {
        this.configuration = this.navParams.data as OptionsConfiguration;
        this.value = this.configuration.value;
        this.hasSearchbar = this.configuration.hasSearchbar;
    }

    public isSelected(value: any) {
        return value === this.value;
    }

    public hasSelection(): boolean {
        return !!this.value;
    }

    public selectOption(option: any) {
        this.value =
            option[this.nameForValue];
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
}
