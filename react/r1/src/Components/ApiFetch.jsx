import React, { useState, useEffect } from 'react'

const ApiFetch = () => {

    const [users, setUsers] = useState([]);
    var [defaultNumber, setDefaultNumber] = useState(2);
    var baseUrl = `https://reqres.in/api/users?page=${defaultNumber}`;
      

    const getUsers = async () => {
        const response = await fetch(baseUrl);
        const rawData = await response.json();
        setUsers(rawData);
    }

    const actualData = users.data;      // pateiks masyvą objekte.

    useEffect(() => {
        getUsers(actualData);
    }, [defaultNumber]); //


    const pageNumbers = [];

    for (let i = 1; i <= users.total_pages; i++) {
        pageNumbers.push(i);
    }
    



    return (
        <>
            <div className="page-title">
                <h2>Fotgrafijos (AVATARAI)</h2>
                {/* <h2>Vartotojų sąrašas:</h2> */}
            </div>
            <div className="container mt-2">
                <div className="row text-center">

                    {actualData &&
                        actualData.map((currElem) => {
                            return (
                                <div className="col-10 col-md-6 mt-3" key={currElem.id}>
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                                            <div className="image"><img src={currElem.avatar} alt="" className="rounded-circle" width="155" /></div>
                                            <div className="ml-3 w-100">
                                                {/* <h4 className="mb-0 mt-0 textLeft">{currElem.first_name} {currElem.last_name}</h4><span className="textLeft email">email: {currElem.email}</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }


                    {/* <div className="container col-8 pages">
                        {
                            pageNumbers.map((num) => {
                                return (
                                    <nav>
                                        <ul className="pagination">
                                            <li key={num} className="page-item">
                                                <a onClick={() => { setDefaultNumber(num) }} href className="page-link">
                                                    {num}
                                                </a>
                                            </li>
                                        </ul>

                                    </nav>
                                )
                            })

                        }
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default ApiFetch;

{/* https://reqres.in/api/users?page=2  Atvaizduoti userių avatarus DONE! */}