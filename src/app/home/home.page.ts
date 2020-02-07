import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
    constructor() {}

    ngOnInit(): void {
        this.options = [
            { value: 1, text: "Blue" },
            { value: 2, text: "Red" },
            { value: 3, text: "Green" },
            { value: 4, text: "Yellow" },
            { value: 5, text: "Purple" },
            { value: 6, text: "Black" },
            { value: 7, text: "White" },
            { value: 8, text: "Pink" },
            { value: 9, text: "Grey" },
            { value: 10, text: "Orange" }
        ];
        this.value = [6,8,2];
    }

    public options: any[];
    public value: any;
    public changedValue: any;

    public change(value: any) {
        this.changedValue = value;
    }
}
