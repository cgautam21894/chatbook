package com.example.chatbookapi.Entity;

import lombok.*;
import org.springframework.data.cassandra.core.mapping.*;
import java.time.*;
import java.util.*;

@Data
@Table
public class Status {
    @PrimaryKey
    private UUID statusID;
    private String userID;
    private String statusImageURL;
    private LocalDateTime uploadTIme;
}
