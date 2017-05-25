package com.springReact.config

import com.mongodb.Mongo
import com.mongodb.WriteConcern
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.authentication.UserCredentials
import org.springframework.data.mongodb.MongoDbFactory
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.SimpleMongoDbFactory

/**
 * Created by chetan on 12/5/17.
 */
@Configuration
public class MongoConfiguration {

  public @Bean MongoDbFactory mongoDbFactory() throws Exception {
    UserCredentials userCredentials = new UserCredentials("root", "nextdefault");
    return new SimpleMongoDbFactory(new Mongo(), "catalog", userCredentials);
  }

  public @Bean MongoTemplate mongoTemplate() throws Exception {
    mongoDbFactory().db.writeConcern=WriteConcern.SAFE
    return new MongoTemplate(mongoDbFactory());
  }
}

