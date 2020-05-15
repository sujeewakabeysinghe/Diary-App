import { Pipe, PipeTransform } from '@angular/core';
//import { stringify } from 'querystring';

@Pipe({
  name: 'searchcontact'
})
export class SearchcontactPipe implements PipeTransform {

  transform(contact: any[], search: string): any[] {
    if(!contact) return null;
    if(!search) return contact;

    search = search.toLowerCase();

    return contact.filter(function(contacts){
        return JSON.stringify(contacts.fullName).toLowerCase().includes(search);
    });
  }

}
