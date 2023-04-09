package com.example.chatbookapi.Entity;

import lombok.*;
import org.springframework.data.cassandra.core.mapping.*;
import java.time.*;
import java.util.*;
@Data
@Table
public class User {
    @PrimaryKey
    private UUID userId;
    private String userName;
    private String userImage;
    private boolean active;
    private LocalDateTime joiningDate;
}
