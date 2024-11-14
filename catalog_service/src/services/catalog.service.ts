import { ICatalogRepository } from "../interface/catalogRepository.interface";
import  { Product } from "../models/product.model";

export class CatalogService {

    private _repository: ICatalogRepository;
    
    constructor(repository: ICatalogRepository) {
        this._repository = repository;
    }

    createProduct(input: Product) {
        
    }

    updateProduct(input: Product)  {

    }

    getProducts(limit: number,offset:number) {}

    getProduct(id: number)  {}

    deleteProduct(id: number) {}


}