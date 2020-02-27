import {
    LightningElement,
    track,
    api
} from 'lwc';
import {
    bikes
} from 'c/data';


export default class Detail extends LightningElement {

    // Ensure changes are reactive when product is updated
    @track product;

    // Private var to track @api productId
    _pproductId = undefined;

    // Use set and get to process the value every time it's
    // requested while switching between products
    set productId(value) {
        //claw
        console.log('1 Setting: ' + this._pproductId);

        this._pproductId = value;
        this.product = bikes.find(bike => bike.fields.Id.value === value);
        //claw
        console.log('2 Setting: ' + this._pproductId);
        //        console.log('2 Setting: ' + this.product.fields.Name.value);

    }

    // getter for productId
    @api get productId() {
        //claw
        console.log('3 Getter: ' + this._pproductId);

        return this._pproductId;
    }
}