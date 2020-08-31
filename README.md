# Stack

- Node.js / Express.js
- MongoDB / Mongoose
- Jest

---
# How to run

- Copy `.env.example` to `.env` & custom it

```bash
npm start
```

# Routes / Api
-  Root url:
```bash
curl -X GET \
  http://localhost:5000/
```
-  Swagger url:

      http://localhost:5000/api-docs

- Get Records
```bash
curl -X GET \
  'http://localhost:5000/api/records?startDate={{startDate}}&endDate={{endDate}}&minCount={{minCount}&maxCount={{maxcount}}'
```

# Heroku Request Link
[https://gentle-shore-32147.herokuapp.com/api/records?startDate=2016-01-26&endDate=2018-02-02&maxCount=3000&minCount=2700](https://gentle-shore-32147.herokuapp.com/api/records?startDate=2016-01-26&endDate=2018-02-02&maxCount=3000&minCount=2700)

# Heroku Api Docs
[https://gentle-shore-32147.herokuapp.com/api-docs](https://gentle-shore-32147.herokuapp.com/api-docs)
