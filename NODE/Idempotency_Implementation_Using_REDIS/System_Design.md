Client
│
│ POST /orders
│ Idempotency-Key: abc123
▼

Middleware
│
│ Redis GET idem:abc123
│
├── Exists + completed → return stored response
│
├── Exists + processing → 409 conflict
│
└── Not exists
│
│ SET status=processing
▼

Route Handler
│
│ create order
▼

Response Interceptor
│
│ store response in Redis
▼

Client receives response

1 Client request arrives
2 Middleware checks Redis
3 Redis empty
4 Redis set → status:processing
5 next() → controller executes
6 Controller creates order
7 Controller calls res.json()
8 Middleware intercepts res.json()
9 Store response in Redis
10 Send response to client
