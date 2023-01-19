import { SwapRightOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backgroundColor, color } from "../../App";
import { giftPacks, orgs } from "../../dbCollections";
import { getAllDocuments, updateOrCreateDocument } from "../../firebase/db";
import Loader from "../Loader";
import { toaster } from "../toaster";
import './index.css';

function AdminDashboard(props) {
  const { data } = props;
  const { org } = useParams();

  const [loading, setLoading] = useState(null);

  const [giftItemsList, setGiftItemsList] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.resolve(getAllDocuments(giftPacks)).then((res) => {
      let arr = [];
      res.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arr.push(doc.data());
      });

      setGiftItemsList(arr);
    setLoading(false);
    }).catch(err => {
    setLoading(false);
      toaster(0, err);
    });
  }, []);

  return ( 
    <div>
     
    <h1 style={{fontWeight: '400', color: backgroundColor}}>
        Select a birthday giftpack
    </h1> 
    <h3 style={{fontWeight: '400', color: 'white'}}>
    On each employee's birthday, we will deliver it to them on your behalf
    </h3> 
    <br/>
   {data ? null :  <a href={data ? 'jk' : 'https://docs.google.com/forms/d/e/1FAIpQLSfT4aRb1dFmNQYiPUmji4oPzxZx8b6dPDPcbFmLjIRL8isYXw/viewform?usp=sf_link'}>
      <Button onClick={()=>{
        console.log(giftItemsList);
    }} style={{ 
        backgroundColor: "transparent", color: backgroundColor, outline: 'none', border: '1px solid '+backgroundColor}}>
        Order Free Samples
    </Button></a>}
    <br/>
    <br/>
    <br/>
    <br/>

    <div
    style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around'
    }}
    >
      {giftItemsList?.map((item) => {
        return ( 
            <div 
            style={{
                marginBottom: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}>
                <img src={item.images[0]} style={{width: '40vw', height: 'auto', borderRadius: '9px'}} />
                <br/>
                <div align="left" style={{width: '40vw', position: 'relative'}}>
                    <div style={{color: 'white', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{color: backgroundColor, fontSize: '25px'}}>{item.title}</div> 

                    </div> 
                    <br/>

                    {/* <div style={{color: 'white'}} dangerouslySetInnerHTML={{__html: item.descriptionHTML}}></div> */}
                    <div style={{color: 'white', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                        {
                            item.itemsList?.map(item => {
                                return <div style={{
                                    marginBottom: '10px',
                                    padding: '3px 6px', colour: backgroundColor, border: '0px solid '+backgroundColor, 
                                    borderRadius: '5px',
                                    marginRight: '5px'
                                }}>{item}</div>
                            })
                        }
                        <div style={{
                                    opacity: '0',
                                    padding: '3px 6px', colour: backgroundColor, border: '0px solid '+backgroundColor, 
                                    borderRadius: '5px',
                                    width: '100px'
                                }}>{}<br/></div>
                    </div>
                    <br/> 
                    {/* {
                      !data ? <Button align='center' onClick={()=>{
                        console.log(giftItemsList);
                    }} style={{ 
                      fontWeight: '400',
                        backgroundColor: "green", color: 'white', outline: 'none', border: '0px solid '+backgroundColor, width: '100%'}}>
                        Select
                    </Button> : ''
                    } */}
                    
                </div>
             {/* img    content */}
            </div>  
        );
      })}
    </div>
    </div>
  );
}

export default AdminDashboard;
