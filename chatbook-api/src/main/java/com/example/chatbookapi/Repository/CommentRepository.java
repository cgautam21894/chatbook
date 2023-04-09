package com.example.chatbookapi.Repository;

import com.example.chatbookapi.Entity.*;
import org.springframework.data.cassandra.repository.*;
import org.springframework.stereotype.*;
import java.util.*;

@Repository
public interface CommentRepository extends CassandraRepository<Comment, UUID> {
    Comment save(Comment comment);

    @AllowFiltering
    ArrayList<Comment> findAllByPostID(UUID postID);
}
