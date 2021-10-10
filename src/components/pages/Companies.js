import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CompanyService from '../../services/CompanyService';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
         retrieveCompanies();
    },[])

    const retrieveCompanies = async () => {
        await CompanyService.getCompanies()
            .then(response => {
                setCompanies(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteCompany = async (id) => {
        await CompanyService.deleteCompany(id)
            .then(response => {
                retrieveCompanies(); 
            })
            .catch(e => {
                console.log(e);
            });
    }
    return (
        <div>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">CompanyList</h2>
            <Link className="btn btn-info" to={`/companies/add`}>Add New</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies && companies.map((company, index) => (
                        <tr key={company.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{company.companyName}</td>
                            <td>{company.companyCode}</td>
                            <td>
                               
                                <Link className="btn btn-sm btn-info me-2" to={`/companies/edit/${company.id}`}>edit</Link>
                                <button className="btn btn-sm btn-danger" onClick={() => {if(window.confirm('Delete the item?')){deleteCompany(company.id)}}}>delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Companies
