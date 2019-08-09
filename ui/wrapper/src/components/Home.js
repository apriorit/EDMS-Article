import React from 'react';
import { AngularContent, ReactContent } from "../utils";

const Home = () => (
    <div className="row">
        <div className="col">
            <div className="card">
                <h5 className="card-header">Angular</h5>
                <div className="card-body">
                    <AngularContent />
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <h5 className="card-header">React</h5>
                <div className="card-body" id="react-container">
                    <ReactContent />
                </div>
            </div>
        </div>
    </div>
);

export default Home;
