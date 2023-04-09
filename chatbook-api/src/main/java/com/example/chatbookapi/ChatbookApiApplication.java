package com.example.chatbookapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.data.cassandra.repository.config.*;

@SpringBootApplication
@EnableCassandraRepositories
public class ChatbookApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChatbookApiApplication.class, args);
	}

}
