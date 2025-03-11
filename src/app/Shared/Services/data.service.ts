import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    getData$: Observable<any>;
    private getDataSubject = new ReplaySubject<any>();

    constructor() {
        this.getData$ = this.getDataSubject.asObservable();
    }

    getData(data: any) {
        // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.getDataSubject.next(data);
    }
}