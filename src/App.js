import React from 'react';

const PowerBIEmbed = () => {
  return (
    <div>
      <h2>Power BI Embedded Report</h2>
      <iframe 
        title="Power BI Report"
        width="1140" 
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=393e7b79-64ea-4772-be49-482fb6813090&autoAuth=true&ctid=e85c5307-76b1-4c48-bc5d-e88373dda261"  
        allowFullScreen="true">
      </iframe>
    </div>
  );
};

export default PowerBIEmbed;