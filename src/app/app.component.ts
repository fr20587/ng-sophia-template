// Angular Modules
import { Component } from '@angular/core';

// Third's Modules
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'ath-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // Public properties
    public title = 'ATHENDAT E-COMMERCE SOLUTION';

    constructor(private spinner: NgxSpinnerService) { }


    ngOnInit() {
        /** spinner starts on init */
        // this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);

        window.scroll(0, 0);
    }

}
