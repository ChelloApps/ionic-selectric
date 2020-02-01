import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { IonicSelectricOptionsComponent } from "../ionic-selectric-options/ionic-selectric-options.component";
import { OptionCache } from './../../utility/OptionCache';

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
    public propertyNameForValue: string;

    @Input()
    public propertyNameForText: string;

    @Input()
    public options: any[];

    @Input()
    public set value(value: any) {
        this._value = value;
        this._updateSelectedText();
        if (this.valueChange) {
            this.valueChange.emit(this._value);
        }
    }

    public get value(): any {
        return this._value;
    }

    @Output("change")
    public valueChange: EventEmitter<any>;

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
        this.propertyNameForText = "text";
        this.propertyNameForValue = "value";
        this.value = null;
        this.valueChange = new EventEmitter<any>();
        this.isReadOnly = true;
        this.selectedText = null;
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
            componentProps: new OptionCache(this.options, this.value)
        });

        this._optionsPopover.onDidDismiss().then(result => {
            this._hideOptionsPopover();
        });

        return await this._optionsPopover.present();
    }

    private _hideOptionsPopover() {
        this.isOptionsVisible = false;
        if (!this._optionsPopover) {
            return;
        }
        this._optionsPopover.dismiss();
    }
}
