import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
    private rentals: Rental[] = [
        {
            id: 1,
            title: 'Central Appartment',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'httpvia.placeholder.com/350x250',
            bedrooms: 3,
            description: "Very Nice Appartment",
            dailyRate: 34,
            shared: false,
            createdAt: "24/3/2019"
        },
        {
            id: 2,
            title: 'Central Appartment 2',
            city: 'New York',
            street: 'Main Street',
            category: 'apartment',
            image: 'httpvia.placeholder.com/350x250',
            bedrooms: 3,
            description: "Very Nice Appartment",
            dailyRate: 34,
            shared: false,
            createdAt: "24/3/2019"
        },
        {
            id: 3,
            title: 'Central Appartment 3',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'httpvia.placeholder.com/350x250',
            bedrooms: 3,
            description: "Very Nice Appartment",
            dailyRate: 34,
            shared: false,
            createdAt: "24/3/2019"
        },
        {
            id: 4,
            title: 'Central Appartment 4',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'httpvia.placeholder.com/350x250',
            bedrooms: 3,
            description: "Very Nice Appartment. You can be here all day",
            dailyRate: 34,
            shared: true,
            createdAt: "24/3/2019"
        }
    ];

    public getRentals(): Observable<Rental[]>{
        return new Observable((observer) => {
            setTimeout(()=>{
                observer.next(this.rentals);
            }
            , 1000);
        });
    }

    public getRentalById(id:string): Observable<Rental> {
        return new Observable<Rental>((observer)=>{
            setTimeout(() => {
                const foundRental = this.rentals.find((rental)=>{
                    return rental.id === +id;
                });
                observer.next(foundRental);
            }, 500);
        })
    }
}