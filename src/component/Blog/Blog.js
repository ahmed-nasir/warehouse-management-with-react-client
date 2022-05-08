import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h1>Difference between javascript and node js</h1>
                <p>
                    <strong>Javascrript:</strong>
                    JavaScript is a programming language that runs in any browser JavaScript Engine like v8, Chakra, SpiderMonkey and many more . JavaScript basically frontend development right now you can write backend also with javascript.
                </p>
                <p>
                    <strong>NodeJs:</strong>
                    Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses it requires libraries that can easily be accessed from JavaScript programming for better use. NodeJs basically use for backend development with javascript we can create easily anything with nodejs.
                </p>
            </div>
            <div>
                <h2>When should you use nodejs and when should you use mongodb</h2>
                <p>Mongodb is nosql database.There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. With MongoDB and nodejs crud oparation is too easy and super fast</p>

            </div>
            <div className=''>
                <h2>Differences between sql and nosql databases.</h2>
                <p><strong>SQL: </strong>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property.</p>
                <p><strong>NoSQL: </strong>Non-relational or distributed database system.Non-relational or distributed database system.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries. Horizontally scalable. Follows CAP(consistency, availability, partition tolerance).</p>
            </div>
            <div>
                <h2>What is the purpose of jwt and how does it work</h2>
                <p>
                    <b>JWT</b>, or <b>JSON Web Token</b> , is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
                <p>
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: The header and the payload. The signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>

        </div>
    );
};

export default Blog;