import axios from "axios";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getSpecificProduct = async (req, res) => {
    try {
        const { companyname, categoryname,productid } = req.params
        if(!companyname || !categoryname || !productid){
            throw new ApiError(400,"Company name , category name and product id is required")
        }
        console.log("Access Token",process.env.ACCESS_TOKEN)
        const res = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {}, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        if(!res){
            throw new ApiError(500,"Something went wrong while fetch the products")
        }
        return res.status(200).json(new ApiResponse(200,res.data,"Products fetched Successfully"))
    } catch (error) {
        throw new ApiError(500,"Something went wrong while fetch the products",error)
    }
}