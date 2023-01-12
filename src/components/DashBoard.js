import { Card } from 'antd';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { users } from '../dbCollections';
import { getDocument } from '../firebase/db'; 
import style from './Dashboard.module.scss';

function DashBoard(props) {

    const [ isManager, setIsManager ] = useState(false);
    const [ parties, setParties ] = useState(["f"]);

    useEffect(() => {
      getAuth().onAuthStateChanged((data) => {
        getDocument(users, data.email).then((res) => {
          if(res._document.data.value.mapValue.fields.manager){
              setIsManager(true);
          }
        });
      });
    }, []);

    return (
        parties.length !== 0 ?
        <div>
            <div className={style.wrapper}>
                <Card>
                    Hi person!<br/>
                    Your birthday in 23 days
                    <br/>
                    <br/>
                    <br/>
                    <button className={style.button}>Schedule party</button>
                </Card>
                <Card>
                    Gifts recieved
                    <br/>
                    <br/>
                    <button className={style.button}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;
                    <button className={style.button}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;
                    <br/>
                    <br/>
                    <button className={style.button}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;
                    <button className={style.button}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </Card>
                <Card dummy={true}>
                    
                </Card>
            </div>
            <div className={style.wrapper}>
                 <Card> 
                    To: <select className={style.dropdown}>
                        <option>romi</option>
                        <option>ronit</option>
                        <option>romita</option>
                    </select>
                    <br/>
                    <br/>
                    <br/>
                    <textarea placeholder='type your message here ...' rows={5} style={{width: '90%', resize: 'none', outline: '0px', border: '0px', padding: '15px 15px'}} ></textarea>
                    <br/>
                    <br/>
                    <button className={style.button}>Send wishes</button>

                </Card>
                <Card>
                   Upcoming parties 
                </Card>
                <Card dummy={true}>
                    
                    </Card>
               
            </div>
        </div> 
        :
        <div style={{paddingTop: '25vh'}}>
            <h2 style={{fontWeight: '300'}}>You don't have any parties to attend yet!</h2>
            <h3 style={{fontWeight: '300'}}>You can check later when your manager schedules the virtual birthday party for you or for someone in your team!</h3>

            <br/>
            <br/>
            <br/>
            <h3 style={{fontWeight: '300'}}>Cheers! - img </h3>
        </div>

    );
}

export default DashBoard;