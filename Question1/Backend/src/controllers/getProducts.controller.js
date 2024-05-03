import axios from "axios";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getProducts = async (req, res) => {
    try {
        var { n, page = 1, minPrice, maxPrice } = req.query
        const { companyname, categoryname } = req.params
        if (!n) {
            n = 10
        }
        if (n > 10) {
            page = Math.floor(n / 10)
        }
        if (!companyname || !categoryname) {
            throw new ApiError(400, "Company name , category name is required")
        }
        console.log("Access Token", process.env.ACCESS_TOKEN)
        const res = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers:{
                Authorization : `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        if (!res) {
            throw new ApiError(500, "Something went wrong while fetch the products")
        }
        return res.status(200).json(new ApiResponse(200, res.data, "Products fetched Successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetch the products",error)
    }
}