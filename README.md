# face-recognition-auth-reactjs

A simple authentication page with face recognition and face verification built with ReactJS and Face-api.js.



## Features

- **Face recognition and verification (Login/Register)**
- **Similarity Test Widget**
- **Matching Test Widget**

Minor features:

- Comparison between different pre-trained neural networks.
- Computation of Euclidean distance and Manhattan distance on `Labeled Faces in the Wild` dataset.
- Evaluation of false positive and false negative matching.
- Encryption/decryption of biometric data.

## System Requirements

- **NODE.JS** (tested on v14.19.3)
- **NPM**
- **MongoDB**

## Installation


git clone https://github.com/abhay1verma5/face_recgnition___.git
```
Install frontend dependencies

cd ~/path/to/your/face-recognition-auth-reactjs/frontend_app
```

npm install
```

npm start
```
Install backend dependencies

cd ~/path/to/your/face-recognition-auth-reactjs/backend_app
```

npm install
```

npm run dev
```
Configure `.env` file

cp .env.example .env
```

API_PORT=3001
FRONTEND_URL='http://localhost:3000'
MONGO_URI='mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.bckok.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority'
TOKEN_KEY='...' (used by JWT, recommended 50/60 chars)
PRIVATE_KEY='...' (used by Bcrypt, must be of 32 chars)
```


#   f a c e _ r e c g n i t i o n _ _ _  
 