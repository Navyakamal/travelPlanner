import { base_url } from "./baseUrl";
import { commonRequest } from "./commonStructure";

//add trip
export const addTripApi=async(bodyData)=>{
    return await commonRequest('POST',`${base_url}/trips`,bodyData)
}

//access trips
export const accessTripApi=async()=>{
    return await commonRequest('GET',`${base_url}/trips`,{})
}

//delete trips
export const deleteTripApi=async(id)=>{
    return await commonRequest('DELETE',`${base_url}/trips/${id}`,{})
}

//edit trips
export const editTripApi=async(id,bodyData)=>{
    return await commonRequest('PUT',`${base_url}/trips/${id}`,bodyData)
}
