package com.example.chatbookapi.Entity;

import lombok.*;
import org.springframework.data.cassandra.core.mapping.*;
import java.time.*;
import java.util.*;
@Data
@Table("Comment")
public class Comment {

    @PrimaryKey
    private UUID commentID;
    private UUID postID;
    private String userID;
    private String userImage;
    private String userName;
    private String comment;
    private LocalDateTime timestamp;
}