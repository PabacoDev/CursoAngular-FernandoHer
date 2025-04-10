

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Paco',
}

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
}

returnChildrenNumber(passenger2)
returnChildrenNumber(passenger1)