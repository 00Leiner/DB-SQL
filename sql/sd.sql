CREATE DATABASE practiceSQLDatabase;

CREATE TABLE posts{
    id INT(11) NOT NULL AUTO_INCREMENT PRIVATE KEY;
    title VARCHAR(200) NOT NULL;
    description TEXT NOT NULL;
    image_url TEXT;
    created_at TIMESTAMP DEFAULT CURRENT_TIMEL;
};