import { PageableModel } from "./pageable.model";
import { Observable } from "rxjs";

export interface PageableServiceModel<T>{
    getPage():Observable<PageableModel<T>>
}
