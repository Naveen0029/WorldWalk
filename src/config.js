const apiUrl = process.env.REACT_APP_ENDPORT === 'development' 
? "http://localhost:3030" : "https://worldkikrewalk.onrender.com";

export default apiUrl;