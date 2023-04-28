import moment from "moment";
import redisClient from "../config/redisClient.js";



const userLimiter = async (req, res, next) => {

 
console.log("hey")
  const currIp = req.ip;
  let req_time = new Date().getTime();
  let newrecord = {
    count: 1,
    timeStamp: req_time,
  };

  if (redisClient.get(currIp) == null) {
    await redisClient.set(currIp, newrecord);
    next();
  }
   else {
    let ip_data = redisClient.get(req.ip);
    let currtime = ip_data.timeStamp;
    let diffinTime = Math.abs((currtime-req_time)/(1000*60)) 

    if (diffinTime <= 10) {
      if (ip_data.count > 5) {
        return res.send("Too many request, try again after some time!!");
      } else {
        ip_data.count += 1;
        await redisClient.set(req.ip, ip_data);
        next();
      }
    } else {
      await redisClient.set(req.ip, newrecord);
      next();
    }
  }
next()
};

export default { userLimiter };
