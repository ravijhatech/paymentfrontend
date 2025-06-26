import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const DownloadCandidateDetails = () => {

  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/hiring-candidate/export`, {
        responseType: 'blob', // Important for binary files
      });

      const blob = new Blob([response.data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      saveAs(blob, `candidate_information.xlsx`);
    } catch (error) {
      console.error('Failed to download Excel:', error);
    }
  };

  return (
    <div style={{alignItems:'end',display:'flex',justifyContent:'end',marginRight:'50px'}}>

    <div style={{display:'flex',height:50,width:200,backgroundColor:'black',color:'white',justifyContent:'center',alignItems:'center',cursor:'pointer',borderRadius:'10px'}}>
      
        <button style={{justifyContent:'center',alignItems:'center',fontSize:12}} onClick={handleDownload}>Canditate Details Download</button>
      
</div>
    </div>
  )
};

export default DownloadCandidateDetails;
