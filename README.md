# Rate Limiter

I created a Rate limiter which will limit users to a particular API. It will protect the API from external attacks like DDoS.
It will also protect the usage of the API.

## Design 
![image](https://user-images.githubusercontent.com/74293435/235129785-b865a70d-598d-42b9-be69-47114af37925.png)

I have implemented a server-side rate limiter using the sliding window count algorithm and Redis for storing user request data. This implementation allows for efficient and accurate rate limiting, ensuring that users do not exceed predetermined limits on their requests. Furthermore, my implementation can be easily integrated with an API Gateway, enabling scalable and robust rate limiting for distributed systems. As I continue to develop my rate limiter, incorporating token bucket or leaky bucket algorithms will offer additional options for efficient rate limiting, providing even greater control and flexibility in managing user requests. By leveraging these advanced algorithms, I can further enhance the performance and resilience of my rate limiter, allowing for reliable and secure service delivery to my users.

