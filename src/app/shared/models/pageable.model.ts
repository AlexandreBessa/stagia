import { PageMetaDataModel } from "./page-meta-data.model";

export interface PageableModel<T>{
    data: T[],
    metaData: PageMetaDataModel
}
