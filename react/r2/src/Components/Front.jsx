import TreeLine from "./Front/TreeLine";
import { Link } from "react-router-dom";
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import '../bootstrap.css';
import '../front.scss';
import reducer from "../Reducers/reducer";
import { getDataFromServer, sortClientHeightAsc, sortClientHeightDesc, sortClientNameAsc, sortClientNameDesc } from "../Actions";

function Front({ show }) {

    const [trees, dispachTrees] = useReducer(reducer, []);

    // Read
    useEffect(() => {
        axios.get('http://localhost:3003/trees-list/' + show)
            .then(res => {
                console.log(res.data);
                dispachTrees(getDataFromServer(res.data));
            })
    }, [show]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#">Tree Shop</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link" to="/">Home</Link>
                                    <Link className="nav-link" to="/leaf">Leaf</Link>
                                    <Link className="nav-link" to="/spike">Spike</Link>
                                    <Link className="nav-link" to="/palm">Palm</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <ul className="list-group">
                            {
                                trees.map(t => <TreeLine key={t.id} tree={t}></TreeLine>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-2">
                        <span>By name <small>client</small>:</span>
                        <div className="arrows">
                        <svg className="up" onClick={() => dispachTrees(sortClientNameAsc())}>
                            <use xlinkHref="#arrow"></use>
                        </svg>
                        <svg className="down"  onClick={() => dispachTrees(sortClientNameDesc())}>
                            <use xlinkHref="#arrow"></use>
                        </svg>
                        </div>
                    </div>
                    <div className="col-2">
                        <span>By height <small>client</small>:</span>
                        <div className="arrows">
                        <svg className="up"  onClick={() => dispachTrees(sortClientHeightAsc())}>
                            <use xlinkHref="#arrow"></use>
                        </svg>
                        <svg className="down"  onClick={() => dispachTrees(sortClientHeightDesc())}>
                            <use xlinkHref="#arrow"></use>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Front;