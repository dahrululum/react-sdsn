import axios from "axios";
export const SdsnService = async  (callback) => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmFjMGFiYzhkMTRmMzU4Y2NkODg5ZjViOGQxOWYwMWQxZDhlZjk5OWNjYTYwYTc1MDA0NGQ0NWNkNzVjYjgxNzljOTY3YzcxMzMzYTI0YmIiLCJpYXQiOjE3MzgyNTg5NjQuOTA5MzE5LCJuYmYiOjE3MzgyNTg5NjQuOTA5MzI1LCJleHAiOjE3Njk3OTQ5NjQuNDE5MDM5LCJzdWIiOiI0NSIsInNjb3BlcyI6W119.wd_inGojUci0uBAfWmWzdzsLLniSPrxaPO-1ZiIEXo2PXdMVpOJ9PsapHapfKv_dmimeywAjNqystQPmGU_l_SbbASxG5AGnMDQyUwpiPEwP7xc2oxLwLQdstpcyiBly-DaMwEFG0hr1U3m3tLgGCR9WAm1G5e3JdO0plTXG1dv8MbxTv0pugf5rGyQVFvXbBa4cKJSky2VHKsOxZ2NjMJthD_0DjOUFIj_PT9eceb609pL4iWQZz1-Gc3Tvs3fgyi5dUAuLjFAhTUDF_p_9hdcbUmiLjTLEI-FhvfirzB4syoi4s41zEqvDoqWoS_6-8LuzqIc2snxbWKP_EXntOQ";
    try {
      const res = await axios.get("https://dna.web.bps.go.id/api/sdsn/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //console.log(res.data.result.data);
     return callback(res.data.result.data);
     
    } catch (err) {
      console.log(err);
    }
}
