package com.example.chatbookapi.Service;


import com.example.chatbookapi.Entity.*;
import com.example.chatbookapi.Repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import java.time.*;
import java.util.*;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepo;

    @Autowired
    UserService userService;

    public Comment saveComment(Comment comment) {
        comment.setCommentID(UUID.randomUUID());
        comment.setTimestamp(LocalDateTime.now());
        return commentRepo.save(comment);
    }

    public ArrayList<Comment> getAllComment(UUID postID){
        ArrayList<Comment> result=commentRepo.findAllByPostID(postID);
        return result;
    }
}