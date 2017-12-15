export class GeoLocation {
    constructor(public lat: number, public lng: number){

    }
}

export class Address {
    constructor(public street: string, public suite: string, public city: string, public zipcode: string, public geo: GeoLocation){

    }
}

export class Company {
    constructor(public name: string, public catchPhrase: string, public bs: string){

    }
}

export class User {    
    name: string;
    username: string;
    email: string;
    id: number;
    address: Address[];
    phone: string;
    website: string;
    company: Company;

    constructor(name: string, username: string, email: string, id?: number, address?: Address[], phone?: string, website?: string, company?: Company){
        this.name = name;
        this.username = username;
        this.email = email;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}