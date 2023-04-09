package com.example.chatbookapi.Entity;

import lombok.*;
import org.springframework.data.cassandra.core.mapping.*;
import java.time.*;
import java.util.*;
@Data
@Table
public class Post {
    @PrimaryKey
    private UUID postId;
    private UUID userId;
    private String userName;
    private String imageURL;
    private String description;
    private String postImageURL;
    private long likes;
    private LocalDateTime dataTime;
}
