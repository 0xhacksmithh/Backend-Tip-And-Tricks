+------------+ +------------------+ +-----------+
| Client | -----> | Application | -----> | Redis |
| (Browser) | | Server | | (Sessions)|
+------------+ +------------------+ +-----------+
| | |
|---- Login Request ----->| |
| |-- Store Session ------->|
| | |
|<--- Set-Cookie (SID) ---| |
| | |
|---- Request + Cookie -->|-- Validate Session --->|
| |<-- Session Data --------|
|<--- Protected Data -----| |

Client ---> Express Session Middleware ---> Redis ---> Route
| | | |
|--- Cookie ----->| | |
| |-- verify signature ---> | |
| |-- GET session:abc123 -->| |
| |<-- session data --------| |
| |-- attach req.session -->| |
| |-------------------------------> isAuthenticated()
| |
|<-------------------------- 200 OK ---------------|
