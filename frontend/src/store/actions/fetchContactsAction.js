import { fetchContacts } from "../types";

export const fetchContactsAction = (contacts) => ({
    type: fetchContacts,
    payload: contacts
});

const URL = `${process.env.REACT_APP_BASE_URL}contacts/summary/`;

export const fetchContactsFunction = () => dispatch => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'GET',
        headers
    };

    fetch(URL, config)
        .then(response => response.json())
        .then( data => data.map( item => { return {...item,invoicesTransformed:item.invoices.map( invoice => {return {...invoice,date:(new Date(invoice.date).toLocaleDateString('en-CH'))} } )} } ))
        .then( data => data.map( item => { return {...item,deliveryTransformed:item.delivery.map( delivery => {return {...delivery,date:(new Date(delivery.date).toLocaleDateString('en-CH'))} } )} } ))
        .then( data => data.map( item => { return {...item,ordersTransformed:item.orders.map( order => {return {...order,date:(new Date(order.date).toLocaleDateString('en-CH'))} } )} } ))
        .then( data => data.map( item => { return {...item,offersTransformed:item.offers.map( offer => {return {...offer,date:(new Date(offer.date).toLocaleDateString('en-CH'))} } )} } ))
        .then(data => 
            {
            dispatch(fetchContactsAction(data))
        });

    // fetch(URL, config)
    //     .then(response => response.json())
    //     .then(data => 
    //         {
    //         dispatch(fetchContactsAction(data))
    //     });
};