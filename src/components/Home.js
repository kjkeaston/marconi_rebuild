import React, { Component } from 'react';
import EthernetCloud from './ethernet_cloud.png';
import EthernetLevelEncryption from './ethernet_level_encryption.png';
import ProgrammablePackets from './programmable_packets.png';
import BranchChains from './branch_chains.png';
import DevelopersText from './developers_text.png';
import DevelopersCodeSample from './developers_code_sample.png';
import FooterLogo from './marconi_logo_footer.png';
import { I18n, Trans } from 'react-i18next';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      languageButtonClicked: false,
    }
    this.languageClicked = this.languageClicked.bind(this);
  }

  languageClicked() {
    this.setState(prevState => ({
      languageButtonClicked: !prevState.languageButtonClicked
    }));
  }

  render() {
    return (
      <div>
        <button 
          className="btn btn-outline-secondary btn-sm language-btn" 
          onClick={this.languageClicked}>
            Language
        </button>
        <div className="row programmable-ethernet site-padding">
          <div className="col-sm-6 ethernet-cloud-img-col">
            <img src={ EthernetCloud }/>
          </div>
          <div className="col-sm-6 programmable-ethernet-col">
            <h1 className="programmable-ethernet-title">Programmable Ethernet</h1>
            {this.state.languageButtonClicked ? (
              <h3 className="programmable-ethernet-text">使用可编程数据包跳转启动安全网络的新区块链协议</h3>
            ):(
              <h3 className="programmable-ethernet-text">A new blockchain protocol for jump starting secure networks using programmable packets</h3>
            )}
            <h5>Get early access to the SDK</h5>
            <div className="row">
              <div className="col-sm-6">
                <a href="https://www.marconi.org/h-2-lightbox.html" className="btn btn-primary btn-lg git-btn">Request Git Access</a>
              </div>
              <div className="col-sm-6">
                <a className="btn btn-outline-primary btn-lg outline-btn">View sample code</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 core-tech-col site-padding">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="site-section-titles">Core Technology</h2>
                <p className="core-tech-lead-text">The Marconi protocol is designed down to the ethernet level and powers a decentralized networking stack that provides privacy, security, net neutrality and upgradability</p>
              </div>
            </div>
            <div className="row core-tech-section-row">
              <div className="col-sm-6">
                <h3 className="core-tech-section-titles">Ethernet-Level Encryption</h3>
                <p>Secure communication pipes established at Layer 2 of the OSI model provide packet-level encryption and custom packet routing and processing</p>
              </div>
              <div className="col-sm-6 text-center">
                <img src={ EthernetLevelEncryption }/>
              </div>
            </div>
            <div className="row core-tech-section-row">
              <div className="col-sm-6 text-center">
                <img src={ ProgrammablePackets }/>
              </div>
              <div className="col-sm-6">
                <h3 className="core-tech-section-titles">Programmable Packets</h3>
                <p>Smart contracts for network packets allow the creation of packet level decentralized applications for improved network security and operation</p>
              </div>
            </div>
            <div className="row core-tech-section-row">
              <div className="col-sm-6">
                <h3 className="core-tech-section-titles">Branch Chains</h3>
                <p>Branchable blockchains enable the programmatic creation and jump starting of new secure networks</p>
              </div>
              <div className="col-sm-6 text-center">
                <img src={ BranchChains }/>
              </div>
            </div>
            <div className="row text-center core-tech-section-row">
              <div className="col-sm-12">
                <h5><strong>Learn more about the Marconi Platform</strong></h5>
                <a href="https://docsend.com/view/5zragmb" className="btn btn-lg whitepaper-btn">Read Whitepaper</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row use-cases-row">
          <div className="col-sm-12 site-padding">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="site-section-titles text-center">Use Cases</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <h5 className="use-cases-use-titles"><span className="plus-sign">+</span>Virtualized Blockchain</h5>
                <p className="use-cases-use-texts">Jump start new blockchains that leverage the Marconi Network for secure block creation and persistence.</p>
              </div>
              <div className="col-sm-4">
                <h5 className="use-cases-use-titles"><span className="plus-sign">+</span>Token to Chain Migration</h5>
                <p className="use-cases-use-texts">Migrate token projects (e.g. ERC20) to a blockchain where the tokens now provide utility by powering the blockchain</p>
              </div>
              <div className="col-sm-4">
                <h5 className="use-cases-use-titles"><span className="plus-sign">+</span>Secure Field Networks</h5>
                <p className="use-cases-use-texts">Rapidly deploy secure networks in battlefields and disaster recovery areas. Record network activity on a ledger for after action reviews.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 use-cases-network-col">
                <h5 className="use-cases-use-titles"><span className="plus-sign">+</span>Network Admin Apps</h5>
                <p className="use-cases-use-texts">Create administrative applications for network load balancing, changing network topology and IOT device management.</p>
              </div>
              <div className="col-sm-6 use-cases-security-col">
                <h5 className="use-cases-use-titles"><span className="plus-sign">+</span>Security Apps</h5>
                <p className="use-cases-use-texts">Create decentralized security apps like Anti-Phishing, Anti-Malware, Intrusion Prevention Systems and dVPNs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row developers">
          <div className="col-sm-12 site-padding text-center">
            <h2 className="site-section-titles">Developers</h2>
            <img className="developers-text" src={ DevelopersText }/>
            <img src={ DevelopersCodeSample }/>
          </div>
        </div>
        <div className="row footer">
          <div className="col-sm-6 footer-logo-col">
            <img className="footer-logo" src={ FooterLogo }/>
            <h6>MARCONI</h6>
            <p>© 2018 Marconi Foundation</p>
          </div>
          <div className="col-sm-6">
            <div className="row footer-links-row">
              <div className="col-sm-6 footer-list-with-three">
                <ul className="footer-links">
                  <li>Whitepaper</li>
                  <li>Developers</li>
                  <li>Core Tech</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-links">
                  <li>Team</li>
                  <li>hello@marconi.org</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
