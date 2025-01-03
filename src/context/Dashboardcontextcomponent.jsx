import React, { children } from 'react'
export const Dashboardcontext = React.createContext();


function Dashboardcontextcomponent({children}) {
  let data = [
        {
            title :"Earnings(Monthly)",
            salary :"$24,000",
            icon :"fa-calendar",
            color:"primary",
            isProgress : false,
    
        },
        {
            title :"Earnings(Annual)",
            salary :"$2,40,000",
            icon :"fa-dollar-sign",
            color:"success",
            isProgress : false,
    
        },
        {
            title :"Task",
            salary :"50",
            icon :"fa-clipboard-list",
            color:"info",
            isProgress : true,
    
        },
        {
            title :"Pending Request",
            salary :"18",
            icon :"fa-comments",
            color:"warninf",
            isProgress : false,
    
        }
      ]

    return <Dashboardcontext.Provider value={data}>
        {children}
    </Dashboardcontext.Provider>
}

export default Dashboardcontextcomponent