import { Component, OnInit } from "@angular/core";
import { NavParams } from '@ionic/angular';

@Component({
    selector: "app-ionic-selectric-options",
    templateUrl: "./ionic-selectric-options.component.html",
    styleUrls: ["./ionic-selectric-options.component.scss"]
})
export class IonicSelectricOptionsComponent implements OnInit {
    constructor(public navParams: NavParams) {}

    ngOnInit() {
        this.options = this.navParams.data.options;
        this.value = this.navParams.data.value;
    }

    public options: any[];
    public value: any;
}
