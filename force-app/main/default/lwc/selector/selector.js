import {
    LightningElement,
    track,
    api,
    wire
} from 'lwc';
import {
    getRecord,
    getFieldValue
} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [NAME_FIELD];


/*
export default class Selector extends LightningElement {
    @track selectedProductId;

    handleProductSelected(evt) {
        // claw
        console.log('Selector Contained event fired - Set/Change the selectedProductId !!!');

        this.selectedProductId = evt.detail;
    }
}
*/

export default class Selector extends LightningElement {
    selectedProductId;
    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
        console.log(getFieldValue(this.user.data, NAME_FIELD));
    }

    userId = Id;
    @wire(getRecord, {
        recordId: '$userId',
        fields
    })
    user;
    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }

}