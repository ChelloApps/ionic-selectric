import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { IonicSelectricOptionsComponent } from "../ionic-selectric-options/ionic-selectric-options.component";
import { OptionsConfiguration } from "../../utility/OptionsConfiguration";
import { SelectricDefaults } from "src/app/utility/SelectricDefaults";
import { SelectionResult } from "src/app/utility/SelectionResult";

@Component({
    selector: "ionic-selectric",
    templateUrl: "./ionic-selectric.component.html",
    styleUrls: ["./ionic-selectric.component.scss"]
})
export class IonicSelectricComponent {
    constructor(private popoverController: PopoverController) {
        this._initializeProperties();
    }

    private _value: any;
    private _optionsPopover: HTMLIonPopoverElement;

    @Input()
    public placeholder: string;

    @Input()
    public caption: string;

    @Input()
    public captionPosition: string;

    @Input()
    public hasSearchbar: boolean;

    @Input()
    public propertyNameForValue: string;

    @Input()
    public propertyNameForText: string;

    @Input()
    public options: any[];

    @Input()
    public set value(value: any) {
        const emitChange: boolean = this._value !== value;
        this._value = value;
        this._updateSelectedText();
        if (this.valueChange && emitChange) {
            this.valueChange.emit(this._value);
            this.change.emit(this._value);
        }
    }

    public get value(): any {
        return this._value;
    }

    @Output()
    public valueChange: EventEmitter<any>;

    @Output()
    public change: EventEmitter<any>;

    public isReadOnly: boolean;
    public isOptionsVisible: boolean;
    public selectedText: string;

    public showOptions(ev: any) {
        if (this.isOptionsVisible) {
            return;
        }

        this._showOptionsPopover(ev);
    }

    private _initializeProperties() {
        this.placeholder = null;
        this.options = [];
        this.propertyNameForText = SelectricDefaults.PropertyNameForText;
        this.propertyNameForValue = SelectricDefaults.PropertyNameForValue;
        this.value = null;
        this.valueChange = new EventEmitter<any>();
        this.change = new EventEmitter<any>();
        this.isReadOnly = true;
        this.selectedText = null;
        this.hasSearchbar = false;
    }

    private _updateSelectedText() {
        const selectedOption = this._getSelectedOption();
        if (!selectedOption) {
            this.selectedText = null;
            return;
        }
        this.selectedText = selectedOption[this.propertyNameForText];
    }

    private _getSelectedOption() {
        return this.options.find(
            o => o[this.propertyNameForValue] == this.value
        );
    }

    private async _showOptionsPopover(ev: any) {
        this.isOptionsVisible = true;
        this._optionsPopover = await this.popoverController.create({
            component: IonicSelectricOptionsComponent,
            event: ev,
            translucent: true,
            componentProps: new OptionsConfiguration(
                this.options,
                this.value,
                this.propertyNameForValue,
                this.propertyNameForText,
                this.hasSearchbar
            )
        });

        this._optionsPopover.onDidDismiss().then((popoverResult: any) => {
            const result = popoverResult.data as SelectionResult;
            if (result) {
                this.value = result.value;
            }
            return this._hideOptionsPopover();
        });

        this._optionsPopover.style.cssText =
            "--max-height: 25%; --max-width: 75%;";

        return await this._optionsPopover.present();
    }

    private async _hideOptionsPopover() {
        this.isOptionsVisible = false;
        if (!this._optionsPopover) {
            return;
        }
        await this._optionsPopover.dismiss();
    }
}
