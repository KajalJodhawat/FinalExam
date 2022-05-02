import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function DataList() {

    let history = useHistory();
    const dataSelector = useSelector((state) => state.list.list)
    console.log("dataselectoe" , dataSelector)
    return (
        <div className="container">
            <h2 className='container col-md-2 my-4'>Data List</h2>
            <div className="row d-flex flex-column">

                <div className="col-md-9 mx-auto my-4">
                    <table className="table table-hover">
                        <thead className="table-header bg-dark text-white mx-auto" >
                            <tr style={{ backgroundColor: 'Black' }}>

                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope='col'>Marital Status</th>
                                <th scope='col'>Family Member</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSelector.map(list => (
                                <tr>
                                    <td>{list.FirstName}</td>
                                    <td>{list.LastName}</td>
                                    <td>{list.Email}</td>
                                    <td>{list.Gender}</td>
                                    <td>{list.MaritalStatus}</td>
                                    <td>{list.FamilyMember}</td>
                                    


                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type='submit' onClick={() => history.push("/Addmoreinput")}>Add Details</button>

                </div>
            </div>
        </div>
    )
}
