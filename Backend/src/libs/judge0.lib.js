import axios from "axios"

export const getJudge0LanguageId = (language) => {
    const languageMap = {
        "PYTHON":71,
        "JAVA":62,
        "JAVASCRIPT":63,
    }
    return languageMap[language.toUpperCase()]
}

export const submitBatch = async (submissions)=>{
    // const {data} = await axios.post(`${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`,{
    //     submissions
    // })

    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.sulu.sh/submissions/batch',
        headers:
        {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.SULU_API_KEY}`
        },
        data: {
            submissions
        }
    };

    try {
        const { data } = await axios.request(options);
        return data;
      } catch (error) {
        console.error(error);
      }
}

export const pollBatchResults = async (tokens)=>{
    while(true){
        const options = {
            method: 'GET',
            url: `https://judge0-ce.p.sulu.sh/submissions/batch?tokens=${tokens.join(',')}`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${process.env.SULU_API_KEY}`
            }
          };
          console.log(options);
          
        
        const {data} = await axios.request(options)
    
        console.log(data);
        
        const results = data.submissions;

        const isAllDone = results.every(
            (r)=> r.status.id !== 1 && r.status.id !== 2
        )

        if(isAllDone) return results
        await sleep(1000)
    }
}


