import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NavParams } from "@ionic/angular";
import { OptionsConfiguration } from "../../utility/OptionsConfiguration";
import { SelectricDefaults } from '../../utility/SelectricDefaults';

@Component({
    selector: "app-ionic-selectric-options",
    templateUrl: "./ionic-selectric-options.component.html",
    styleUrls: ["./ionic-selectric-options.component.scss"]
})
export class IonicSelectricOptionsComponent implements OnInit {
    constructor(public navParams: NavParams) {}

    public configuration: OptionsConfiguration;

    public get nameForValue(): string {
        return this.configuration.propertyNameForValue || SelectricDefaults.PropertyNameForValue;
    }

    public get nameForText(): string {
        return this.configuration.propertyNameForText || SelectricDefaults.PropertyNameForText;
    }

    ngOnInit() {
        this.configuration = this.navParams.data as OptionsConfiguration;
    }

    public isSelected(value: any) {
        return value === this.configuration.value;
    }

    public selectOption(option: any) {
        this.configuration.value =
            option[this.nameForValue];
    }
}
