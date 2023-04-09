package com.example.chatbookapi.Service;

import com.example.chatbookapi.Entity.*;
import com.example.chatbookapi.Repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import java.time.*;
import java.util.*;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public List<Post> savePost(final Post post) {

        LocalDateTime now = LocalDateTime.now();
        post.setPostId(UUID.randomUUID());
        post.setLikes(0);
        post.setDataTime(now);
        postRepository.save(post);
        return getAllPost();
    }

    public List<Post> getAllPost() {
        return postRepository.findAll();
    }

    public List<Post> deletePost(final UUID postId) {
        try {
            postRepository.deleteById(postId);
        } catch (Exception e) {
            throw new RuntimeException("Error while deleting post"+e);
        }
        return getAllPost();
    }
}
