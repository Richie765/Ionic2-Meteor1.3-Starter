/**
 * Created by mjwheatley on 5/2/16.
 */
import {Component} from '@angular/core';
import {IONIC_DIRECTIVES, NavController, Alert} from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {Constants} from "../../../lib/Constants";

import template from './language-select.html';

@Component({
    selector: 'language-select',
    template,
    directives: [IONIC_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class LanguageSelectComponent {
    private language:String;
    private langCode:String;

    constructor(private nav:NavController, private translate:TranslateService) {
        this.setLanguage();
    }

    private selectLanguage() {
        let alert = Alert.create({
            title: this.translate.instant("language-select.header"),
            inputs: [
                {type: 'radio', label: 'English', value: 'en', checked: (this.langCode === "en")},
                {type: 'radio', label: 'Español', value: 'es', checked: (this.langCode === "es")}
            ],
            buttons: [
                {
                    text: this.translate.instant("general.cancel")
                },
                {
                    text: this.translate.instant("general.ok"),
                    handler: data => {
                        Session.set(Constants.SESSION.LANGUAGE, data);
                        this.translate.use(data);
                        this.setLanguage();
                    }
                }
            ]
        });
        this.nav.present(alert);
    }
    private setLanguage() {
        this.langCode = Session.get(Constants.SESSION.LANGUAGE);
        let language = "";
        if (this.langCode === "en") {
            language = "English"
        } else if (this.langCode === "es") {
            language = "Español";
        }
        this.language = language;
    }
}
