import React from 'react'
import "../css/widget.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Widget = () => {
  return (
    <div className="widget">
        <div className="widget__top">
            <div className="widget__bodyHeader">
                <h4>Linkedin News</h4>
                <InfoOutlinedIcon />
            </div>
            <div className="widget__top__body">
                <ul className="widget__option">
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="widget__bottom">
            <div className="widget__bodyHeader">
                <h4>Linkedin News</h4>
                <InfoOutlinedIcon />
            </div>
            <div className="widget__top__body">
                <ul className="widget__option">
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                    <li>
                        <h4>Job search fees</h4>
                        <p>10 days ago, $10,000</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Widget