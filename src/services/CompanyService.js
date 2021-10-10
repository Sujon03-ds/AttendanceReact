import axiosInstance from "../http-auth";

class CompanyService {
    getCompanies=async ()=> {
        return await axiosInstance.get("companies");
    }
    getCompanyById=async (id) =>{
        return await axiosInstance.get("companies/"+id);
    }
    addCompany=async (data) =>{
        return await axiosInstance.post("companies/create",data);
    }
    editCompany=async (data) =>{
        return await axiosInstance.post("companies/edit",data);
    }

    deleteCompany= async (id)=>{
        return await axiosInstance.get("companies/delete/"+id);
    }
}

export default new CompanyService();