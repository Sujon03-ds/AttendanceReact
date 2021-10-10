import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CompanyService from '../../services/CompanyService';

const AddOrEditCompany = () => {
    let { id } = useParams();

    const [company, setcompany] = useState({ id: 0, companyName: '', companyCode: '' });

    let history = useHistory();

    useEffect(() => {
        if (id > 0) {
            retrieveCompany(id)
        } else {
            setcompany({ id: 0, companyName: "", companyCode: "" });
        }
    }, []);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setcompany({ ...company, [name]: value });
    };

    const retrieveCompany = (id) => {
        CompanyService.getCompanyById(id)
            .then(response => {
                setcompany(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const saveCompany = (e) => {
        e.preventDefault();
        if (id > 0) {
            CompanyService.editCompany(company)
                .then(response => {
                    history.push('/companies');
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            CompanyService.addCompany(company)
                .then(response => {
                    history.push("/companies")
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    };

    return (
        <div>
             <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Add/Update Company</h2>
            <Link className="btn btn-info" to={`/companies`}>Back to list</Link>
            <form onSubmit={saveCompany} className="form-horizontal">
                <div className="form-group row">
                    <label htmlFor="companyName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="companyName" name="companyName" placeholder="Name" value={company.companyName} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="companyCode" className="col-sm-2 col-form-label">Code</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="companyCode" name="companyCode" placeholder="Code" value={company.companyCode} onChange={handleInputChange} />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddOrEditCompany
