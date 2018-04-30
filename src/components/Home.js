import React, { Component } from 'react';
import EthernetCloud from './ethernet_cloud.png';


class Home extends Component {
  render() {
    return (
      <div>

        <div className="row programmable-ethernet">
          <div className="col-sm-6">
            <img src={ EthernetCloud }/>
          </div>
          <div className="col-sm-6">
            <h1>Programmable Ethernet</h1>
            <h3>A new blockchain protocol for jump starting secure networks using programmable packets</h3>
            <h5>Get early access to the SDK</h5>
            <a href="https://www.marconi.org/h-2-lightbox.html" className="btn btn-primary btn-lg git-btn">Request Git Access</a>
            <a className="btn btn-outline-primary btn-lg sample-code-btn">View sample code</a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">

            <div className="row">
              <div className="col-sm-12 core-tech-col text-center">
                <h2 className="core-tech">Core Technology</h2>
                <p className="core-tech-lead-text">The Marconi protocol is designed down to the ethernet level and powers a decentralized networking stack that provides privacy, security, net neutrality and upgradability</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h3>Ethernet-Level Encryption</h3>
                <p>Secure communication pipes established at Layer 2 of the OSI model provide packet-level encryption and custom packet routing and processing</p>
              </div>
              <div className="col-sm-6">
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
              </div>
              <div className="col-sm-6">
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
              </div>
              <div className="col-sm-6">
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h5>Learn more about the Marconi Platform</h5>
                <a className="btn btn-outline-primary btn-lg sample-code-btn">Read Whitepaper</a>
              </div>
            </div>



          </div>
        </div>


      </div>
    );
  }
}

export default Home;
