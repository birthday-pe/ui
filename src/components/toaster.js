import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { notification } from "antd";



export const toaster = (type, message) => {
    // type can be 0 or 1 ( 0 for failure, 1 for success)
    if(type === 0){
        notification.open({
            message: null,
            description: <span style={{color: 'red', fontSize: '18px'}}> <WarningOutlined style={{color: 'orange', fontSize: '25px'}}/> &nbsp;&nbsp;&nbsp; {message}</span>,
              //'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
              console.log('Notification Clicked!');
            },
            duration: 2,
            placement: 'center'

          });
    }
    if(type === 1){
        notification.open({
            message: null,
            description: <span style={{color:'seagreen', fontSize: '18px'}}><CheckCircleOutlined style={{color: 'rgb(75,181,67)', fontSize: '23px'}}/>  &nbsp;&nbsp;&nbsp;   {message}</span>,
              //'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
              console.log('Notification Clicked!');
            },
            duration: 2,
            placement: 'center'
          });
    }
}