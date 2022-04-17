import * as modelProducts from '../models/product';

export const crate = async (name:string, amount:string) => modelProducts.create(name, amount);

export const findAll = async () => modelProducts.findProduct();