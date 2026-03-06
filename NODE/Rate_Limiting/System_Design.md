## Constant Window Rate Limiter

Client Request
│
▼
Identify user/IP
│
▼
Generate Redis key
rate:<identifier>:<window>
│
▼
INCR key
│
▼
Check request count
│
├─ count <= limit → Allow request
│
└─ count > limit → Block request
│
▼
EXPIRE key after window

## Sliding Window Rate Limiter

Request arrives
│
▼
Identify user/IP
│
▼
Load Redis sorted set
│
▼
Remove old requests
(ZREMRANGEBYSCORE)
│
▼
Add new request
(ZADD)
│
▼
Count requests
(ZCARD)
│
▼
If count > limit → block
Else → allow request
