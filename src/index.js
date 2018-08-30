import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StampImg from './stamp.png';

function Envelope({envelope}) {
  return (
    <div className="envelope">
      <div className="sender">
        <AddressLabel info={envelope.sender}/>
      </div>
      <div className="receiver">
        <AddressLabel info={envelope.receiver}/>
      </div>
      <div className="stamp">
        <Stamp url={StampImg}/>
      </div>
    </div>
  )
}

function AddressLabel({info}) {
  return (
    <ul className="label-item">
      <li>{info.name}</li>
      <li>{info.address_1}</li>
      <li>{info.address_2}</li>
    </ul>
  )
}

function Stamp({url}) {
  return <img src={url} alt=""/>
}

var envelope = {
  sender: {
    name: 'Mr.Sender',
    address_1: '123 Fake St.',
    address_2: 'Boston, MA 02118'
  },
  receiver: {
    name: 'Mrs. Receiver',
    address_1: '123 Fake St.',
    address_2: 'San Francisco, CA 94101'
  }
};

ReactDOM.render(
  <Envelope envelope={envelope}/>,
  document.getElementById('root')
);
