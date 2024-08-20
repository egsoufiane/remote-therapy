import React from 'react';

const Loading = () => {
    return(
      //   <div style={styles.container}>
      //       <div style={styles.spinner}></div>
      //       <p>Loading...</p>
      // </div>
      <div style={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" ><rect width="10" height="10" x="1" y="1" 
          fill="white" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" 
          begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle31" fill="freeze" 
          attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle32" 
          fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"/>
          <animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" 
          values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="white" rx="1"><animate id="svgSpinnersBlocksShuffle34" 
          fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle35" 
          fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle36" 
          fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle37" 
          fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" 
          x="13" y="13" fill="white" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" 
          begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle39" fill="freeze" 
          attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle3a" 
          fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"/><animate 
          id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" 
          values="1;13"/></rect></svg>
     
      </div>
    );

};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: '20px',
      color: '#333',
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: '6px solid #f3f3f3',
      borderRadius: '50%',
      borderTop: '6px solid #3498db',
      animation: 'spin 1s linear infinite',
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  };


  export default Loading;
