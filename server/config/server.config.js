const dotenv = require("dotenv");

dotenv.config();

const env = "dev"; // local | dev | production
const fbase={
    "type": "service_account",
    "project_id": "paradise-2acdd",
    "private_key_id": "531ffbaf0b4c7a30a96dd46752d1a6183fe81608",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCesFG5dRyHBb4s\n3IssDbxfPq5RDsr3/bKge8ybmWE69FM4Qz/MlLBMW2xKc4LrRYgKBmg4zeFdBJyc\n6rFTGk3Hih0DKBn4sQKNjL7SABojRgenYbFzErisE9em0F7X4UaOdbWjHA2iXMoc\nTcHEbQmp6YeV0OLx4hYpqeTsEZ3DPT0UPi+X03NqmGW3YM4SM2Z/ISViS8BIjAFP\n0S4Hmgoayr5gvhOgJrAati+AuQLU8QgjTNgerEf/k9Bf98qdK6e40rdWZJa9kPWj\nysizzVTiWEodp4rzU3t/YAFhxWUBCXUrCVJCnC8cnmZ0m0C5Xjz58HAK3GyzuAqn\ngbjFO+VpAgMBAAECggEAA5rutwzWVFSjfK+ZA4FKDOGRbRrYg82neSu+2wUfIfYA\nOFhsyA1+ZjRd2jYpcgYUdbfYtnuqRFD7wY6NGfMlyQ6rTeb4v2npbIUB+9GP8R+2\nQk2po1CNp1kpuSrlkLgtQG95AYbnDLqDcU+smIq/9rSCcFCnK0bPPpc9xxriWkJj\nfeMSr8H4cw1G1Yc0AxSntccU9L9iUk5eFxF0oayBF8nrn6MX7ED45zwEl75xsAUF\nYasZOkbwNQUXBUg0tjtu26/GXfcojgd7Mhuko0/g6xdo0gKlURTtaVyMLo6a4n2I\nLC/ELHZPWLsMCnjVuOPKpF7NmVrY8FrBpnXH942ixQKBgQDSz+6baU9zieCXATDj\nSxPlyRj+NqAcpXE1T0AG1OqbpcsoYQ5/itwdZ15SktEC3VjxSJawofpmHIiy5zh8\n1aRK5iStcEuEjAs1EyIOCQEaYkSPoxXEVA6n2CwrTqvZr6nhPJUBDTLmUkalLsch\nh1+XyAoZG3uF5wn5Phqo+EPWTQKBgQDAtCxnsYTd2EETa3Wzy4zkB9aJokb49PUL\nvp8LscffT9873X2I0aND/U3VmwpifkyykXDsqbppCWCW7Ju2wfV5B1sOMuu4G/Ar\n1qafpvDPvzF5cWtrr4SWgivgbh6rWnjAwVEqcMZ+J9K+XGNXOPSuiaPczc18lE7t\nvZPdJpLRjQKBgEmi8AnBI0uMYbLda6I5W13sfJpvokXfVEf2wrqgLMLpiqk0HchX\nTMPIk53sQq3pe2PsoxZXvgtk9CrpsUWJqrWu5ijfDMHj2RZU9JRKeOQqZyB1KulF\nI0llrSgDduu2/HP8oV+YqKrjGmIgkNYZXz65VS2n9+Gx7j3tf4p+DdQRAoGAaxs5\nmyDV4qAx+2M89oPqeUvJ+JHTtMgh8zcuG0fi+cHhJ9sBzSwH/OArhNA5w2jDpHSm\nOURVMdBeeURlf/zqPSzTdV7kGV6d7R/PWOlm63EvRHq/5AiYPzd2v7U1IrSUbT6F\nqHsqODBWOCwNowsrJF+oTi+tSNL907INH1wzOnkCgYEA0fN0osP41ucOfgwcceYw\nwce6IATMjW6RAX4COL50pkPEnpmN4WqDPXzJEwFeA42RYUSsLudlrqKOmCDryO+F\nw2wbczhjc73CblLpOXgqwx6SKJLYwFFgDOv46FoaEus1AhnSPcUz+jN/63KIHY6v\nocqT6uU0vlF6qZUEFGhopPU=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-nftpa@paradise-2acdd.iam.gserviceaccount.com",
    "client_id": "108131453933067008059",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nftpa%40paradise-2acdd.iam.gserviceaccount.com"
  }

const app = {
    port: parseInt(process.env.PORT) || 5000,
    firebaseAccountInfo: fbase
      
};

const config = {
    local: { app, db: { uri: process.env.LOCAL_URI } },
    dev: { app, db: { uri: process.env.DEV_URI } },
    production: { app, db: { uri: process.env.PRODUCTION_URI } }
};

module.exports = config[env || "local" ];
